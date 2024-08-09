import{_ as i}from"./index-Ckd3LtUW.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-B-AVtxsd.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-B-AVtxsd.js","assets/index-Ckd3LtUW.js","assets/index-B6GWzLQk.css","assets/ValueWithRandom-CUb29p_I.js","assets/AnimationOptions-Bodn2VeL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
