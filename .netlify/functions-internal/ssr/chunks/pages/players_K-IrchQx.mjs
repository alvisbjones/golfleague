import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D8MhdSIb.mjs';
import 'kleur/colors';
import { b as $$Nav, $ as $$Layout } from './about_BQgL6dst.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'react-dom';
import { AgGridReact } from 'ag-grid-react';
/* empty css                            */

const response = await fetch("https://alvisbjones.github.io/jsonfiles/player.json");
const pList = await response.json();
const GetPlayerList = () => {
  return pList;
};
const PlayerList = () => {
  const [rowData] = useState(GetPlayerList());
  const [columnDefs] = useState([
    { field: "firstName", Width: 10, sortable: true, filter: true, resizable: true },
    { field: "lastName", Width: 10, sortable: true, filter: true, resizable: true },
    { field: "hdcpIndex", Width: 15, sortable: true, type: "numericColumn", resizable: true },
    { field: "email", sortable: true, filter: true },
    { field: "phone", sortable: true }
  ]);
  return /* @__PURE__ */ jsx("div", { className: "ag-theme-alpine", style: { height: 500, width: 600 }, children: /* @__PURE__ */ jsx(AgGridReact, { rowData, columnDefs }) });
};

const $$Astro = createAstro();
const $$Players = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Players;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spring Creek Golf League", "data-astro-cid-dybmqnsd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-dybmqnsd> <h1 data-astro-cid-dybmqnsd><span class=" text-gradient" data-astro-cid-dybmqnsd>Spring Creek Golf League</span></h1> <div class="navigation" data-astro-cid-dybmqnsd> ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-dybmqnsd": true })} </div> <p class="instructions" data-astro-cid-dybmqnsd>
Please send updates for email & phone to <a href="mailto:3puttfool@gmail.com?Subject=Changes" data-astro-cid-dybmqnsd>3puttfool</a>
(3puttfool@gmail.com)
</p> <h3 data-astro-cid-dybmqnsd><a href="https://alvisbjones.github.io/jsonfiles/playerdetail.txt" data-astro-cid-dybmqnsd>Player Detail Scores</a></h3><br data-astro-cid-dybmqnsd> <div class="table" data-astro-cid-dybmqnsd> ${renderComponent($$result2, "PlayerList", PlayerList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/components/PlayersList", "client:component-export": "default", "data-astro-cid-dybmqnsd": true })} </div> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/players.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/golfleague/src/pages/players.astro";
const $$url = "/players";

export { $$Players as default, $$file as file, $$url as url };
