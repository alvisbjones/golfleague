require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'dm-core'
require 'dm-types'
require 'dm-validations'
require 'dm-migrations'
require 'dm-timestamps'

DataMapper.setup(:default, ENV['DATABASE_URL'] || 'sqlite3:golfleague.db')


class League
  include DataMapper::Resource
  property :id, Serial
  property :name, String, :required => true, :unique => true
  property :archived, ParanoidBoolean    #deleted teams are marked archived
  property :updated_on, Date
  has n, :teams
  
end
class Team
  include DataMapper::Resource 
	property :id, Serial
	property :name, String, :required => true, :unique => true
	property :archived, ParanoidBoolean       #deleted teams are marked archived
  property :updated_on, Date
	belongs_to :league, :required =>false
	has n, :players

end

class Player
  include DataMapper::Resource
  property :id, Serial
	property :fname, String, :required => true
	property :lname, String, :required => true
	property :gender, Enum[:male, :female], :default => :male
	property :email, String, :format => :email_address, :messages => {:presence => "email not there",:format => 'email error'}
	property :phone, String
	property :captain, Boolean, :default => false
	property :archived, ParanoidDateTime  #deleted players are marked archived
  property :updated_at, DateTime
	belongs_to :team, :required =>false
	has n, :scores
		
end

class Score
  include DataMapper::Resource 
  belongs_to :player,    :key => true
  property :id, Integer, :key =>true
	property :date, Date
	property :value, Integer
	property :tournament, Boolean, :default => false
	property :rating, Float
	property :slope, Integer
	property :used, Boolean, :default => false       #used is true when score is used to create handicap index
  property :archived, ParanoidDateTime
  property :updated_at, DateTime
end






