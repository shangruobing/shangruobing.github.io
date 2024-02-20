import{_ as i}from"./index-yepc7o5B.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-1PBze9Cl.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-1PBze9Cl.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css","assets/ValueWithRandom-fueso5V3.js","assets/AnimationOptions-rPnu1eGy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}