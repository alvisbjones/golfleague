import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"handicap-info\">Handicap info</h1>\n<p>What you should know - In 150 words or less</p>\n<p>Your Handicap Index is a portable number that represents your demonstrated golfing ability. It is based on your past scores relative to the difficulty of the course and tees played, as well as the playing conditions during each one of those rounds.</p>\n<p>To calculate your Handicap Index, your 8 best Score Differentials from your most recent 20 scores are averaged, and additional safeguards are included that:</p>\n<p>Prevent excessive upward movement within one year (see caps), and\nFurther reduce a Handicap Index after an exceptional score is posted (see exceptional score reduction).</p>\n<p>The following table shows how a Handicap Index is calculated for players with fewer than 20 scores in their scoring record.</p>\n<img src=\"/hdcpscores.png\" width=\"500\" alt=\"Scores used\">\n<p>Additional Resources:\n<a href=\"https://www.usga.org/content/usga/home-page/handicapping/world-handicap-system/topics/handicap-index-calculation.html\">https://www.usga.org/content/usga/home-page/handicapping/world-handicap-system/topics/handicap-index-calculation.html</a></p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/handicap.md";
				const url = "/handicap";
				function rawContent() {
					return "\n# Handicap info\n\nWhat you should know - In 150 words or less\n\nYour Handicap Index is a portable number that represents your demonstrated golfing ability. It is based on your past scores relative to the difficulty of the course and tees played, as well as the playing conditions during each one of those rounds.\n\nTo calculate your Handicap Index, your 8 best Score Differentials from your most recent 20 scores are averaged, and additional safeguards are included that:\n\nPrevent excessive upward movement within one year (see caps), and\nFurther reduce a Handicap Index after an exceptional score is posted (see exceptional score reduction).\n \n\nThe following table shows how a Handicap Index is calculated for players with fewer than 20 scores in their scoring record.\n\n<img src=\"/hdcpscores.png\" width=\"500\" alt=\"Scores used\">\n\n \nAdditional Resources:\nhttps://www.usga.org/content/usga/home-page/handicapping/world-handicap-system/topics/handicap-index-calculation.html\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"handicap-info","text":"Handicap info"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
