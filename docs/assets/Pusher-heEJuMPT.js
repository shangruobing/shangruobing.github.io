import{Push as u}from"./index-l_4doe9S.js";import{E as p}from"./ExternalInteractorBase-St1QSTOy.js";import{G as c,a0 as d}from"./index-U8ylzn9J.js";const h="push",l=0;class O extends p{constructor(e){super(e),this.handleClickMode=n=>{if(n!==h)return;const t=this.container,o=t.actualOptions,r=o.interactivity.modes.push;if(!r)return;const i=c(r.quantity);if(i<=l)return;const s=d([void 0,...r.groups]),a=s!==void 0?t.actualOptions.particles.groups[s]:void 0;t.particles.push(i,t.interactivity.mouse,a,s)}}clear(){}init(){}async interact(){}isEnabled(){return!0}loadModeOptions(e,...n){e.push||(e.push=new u);for(const t of n)e.push.load(t==null?void 0:t.push)}reset(){}}export{O as Pusher};