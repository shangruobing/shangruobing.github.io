import{_ as e}from"./index-Ckd3LtUW.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-BpVmrqQt.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-BpVmrqQt.js","assets/index-Ckd3LtUW.js","assets/index-B6GWzLQk.css","assets/AnimatableColor-CXHEvoXt.js","assets/AnimationOptions-Bodn2VeL.js","assets/OptionsColor-CbqTVmyK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
