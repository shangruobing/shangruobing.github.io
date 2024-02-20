import{_ as i}from"./index-BMcBvuq4.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Lo0PTieX.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Lo0PTieX.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css","assets/ValueWithRandom-MnfPxriB.js","assets/AnimationOptions-b_lK9z76.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}