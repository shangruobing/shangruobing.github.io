import{_ as o}from"./index-yepc7o5B.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-kRyIBnzS.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-kRyIBnzS.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}