import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DaWXSZ1P.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CKbgKxkL.mjs');
const _page1 = () => import('./chunks/about_nNXseKgd.mjs');
const _page2 = () => import('./chunks/archive2022_plMrIT6z.mjs');
const _page3 = () => import('./chunks/archive2023_BWEdr4sf.mjs');
const _page4 = () => import('./chunks/archive2024_Cb9nJI8B.mjs');
const _page5 = () => import('./chunks/archive2025_CnqCRN0C.mjs');
const _page6 = () => import('./chunks/form_zyXYZLTe.mjs');
const _page7 = () => import('./chunks/formhtml_D5ybSYnr.mjs');
const _page8 = () => import('./chunks/handicap_BuGxYmTC.mjs');
const _page9 = () => import('./chunks/players_DH2-Onc3.mjs');
const _page10 = () => import('./chunks/playerrpt_DEa3uEmj.mjs');
const _page11 = () => import('./chunks/spond_CxFHVpdV.mjs');
const _page12 = () => import('./chunks/success_tcx4-HOh.mjs');
const _page13 = () => import('./chunks/tallysheet_B6WMjoxM.mjs');
const _page14 = () => import('./chunks/teams_lwxCPjrc.mjs');
const _page15 = () => import('./chunks/index_DekpXApw.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/archive/archive2022.md", _page2],
    ["src/pages/archive/archive2023.md", _page3],
    ["src/pages/archive/archive2024.md", _page4],
    ["src/pages/archive/archive2025.md", _page5],
    ["src/pages/form.astro", _page6],
    ["src/pages/formhtml.html", _page7],
    ["src/pages/handicap.md", _page8],
    ["src/pages/players.astro", _page9],
    ["src/pages/reports/playerrpt.md", _page10],
    ["src/pages/spond.md", _page11],
    ["src/pages/success.astro", _page12],
    ["src/pages/tallysheet.astro", _page13],
    ["src/pages/teams.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1ba4914c-a030-4d2d-b8e1-5ef22743f3cd"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
