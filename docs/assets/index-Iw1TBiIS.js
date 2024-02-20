import{_ as o}from"./index-BMcBvuq4.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-STliD7IL.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-STliD7IL.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css","assets/OptionsColor-XRBgGeEw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}