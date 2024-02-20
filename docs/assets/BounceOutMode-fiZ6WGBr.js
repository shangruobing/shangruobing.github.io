import{ak as b,_ as h}from"./index-U8ylzn9J.js";class g{constructor(s){this.container=s,this.modes=["bounce","split"]}async update(s,n,f,e){if(!this.modes.includes(e))return;const a=this.container;let o=!1;for(const[,r]of a.plugins)if(r.particleBounce!==void 0&&(o=await r.particleBounce(s,f,n)),o)break;if(o)return;const d=s.getPosition(),i=s.offset,t=s.getRadius(),u=b(d,t),c=a.canvas.size,{bounceHorizontal:l,bounceVertical:_}=await h(()=>import("./Utils-yZQuo-xd.js"),__vite__mapDeps([0,1,2]));l({particle:s,outMode:e,direction:n,bounds:u,canvasSize:c,offset:i,size:t}),_({particle:s,outMode:e,direction:n,bounds:u,canvasSize:c,offset:i,size:t})}}export{g as BounceOutMode};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Utils-yZQuo-xd.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}