import{O}from"./OptionsColor-o8rG_6Tl.js";import{s as g,N as b,G as m,r as q,j as x}from"./index-U8ylzn9J.js";class p{constructor(){this.enable=!1,this.frequency=.05,this.opacity=1}load(e){e&&(e.color!==void 0&&(this.color=O.create(this.color,e.color)),e.enable!==void 0&&(this.enable=e.enable),e.frequency!==void 0&&(this.frequency=e.frequency),e.opacity!==void 0&&(this.opacity=g(e.opacity)))}}class z{constructor(){this.lines=new p,this.particles=new p}load(e){e&&(this.lines.load(e.lines),this.particles.load(e.particles))}}class C{getColorStyles(e,i,n,u){const w=e.options,r=w.twinkle;if(!r)return{};const t=r.particles,c=t.enable&&b()<t.frequency,d=e.options.zIndex,k=1,y=(k-e.zIndexFactor)**d.opacityRate,h=c?m(t.opacity)*y:u,a=q(t.color),s=a?x(a,h):void 0,o={},f=c&&s;return o.fill=f?s:void 0,o.stroke=f?s:void 0,o}async init(){await Promise.resolve()}isEnabled(e){const i=e.options,n=i.twinkle;return n?n.particles.enable:!1}loadOptions(e,...i){e.twinkle||(e.twinkle=new z);for(const n of i)e.twinkle.load(n==null?void 0:n.twinkle)}async update(){await Promise.resolve()}}export{C as TwinkleUpdater};
