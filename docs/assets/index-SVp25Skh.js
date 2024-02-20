import{_ as o}from"./index-BMcBvuq4.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-YFfCjU_-.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-YFfCjU_-.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}