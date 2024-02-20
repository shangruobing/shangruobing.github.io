import{s,_ as n}from"./index-yepc7o5B.js";class o{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function a(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await n(()=>import("./Pusher-c_QS_iYj.js"),__vite__mapDeps([0,1,2,3]));return new u(e)},t)}export{o as Push,a as loadExternalPushInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pusher-c_QS_iYj.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}