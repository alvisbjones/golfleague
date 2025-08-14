import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, l as Fragment } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { b as $$Nav, $ as $$Layout } from './about_BQgL6dst.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Teams = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Teams;
  const datetime = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "America/Chicago" });
  const response = await fetch("https://alvisbjones.github.io/jsonfiles/teamplayer.json");
  const json = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-gpev5nox": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-gpev5nox> <h1 data-astro-cid-gpev5nox><span class=" text-gradient" data-astro-cid-gpev5nox>Spring Creek Golf League</span></h1> <div class="navigation" data-astro-cid-gpev5nox> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-gpev5nox": true })} </div> <p class="instructions" data-astro-cid-gpev5nox>
Please send updates to <a href="mailto:3puttfool@gmail.com?Subject=Changes" data-astro-cid-gpev5nox>3puttfool</a>
(3puttfool@gmail.com)
</p> <p data-astro-cid-gpev5nox> Updated: ${datetime}</p> <ol data-astro-cid-gpev5nox> ${json.teams.map((team) => renderTemplate`<li data-astro-cid-gpev5nox>${team.name}</li>

				${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-gpev5nox": true }, { "default": ($$result3) => renderTemplate`${team.players.map((player) => renderTemplate`<div style="display: flex; justify-content: space-between;" data-astro-cid-gpev5nox> <p style="flex-basis: 30%;" data-astro-cid-gpev5nox>${player.firstName} ${player.lastName} (${player.hdcpIndex})</p> </div>`)}` })}`)} </ol> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/teams.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/teams.astro";
const $$url = "/teams";

export { $$Teams as default, $$file as file, $$url as url };
