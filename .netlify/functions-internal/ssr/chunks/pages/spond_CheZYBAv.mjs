import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"spond---what-is-it\">Spond - what is it?</h1>\n<p>Spond is a team communication app, commonly used by sports teams, coaches to communicate with their teams in a private and secure manner.</p>\n<h1 id=\"why-spond\">Why Spond?</h1>\n<p>This will allow members of the league to directly communicate with one another without having to publish email and phone lists.  It will allow us to communicate changes directly to the league as well as allow each match to post a record of the results.</p>\n<h1 id=\"im-old-school-and-dont-do-apps-on-a-smartphone\">I’m old school and don’t do apps on a smartphone</h1>\n<p>This is ok, if you don’t wish to use the app, only receive notifications by email, you only need to accept the group invite to be able to respond to events, comments and payment requests through your email. To reply to direct messages, edit your profile and get a fullI overview of the whole group, you can register on <a href=\"https://spond.com/register\">https://spond.com/register</a> and log in on <a href=\"https://spond.com/login\">https://spond.com/login</a>.</p>\n<p>If you download the app and log in, the email notifications will stop. When you log out of the app, the email notifications will start again.</p>\n<p>If you wish to unsubscribe from the email notifications you can do so at the bottom of the invitation. This is also where you re-subscribe.</p>\n<p>Having trouble send email to <a href=\"mailto:3puttfool@gmail.com\">3puttfool@gmail.com</a></p>\n<h1 id=\"how-to-get-spond\">How to get Spond?</h1>\n<p>On which platforms can I find the Spond App?</p>\n<p>Spond is available on;\niOS (<a href=\"https://apps.apple.com/us/app/spond/id755596884?ls=1\">App Store</a>) \\</p>\n<p>Android (<a href=\"https://play.google.com/store/apps/details?id=com.spond.spond&#x26;referrer=utm_source%3Dhomepage_footer\">Google Play</a>) \\</p>\n<p>Web (<a href=\"https://spond.com\">https://spond.com</a>)</p>\n<h1 id=\"download-the-app\">Download the app</h1>\n<p>Group Code = KPZIQ</p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/spond.md";
				const url = "/spond";
				function rawContent() {
					return "\n# Spond - what is it?\nSpond is a team communication app, commonly used by sports teams, coaches to communicate with their teams in a private and secure manner.\n\n# Why Spond?\nThis will allow members of the league to directly communicate with one another without having to publish email and phone lists.  It will allow us to communicate changes directly to the league as well as allow each match to post a record of the results.\n\n# I'm old school and don't do apps on a smartphone\nThis is ok, if you don't wish to use the app, only receive notifications by email, you only need to accept the group invite to be able to respond to events, comments and payment requests through your email. To reply to direct messages, edit your profile and get a fullI overview of the whole group, you can register on https://spond.com/register and log in on https://spond.com/login.\n \nIf you download the app and log in, the email notifications will stop. When you log out of the app, the email notifications will start again.\n \nIf you wish to unsubscribe from the email notifications you can do so at the bottom of the invitation. This is also where you re-subscribe.\n\nHaving trouble send email to 3puttfool@gmail.com \n\n# How to get Spond?\nOn which platforms can I find the Spond App?\n\nSpond is available on;\niOS ([App Store](https://apps.apple.com/us/app/spond/id755596884?ls=1)) \\\n\nAndroid ([Google Play](https://play.google.com/store/apps/details?id=com.spond.spond&referrer=utm_source%3Dhomepage_footer)) \\\n\nWeb (https://spond.com)\n\n# Download the app \nGroup Code = KPZIQ\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"spond---what-is-it","text":"Spond - what is it?"},{"depth":1,"slug":"why-spond","text":"Why Spond?"},{"depth":1,"slug":"im-old-school-and-dont-do-apps-on-a-smartphone","text":"I’m old school and don’t do apps on a smartphone"},{"depth":1,"slug":"how-to-get-spond","text":"How to get Spond?"},{"depth":1,"slug":"download-the-app","text":"Download the app"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
