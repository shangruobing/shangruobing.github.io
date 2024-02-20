import{_ as s,i as l,e as c,l as p,a as d}from"./index-BMcBvuq4.js";const r=["text","character","char","multiline-text"];class u{async draw(t){const{drawText:e}=await s(()=>import("./Utils-sgsa1km9.js"),__vite__mapDeps([0,1,2]));e(t)}async init(t){const e=t.actualOptions;if(r.find(a=>l(a,e.particles.shape.type))){const a=r.map(n=>e.particles.shape.options[n]).find(n=>!!n),i=[];c(a,n=>{i.push(p(n.font,n.weight))}),await Promise.all(i)}}async particleInit(t,e){if(!e.shape||!r.includes(e.shape))return;const a=e.shapeData;if(a===void 0)return;const i=a.value;i!==void 0&&(e.text=d(i,e.randomIndexData),await Promise.resolve())}}const _=Object.freeze(Object.defineProperty({__proto__:null,TextDrawer:u,validTypes:r},Symbol.toStringTag,{value:"Module"}));async function h(o,t=!0){const{TextDrawer:e}=await s(()=>Promise.resolve().then(()=>_),void 0);await o.addShape(r,new e,t)}export{h as loadTextShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-sgsa1km9.js","assets/index-BMcBvuq4.js","assets/index-kY2oJyCf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}