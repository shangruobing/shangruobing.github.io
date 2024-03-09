import{_ as o}from"./index-BLharBJw.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-DgwDx10O.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-DgwDx10O.js","assets/index-BLharBJw.js","assets/index-ByoDVq-K.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
