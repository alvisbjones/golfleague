import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"2024-archive-info\">2024 archive info:</h1>\n<p>teams: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2024/pdf/teams.pdf\">https://alvisbjones.github.io/golfpdf2024/pdf/teams.pdf</a> <br></p>\n<p>player scores file: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2024/pdf/playerdetail.txt\">https://alvisbjones.github.io/golfpdf2024/pdf/playerdetail.txt</a> <br></p>\n<p>Standings: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2024/pdf/2024Standings.pdf\">https://alvisbjones.github.io/golfpdf2024/pdf/2024Standings.pdf</a><br></p>\n<p>Schedule: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2024/pdf/2024Schedule.pdf\">https://alvisbjones.github.io/golfpdf2024/pdf/2024Schedule.pdf</a>\n<br></p>\n<p>Playoffs: <br>\n<a href=\"https://alvisbjones.github.io/golfpdf2024/pdf/2024playoffs.pdf\">https://alvisbjones.github.io/golfpdf2024/pdf/2024playoffs.pdf</a>\n<br></p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/archive/archive2024.md";
				const url = "/archive/archive2024";
				function rawContent() {
					return "# 2024 archive info:\n\nteams: <br>\nhttps://alvisbjones.github.io/golfpdf2024/pdf/teams.pdf <br>\n\nplayer scores file: <br>\nhttps://alvisbjones.github.io/golfpdf2024/pdf/playerdetail.txt <br>\n\nStandings: <br>\nhttps://alvisbjones.github.io/golfpdf2024/pdf/2024Standings.pdf<br>\n\nSchedule: <br>\nhttps://alvisbjones.github.io/golfpdf2024/pdf/2024Schedule.pdf\n <br>\n\nPlayoffs: <br>\nhttps://alvisbjones.github.io/golfpdf2024/pdf/2024playoffs.pdf\n<br>\n\n\n\n\n\n\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"2024-archive-info","text":"2024 archive info:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
