import{_ as i}from"./index-BLharBJw.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-G-NX1FpA.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-G-NX1FpA.js","assets/index-BLharBJw.js","assets/index-ByoDVq-K.css","assets/ValueWithRandom-D-P72tCc.js","assets/AnimationOptions-DgxEB3zd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
