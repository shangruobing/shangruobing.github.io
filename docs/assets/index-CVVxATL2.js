import{_ as o}from"./index-BLharBJw.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-jXIbqEDv.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-jXIbqEDv.js","assets/index-BLharBJw.js","assets/index-ByoDVq-K.css","assets/ValueWithRandom-D-P72tCc.js","assets/AnimationOptions-DgxEB3zd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
