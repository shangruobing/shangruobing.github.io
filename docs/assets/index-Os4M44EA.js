import{_ as e}from"./index-BMcBvuq4.js";import{E as s}from"./EmitterShapeBase-9m8zmmPs.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-B0zI_fan.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-ci_76oNw.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-ci_76oNw.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css","assets/AnimatableColor-GjOjXekt.js","assets/AnimationOptions-b_lK9z76.js","assets/OptionsColor-XRBgGeEw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}