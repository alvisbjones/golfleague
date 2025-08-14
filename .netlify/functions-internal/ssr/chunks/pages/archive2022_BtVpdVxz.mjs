import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"2022-archive-info\">2022 archive info:</h1>\n<p>scores file: <br>\n<a href=\"https://alvisbjones.github.io/golfleague2022/pdf/scores.txt\">https://alvisbjones.github.io/golfleague2022/pdf/scores.txt</a> <br></p>\n<p>Standings: <br>\n<a href=\"https://alvisbjones.github.io/golfleague2022/pdf/2022standings.pdf\">https://alvisbjones.github.io/golfleague2022/pdf/2022standings.pdf</a> <br></p>\n<p>Schedule: <br>\n<a href=\"https://alvisbjones.github.io/golfleague2022/pdf/LeagueSchedule2022.pdf\">https://alvisbjones.github.io/golfleague2022/pdf/LeagueSchedule2022.pdf</a> <br></p>\n<p>Playoffs: <br>\n<a href=\"https://alvisbjones.github.io/golfleague2022/pdf/2022playoff.pdf\">https://alvisbjones.github.io/golfleague2022/pdf/2022playoff.pdf</a></p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/archive/archive2022.md";
				const url = "/archive/archive2022";
				function rawContent() {
					return "# 2022 archive info:\nscores file: <br>\nhttps://alvisbjones.github.io/golfleague2022/pdf/scores.txt <br>\n\nStandings: <br>\nhttps://alvisbjones.github.io/golfleague2022/pdf/2022standings.pdf <br>\n\nSchedule: <br>\nhttps://alvisbjones.github.io/golfleague2022/pdf/LeagueSchedule2022.pdf <br>\n\nPlayoffs: <br>\nhttps://alvisbjones.github.io/golfleague2022/pdf/2022playoff.pdf\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"2022-archive-info","text":"2022 archive info:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
