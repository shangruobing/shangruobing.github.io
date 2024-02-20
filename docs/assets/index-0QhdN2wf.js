import{_ as e}from"./index-U8ylzn9J.js";import{E as s}from"./EmitterShapeBase-9m8zmmPs.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-B0zI_fan.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-N58HL_xq.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-N58HL_xq.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/AnimatableColor-BUln9NcA.js","assets/AnimationOptions-fGmo0vLh.js","assets/OptionsColor-o8rG_6Tl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}