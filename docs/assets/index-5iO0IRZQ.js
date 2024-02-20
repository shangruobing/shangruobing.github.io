import{_ as e}from"./index-yepc7o5B.js";import{E as s}from"./EmitterShapeBase-9m8zmmPs.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-B0zI_fan.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-rWDDFMQP.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-rWDDFMQP.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css","assets/AnimatableColor-qUM4Wty7.js","assets/AnimationOptions-rPnu1eGy.js","assets/OptionsColor-_yaNfRfV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}