import{_ as i}from"./index-yepc7o5B.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-MRq833eS.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-MRq833eS.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css","assets/ValueWithRandom-fueso5V3.js","assets/AnimationOptions-rPnu1eGy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}