import{_ as c}from"./index-yepc7o5B.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-kekpnjIB.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-kekpnjIB.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}