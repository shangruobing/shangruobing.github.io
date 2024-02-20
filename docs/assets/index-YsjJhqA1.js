import{_ as e}from"./index-yepc7o5B.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-9yPD3V_3.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-9yPD3V_3.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}