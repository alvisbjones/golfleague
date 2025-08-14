import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<a href="/">Home</a>`;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r><span class=" text-gradient" data-astro-cid-kh7btl4r>Spring Creek Golf League</span></h1> <div class="navigation" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-kh7btl4r": true })} </div> <ul role="list" class="link-card-grid" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Card", $$Card, { "href": "/handicap", "title": "Handicap Information", "body": "Handicaps", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://alvisbjones.github.io/golfpdf2023/pdf/bylaws.pdf", "title": "Rules", "body": "Rules for the golf league", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://www.watterscreekgolf.com", "title": "Watters Creek", "body": "Course Website", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "https://alvisbjones.github.io/jsonfiles/playerrpt.md", "title": "Player info", "body": "list of players", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/spond", "title": "Golf League Communication", "body": "Stay in touch with Spond", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/archive/archive2022", "title": "2022 info", "body": "Archive", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/archive/archive2023", "title": "2023 info", "body": "Archive", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/archive/archive2024", "title": "2024 info", "body": "Archive", "data-astro-cid-kh7btl4r": true })} </ul> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/about.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Card as a, $$Nav as b, about as c };
