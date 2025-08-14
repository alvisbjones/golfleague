import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { b as $$Nav, $ as $$Layout } from './about_BQgL6dst.mjs';
/* empty css                               */

const $$Astro = createAstro();
const $$Tallysheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tallysheet;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-tfhxyp7e": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-tfhxyp7e> <h1 data-astro-cid-tfhxyp7e><span class=" text-gradient" data-astro-cid-tfhxyp7e>Spring Creek Golf League</span></h1> <div class="navigation" data-astro-cid-tfhxyp7e> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-tfhxyp7e": true })} </div> <p class="instructions" data-astro-cid-tfhxyp7e>
Send copy of your match documents to <a href="mailto:3puttfool@gmail.com?Subject=Tally%20Sheet" data-astro-cid-tfhxyp7e>Tally Sheet</a>
(3puttfool@gmail.com)
</p> <!-- html comment --> <!-- HTML comment syntax is valid in .astro files 
		<ul role="list" class="link-card-grid">
			<Card
				href="/form"
				title="Submit Tally Sheet"
				body="Use this link to submit scores"
			/>
		</ul>
		--> <p data-astro-cid-tfhxyp7e>Fill out your score card and tally sheet as normal, 
			and then send a photo to 3puttfool@gmail.com <br data-astro-cid-tfhxyp7e> <br data-astro-cid-tfhxyp7e>
Doesn't need to be highest resolution, but don't pick lowest <br data-astro-cid-tfhxyp7e>
Iphone large (1.6MB) is a good resolution <br data-astro-cid-tfhxyp7e>
Example good photo:</p> <p data-astro-cid-tfhxyp7e> <img src="/example.jpg" width="500" alt="Tally Sheet Picture" data-astro-cid-tfhxyp7e> </p> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/tallysheet.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/tallysheet.astro";
const $$url = "/tallysheet";

export { $$Tallysheet as default, $$file as file, $$url as url };
