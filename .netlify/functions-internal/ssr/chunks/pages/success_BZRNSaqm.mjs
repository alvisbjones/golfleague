import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { b as $$Nav, $ as $$Layout } from './about_BQgL6dst.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-5y44lzmc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-5y44lzmc> <h1 data-astro-cid-5y44lzmc><span class=" text-gradient" data-astro-cid-5y44lzmc>Spring Creek Golf League</span></h1> <div class="navigation" data-astro-cid-5y44lzmc> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-5y44lzmc": true })} </div>
Thanks for submitting your match information.
</main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/success.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/success.astro";
const $$url = "/success";

export { $$Success as default, $$file as file, $$url as url };
