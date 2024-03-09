import{_ as i}from"./index-BLharBJw.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-ChcMiwX8.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-ChcMiwX8.js","assets/ValueWithRandom-D-P72tCc.js","assets/AnimationOptions-DgxEB3zd.js","assets/index-BLharBJw.js","assets/index-ByoDVq-K.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
