import{I as d,_ as l,Q as c,$ as u,a0 as y,e as f}from"./index-U8ylzn9J.js";class v{constructor(s,e){this.container=e,this._engine=s,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]};const i=0;e.getEmitter=t=>t===void 0||d(t)?this.array[t??i]:this.array.find(r=>r.name===t),e.addEmitter=async(t,r)=>this.addEmitter(t,r),e.removeEmitter=t=>{const r=e.getEmitter(t);r&&this.removeEmitter(r)},e.playEmitter=t=>{const r=e.getEmitter(t);r&&r.externalPlay()},e.pauseEmitter=t=>{const r=e.getEmitter(t);r&&r.externalPause()}}async addEmitter(s,e){const{Emitter:i}=await l(()=>import("./EmittersPlugin-N58HL_xq.js").then(n=>n.b),__vite__mapDeps([0,1,2,3,4,5])),{EmitterInstance:t}=await l(()=>import("./EmitterInstance-fSpXoBb-.js"),__vite__mapDeps([6,0,1,2,3,4,5])),r=new i;r.load(s);const a=new t(this._engine,this,this.container,r,e);return await a.init(),this.array.push(a),a}handleClickMode(s){const e=this.emitters,i=this.interactivityEmitters;if(s!=="emitter")return;let t;if(i&&c(i.value))if(i.value.length>0&&i.random.enable){t=[];const o=[];for(let m=0;m<i.random.count;m++){const h=u(i.value);if(o.includes(h)&&o.length<i.value.length){m--;continue}o.push(h),t.push(y(i.value,h))}}else t=i.value;else t=i==null?void 0:i.value;const r=t??e,a=this.container.interactivity.mouse.clickPosition;f(r,async n=>{await this.addEmitter(n,a)})}async init(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,!!this.emitters)if(c(this.emitters))for(const s of this.emitters)await this.addEmitter(s);else await this.addEmitter(this.emitters)}pause(){for(const s of this.array)s.pause()}play(){for(const s of this.array)s.play()}removeEmitter(s){const e=this.array.indexOf(s),i=0,t=1;e>=i&&this.array.splice(e,t)}resize(){for(const s of this.array)s.resize()}stop(){this.array=[]}async update(s){for(const e of this.array)await e.update(s)}}export{v as Emitters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-N58HL_xq.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/AnimatableColor-BUln9NcA.js","assets/AnimationOptions-fGmo0vLh.js","assets/OptionsColor-o8rG_6Tl.js","assets/EmitterInstance-fSpXoBb-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}