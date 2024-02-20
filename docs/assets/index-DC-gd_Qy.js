import{_ as o}from"./index-BMcBvuq4.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-aZoTpxDC.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-aZoTpxDC.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css","assets/ValueWithRandom-MnfPxriB.js","assets/AnimationOptions-b_lK9z76.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}