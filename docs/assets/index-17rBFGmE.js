import{_ as i}from"./index-BMcBvuq4.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-u2j-RLLi.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-u2j-RLLi.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css","assets/ValueWithRandom-MnfPxriB.js","assets/AnimationOptions-b_lK9z76.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}