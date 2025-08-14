import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { a as $$Card, $ as $$Layout } from './about_BQgL6dst.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6><span class="text-gradient" data-astro-cid-j7pv25f6>Spring Creek Golf League</span></h1> <p class="instructions" data-astro-cid-j7pv25f6>
Welcome to the Spring Creek Golf League for 2025.<br data-astro-cid-j7pv25f6>
See Info/About for joining Spond App for staying up to date <br data-astro-cid-j7pv25f6>
Send updates to <a href="mailto:3puttfool@gmail.com?Subject=Changes" data-astro-cid-j7pv25f6>3puttfool</a>
(3puttfool@gmail.com)
</p> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "href": "/teams", "title": "Teams", "body": "2025 team listing with handicaps", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/players", "title": "Players", "body": "Player list - scores within last 5 years", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://alvisbjones.github.io/jsonfiles/2025Schedule.pdf", "title": "Schedule", "body": "2025 Schedule - 12 Team Round Robin", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://alvisbjones.github.io/jsonfiles/2025Standings.pdf", "title": "Standings", "body": "Week to week results for 2025", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://alvisbjones.github.io/jsonfiles/2025playoffs.pdf", "title": "Playoffs 2025", "body": "2025 Playoff Bracket", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/about/", "title": "Info / About", "body": "Handicap info, Course info, Rules, Misc", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/tallysheet", "title": "Tally Sheet", "body": "Enter your info", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/index.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
