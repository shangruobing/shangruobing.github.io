import{_ as o,G as d}from"./index-U8ylzn9J.js";const n=5;class c{async draw(e){const{particle:t,radius:a}=e,s=this.getCenter(t,a),r=this.getSidesData(t,a),{drawPolygon:i}=await o(()=>import("./Utils-L9ynFOe0.js"),__vite__mapDeps([0,1,2]));i(e,s,r)}getSidesCount(e){const t=e.shapeData;return Math.round(d((t==null?void 0:t.sides)??n))}}export{c as P};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-L9ynFOe0.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}