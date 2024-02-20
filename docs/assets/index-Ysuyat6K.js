import{_ as o}from"./index-U8ylzn9J.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-FKVghQeY.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-FKVghQeY.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/ValueWithRandom-4czRbOqm.js","assets/AnimationOptions-fGmo0vLh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}