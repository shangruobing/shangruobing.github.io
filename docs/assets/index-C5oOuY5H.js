import{_ as o}from"./index-Ckd3LtUW.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-BuKjQTPl.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-BuKjQTPl.js","assets/index-Ckd3LtUW.js","assets/index-B6GWzLQk.css","assets/OptionsColor-CbqTVmyK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}