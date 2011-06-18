# => this program reads the dat files from the golf league handicap and loads to a sqlite db
puts"Begin"
require "rubygems"
require "sqlite3"
load 'stringextension.rb'     #extend String class to handle name capitalization (Irish names Mc MAC or O')
load 'golfleaguemodel.rb'
DataMapper.finalize
DataMapper.auto_migrate!

# open flat files to be read
members = File.new("members.dat")
scores = File.new("scores.dat")

# scores has packed data
scores.binmode
scorecount = 1

# member data is loaded in to the player hash to be sorted by id
players = Hash.new

#assign teams to generic league and team
league = League.new(:name => "League")
team = Team.new(:name => "Team")
Player.destroy
league.teams << team
league.save
league2 = League.new(:name => "League2")
league2.save
league2.destroy

# process member file create a hash in order to sort by id
members.each do |line|
  linefix = line.gsub(',.', ',0.')  #fix indexes lower than 1
  data = eval("[" + linefix + "]")  # turn comma delimited record read into an array
  id = data[1]                      #member key is second item in the array
 
  if id == 0 then                   #strip out 0 record
    next
  end
  name = data[0].strip              # grab comma delimited name and strip leading and trailing spaces
  name = data[0].split(', ')        #break name into first and last names
  fname = name[1].strip    
  fname.downcase!                   # downcase both first and last names as nameize expects them that way.
  lname = name[0].downcase 
  players[id] = "#{id},#{fname.nameize},#{lname.nameize},#{data[2]},#{data[3].delete("-")},#{data[6]},#{data[7]}" 
end 

list = players.sort                 #use hash sort to sort by id as records in scores.dat are in id order

#process sorted records - each player record has 20 score records
list.each do |key, val|
  v = val.split(',')
  #puts v[4]
  #exit
  
  if v[4] == "L" then
      player = Player.new(:fname => v[1], :lname => v[2], :gender => :female, :email => " ", :phone => " ")
  else
      player = Player.new(:fname => v[1], :lname => v[2], :gender => :male, :email => " ", :phone => " ")
  end

  # team.players << player

  #read a block of scores until back in sync
  #the score data is in blocks of 20 scores for each member
  #the member id is equal the record location within scores
  #for example member id 1581 has a block of 20 scores starting with the 1581 record in scores
  #we need to check that we are in sync
  
  until key == scorecount do
     syncread = scores.sysread(16)
     scorecount = scorecount + 1  
  end
    
 #read 20 scores for each player and process scores and insert into sqlite database
 #player = Player.get(scorecount)  #read player to associate the scores with
 scorekey = 1
 puts player.fname + " " + player.lname
 20.times do
  
   month = scores.sysread(2)
   day = scores.sysread(2)
   year = scores.sysread(2)
   sline = scores.sysread(3)
   course = scores.sysread(1)
   #course = 1 sawtooth rating 36, course = 9 blackjack rating 34
   #
   sline = scores.sysread(2)
   score = scores.sysread(2)
   sline = scores.sysread(1)
   marked = scores.sysread(1)
   tournament = marked.unpack('M')
   #puts tournament 
   y = year.unpack('c')
   m = month.unpack('c')
   d = day.unpack('c')
   s = score.unpack('M')
   c = course.unpack('M')

   if m[0].to_i > 0 and m[0].to_i < 13


   datework = Date.parse(y[0].to_s + "/"+ m[0].to_s + "/"+ d[0].to_s)
   #puts datework
   #puts datework.to_s + " score = " + s[0].to_s
   score = Score.new(:id =>scorekey, :date =>datework, :value =>s[0], :rating =>36, :slope => 113)
   if tournament[0].to_s == 'T'
     score.tournament = true
   end
   if c[0] == '9'   #course = 1 sawtooth rating 36, course = 9 blackjack rating 34
     score.rating = 34
   end
   
   player.scores << score
   scorekey = scorekey+1
   else
      "************found a bad date******************"
   end
   
   scorecount = scorecount + 1
 end
 player.save
 #break
end

league.save
members.close
scores.close
puts "end"
