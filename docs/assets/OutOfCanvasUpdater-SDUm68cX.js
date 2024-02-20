import{_ as i}from"./index-U8ylzn9J.js";const a=(s,t)=>s.default===t||s.bottom===t||s.left===t||s.right===t||s.top===t;class _{constructor(t){this._updateOutMode=async(o,e,u,n)=>{for(const r of this.updaters)await r.update(o,n,e,u)},this.container=t,this.updaters=[]}async init(t){this.updaters=[];const o=t.options.move.outModes;if(a(o,"bounce")){const{BounceOutMode:e}=await i(()=>import("./BounceOutMode-fiZ6WGBr.js"),__vite__mapDeps([0,1,2]));this.updaters.push(new e(this.container))}else if(a(o,"out")){const{OutOutMode:e}=await i(()=>import("./OutOutMode-QdDbi0it.js"),__vite__mapDeps([3,1,2]));this.updaters.push(new e(this.container))}else if(a(o,"destroy")){const{DestroyOutMode:e}=await i(()=>import("./DestroyOutMode-svpykS3L.js"),__vite__mapDeps([4,1,2]));this.updaters.push(new e(this.container))}else if(a(o,"none")){const{NoneOutMode:e}=await i(()=>import("./NoneOutMode-pZ7q0J_E.js"),__vite__mapDeps([5,1,2]));this.updaters.push(new e(this.container))}}isEnabled(t){return!t.destroyed&&!t.spawning}async update(t,o){const e=t.options.move.outModes;await this._updateOutMode(t,o,e.bottom??e.default,"bottom"),await this._updateOutMode(t,o,e.left??e.default,"left"),await this._updateOutMode(t,o,e.right??e.default,"right"),await this._updateOutMode(t,o,e.top??e.default,"top")}}export{_ as OutOfCanvasUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BounceOutMode-fiZ6WGBr.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/OutOutMode-QdDbi0it.js","assets/DestroyOutMode-svpykS3L.js","assets/NoneOutMode-pZ7q0J_E.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}