import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './about_BQgL6dst.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate(_a || (_a = __template(["", `  <script>

async function getTeamData(url) {
  const response = await fetch(url);
  const teams = await response.json();
  console.log('await finished')
  loadFormData(teams)
  return teams;
}


//window.onload = function() {
loadFormData = function(teams) {
  const teamPlayer = teams
  const team1Sel = document.getElementById("team1");
  const team2Sel = document.getElementById("team2");
  const playerSel1A = document.getElementById("player1A");
  const playerSel2A = document.getElementById("player2A");
  const playerSel1B = document.getElementById("player1B");
  const playerSel2B = document.getElementById("player2B");
  
  console.log("before select load")
 
  for (const t of teamPlayer.teams) {
    console.log(t)
    team1Sel.options[team1Sel.options.length] = new Option(t.name, t.number-1);
    team2Sel.options[team2Sel.options.length] = new Option(t.name, t.number-1);
  }

  if(team1Sel.length <= 0) {
    team1Sel.refresh()
    location.reload()
  } 

  team1Sel.onchange = function() {
    if (team1Sel.selectedIndex == 0) {
      playerSel1A.length = 1;
      playerSel1B.length = 1;
    }
    
    if (team1Sel.selectedIndex > 0) {
      playerSel1A.length = 1;
      playerSel1B.length = 1;
      for (const p of teamPlayer.teams[this.value].players) {
        //alert(p.pid)
        const name = p.lastName + "," + p.firstName
        playerSel1A.options[playerSel1A.options.length] = new Option(name, p.pid);
        playerSel1B.options[playerSel1B.options.length] = new Option(name, p.pid);
    }
    }
  }

  team2Sel.onchange = function() {
    if (team2Sel.selectedIndex == 0) {
      playerSel2A.length = 1;
      playerSel2B.length = 1;
    }
    if (team2Sel.selectedIndex > 0) {
      playerSel2A.length = 1;
      playerSel2B.length = 1;
      for (const p of teamPlayer.teams[this.value].players) {
      //alert(p.pid)
        const name = p.lastName + "," + p.firstName
        playerSel2A.options[playerSel2A.options.length] = new Option(name, p.pid);
        playerSel2B.options[playerSel2B.options.length] = new Option(name, p.pid);
      }
    }
  }

}

const teamPlayer = getTeamData('https://alvisbjones.github.io/jsonfiles/teamplayer.json');
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-xb3inwvi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-xb3inwvi>Tally Sheet</h1><br data-astro-cid-xb3inwvi> <form name="tallysheet" id="form1" method="post" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field" action="/success/" data-astro-cid-xb3inwvi> <input type="hidden" name="bot-field" data-astro-cid-xb3inwvi> <div class="team" data-astro-cid-xb3inwvi> <h4 data-astro-cid-xb3inwvi> Select Scheduled date</h4>
Match Scheduled Date:
<input type="date" name="date" data-astro-cid-xb3inwvi> <br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> <h4 data-astro-cid-xb3inwvi> Refresh page if selections not showing.</h4> <div class="teamsel" data-astro-cid-xb3inwvi>
Team: <select name="team1" id="team1" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Select team</option> </select><br data-astro-cid-xb3inwvi> </div> <div class="points" data-astro-cid-xb3inwvi>
Points: <input type="number" name="t1pts" min="0" max="54" data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div>
A: <select name="p1A" id="player1A" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Please select player</option> </select><br data-astro-cid-xb3inwvi> <div class="scores" data-astro-cid-xb3inwvi>
Score (Gross): <input type="number" id="p1Ascore" name="p1Ascore" min="30" max="72" data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div>
B: <select name="p1B" id="player1B" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Please select player</option> </select><br data-astro-cid-xb3inwvi> <div class="scores" data-astro-cid-xb3inwvi>
Score (Gross): <input type="number" id="p1Bscore" name="p1Bscore" min="30" max="72" data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div> </div><br data-astro-cid-xb3inwvi> <div class="team" data-astro-cid-xb3inwvi> <div class="teamsel" data-astro-cid-xb3inwvi>
Team: <select name="team2" id="team2" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Select team</option> </select><br data-astro-cid-xb3inwvi> </div> <div class="points" data-astro-cid-xb3inwvi>
Points: <input type="number" id="t2pts" name="t2pts" min="0" max="54" data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div>
A: <select name="p2A" id="player2A" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Please select player</option> </select><br data-astro-cid-xb3inwvi> <div class="scores" data-astro-cid-xb3inwvi>
Score (Gross): <input type="number" id="p2Ascore" name="p2Ascore" min="30" max="72" data-astro-cid-xb3inwvi> <br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div>
B: <select name="p2B" id="player2B" data-astro-cid-xb3inwvi> <option value="" selected="selected" data-astro-cid-xb3inwvi>Please select player</option> </select><br data-astro-cid-xb3inwvi> <div class="scores" data-astro-cid-xb3inwvi>
Score (Gross): <input type="number" id="p2Bscore" name="p2Bscore" min="30" max="72" data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div> </div> <br data-astro-cid-xb3inwvi> <div id="upload" data-astro-cid-xb3inwvi> <label for="tally" data-astro-cid-xb3inwvi>Tallysheet & scorecard photo</label><br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> <input type="file" name="tally" id="tally" accept="image/*" data-astro-cid-xb3inwvi> <br data-astro-cid-xb3inwvi><br data-astro-cid-xb3inwvi> </div> <input type="submit" value="submit" id="submit" data-astro-cid-xb3inwvi> </form> ` }));
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/form.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/form.astro";
const $$url = "/form";

export { $$Form as default, $$file as file, $$url as url };
