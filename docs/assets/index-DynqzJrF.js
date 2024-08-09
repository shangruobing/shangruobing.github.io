import{_ as i}from"./index-Ckd3LtUW.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Ci7T4j0h.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Ci7T4j0h.js","assets/ValueWithRandom-CUb29p_I.js","assets/AnimationOptions-Bodn2VeL.js","assets/index-Ckd3LtUW.js","assets/index-B6GWzLQk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
