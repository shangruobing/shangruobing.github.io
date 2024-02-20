import{_ as e}from"./index-U8ylzn9J.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-8FQQYqVZ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-8FQQYqVZ.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}