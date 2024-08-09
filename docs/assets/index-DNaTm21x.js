import{_ as o}from"./index-Ckd3LtUW.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-BlGs_dp1.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-BlGs_dp1.js","assets/index-Ckd3LtUW.js","assets/index-B6GWzLQk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
