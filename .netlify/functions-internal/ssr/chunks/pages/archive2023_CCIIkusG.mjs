import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"2023-archive-info\">2023 archive info:</h1>\n<p>teams: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2023/pdf/teams.pdf\">https://alvisbjones.github.io/golfpdf2023/pdf/teams.pdf</a> <br></p>\n<p>player scores file: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2023/pdf/playerdetail.txt\">https://alvisbjones.github.io/golfpdf2023/pdf/playerdetail.txt</a> <br></p>\n<p>Standings: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2023/pdf/2023Standings.pdf\">https://alvisbjones.github.io/golfpdf2023/pdf/2023Standings.pdf</a><br></p>\n<p>Schedule: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2023/pdf/2023Schedule.pdf\">https://alvisbjones.github.io/golfpdf2023/pdf/2023Schedule.pdf</a>\n<br></p>\n<p>Playoffs: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2023/pdf/2023playoffs.pdf\">https://alvisbjones.github.io/golfpdf2023/pdf/2023playoffs.pdf</a>\n<br></p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/archive/archive2023.md";
				const url = "/archive/archive2023";
				function rawContent() {
					return "# 2023 archive info:\n\nteams: <br>\nhttps://alvisbjones.github.io/golfpdf2023/pdf/teams.pdf <br>\n\nplayer scores file: <br>\nhttps://alvisbjones.github.io/golfpdf2023/pdf/playerdetail.txt <br>\n\nStandings: <br>\nhttps://alvisbjones.github.io/golfpdf2023/pdf/2023Standings.pdf<br>\n\nSchedule: <br>\nhttps://alvisbjones.github.io/golfpdf2023/pdf/2023Schedule.pdf\n <br>\n\nPlayoffs: <br>\nhttps://alvisbjones.github.io/golfpdf2023/pdf/2023playoffs.pdf\n<br>\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"2023-archive-info","text":"2023 archive info:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
