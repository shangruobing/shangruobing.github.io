import{_ as o}from"./index-yepc7o5B.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-4tJFON_F.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-4tJFON_F.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css","assets/ValueWithRandom-fueso5V3.js","assets/AnimationOptions-rPnu1eGy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}