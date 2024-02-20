import{_ as i}from"./index-U8ylzn9J.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-NjBLOJIt.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-NjBLOJIt.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/ValueWithRandom-4czRbOqm.js","assets/AnimationOptions-fGmo0vLh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}