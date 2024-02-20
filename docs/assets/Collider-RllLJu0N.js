import{_ as a,C as b}from"./index-U8ylzn9J.js";import{P as m}from"./ParticlesInteractorBase-0LBpK8Bl.js";async function f(s,o,n,e){switch(s.options.collisions.mode){case"absorb":{const{absorb:t}=await a(()=>import("./Absorb-85M3JNCj.js"),__vite__mapDeps([0,1,2]));t(s,o,n,e);break}case"bounce":{const{bounce:t}=await a(()=>import("./Bounce-cDDkw6_l.js"),__vite__mapDeps([3,1,2]));t(s,o);break}case"destroy":{const{destroy:t}=await a(()=>import("./Destroy-1XOz59Yy.js"),__vite__mapDeps([4,3,1,2]));t(s,o);break}}}const P=2;class g extends m{constructor(o){super(o)}clear(){}init(){}async interact(o,n){if(o.destroyed||o.spawning)return;const e=this.container,t=o.getPosition(),r=o.getRadius(),l=e.particles.quadTree.queryCircle(t,r*P);for(const i of l){if(o===i||!i.options.collisions.enable||o.options.collisions.mode!==i.options.collisions.mode||i.destroyed||i.spawning)continue;const c=i.getPosition(),d=i.getRadius();if(Math.abs(Math.round(t.z)-Math.round(c.z))>r+d)continue;const u=b(t,c),_=r+d;u>_||await f(o,i,n,e.retina.pixelRatio)}}isEnabled(o){return o.options.collisions.enable}reset(){}}export{g as Collider};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Absorb-85M3JNCj.js","assets/index-U8ylzn9J.js","assets/index-JHUMKlkI.css","assets/Bounce-cDDkw6_l.js","assets/Destroy-1XOz59Yy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}