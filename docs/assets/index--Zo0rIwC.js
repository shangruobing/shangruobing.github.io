import{s as o,_ as r}from"./index-BMcBvuq4.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-4zyegoVi.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-4zyegoVi.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}