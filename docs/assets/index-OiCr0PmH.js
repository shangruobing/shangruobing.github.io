import{_ as n}from"./index-U8ylzn9J.js";async function i(a,t=!0){await a.addInteractor("externalPause",async e=>{const{Pauser:r}=await n(()=>import("./Pauser-r1jwQwUV.js"),__vite__mapDeps([0,1]));return new r(e)},t)}export{i as loadExternalPauseInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pauser-r1jwQwUV.js","assets/ExternalInteractorBase-St1QSTOy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}