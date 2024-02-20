import{A as u}from"./AbsorbersPlugin-cWjsZ9LC.js";import{ad as v,X as r,ae as F,C as f,N as y,K as D,G as M,g as S,a9 as _,h as A,af as k}from"./index-U8ylzn9J.js";import"./ValueWithRandom-4czRbOqm.js";import"./AnimationOptions-fGmo0vLh.js";import"./OptionsColor-o8rG_6Tl.js";const T=2,V=.033,N=0,I=0,C=0,P={x:0,y:0},q=0,E=2,z=Math.PI*E,O=0;class H{constructor(s,o,a,h){var b;this.absorbers=s,this.container=o,this._calcPosition=()=>{const i=v({size:this.container.canvas.size,position:this.options.position});return r.create(i.x,i.y)},this._updateParticlePosition=(i,e)=>{if(i.destroyed)return;const t=this.container,g=t.canvas.size;if(i.needsNewPosition){const n=F({size:g});i.position.setTo(n),i.velocity.setTo(i.initialVelocity),i.absorberOrbit=void 0,i.needsNewPosition=!1}if(this.options.orbits){if(i.absorberOrbit===void 0&&(i.absorberOrbit=r.origin,i.absorberOrbit.length=f(i.getPosition(),this.position),i.absorberOrbit.angle=y()*z),i.absorberOrbit.length<=this.size&&!this.options.destroy){const R=Math.min(g.width,g.height),p=1,x=.1,w=.2;i.absorberOrbit.length=R*(p+(y()*w-x))}i.absorberOrbitDirection===void 0&&(i.absorberOrbitDirection=i.velocity.x>=O?"clockwise":"counter-clockwise");const n=i.absorberOrbit.length,c=i.absorberOrbit.angle,m=i.absorberOrbitDirection;i.velocity.setTo(r.origin);const l={x:m==="clockwise"?Math.cos:Math.sin,y:m==="clockwise"?Math.sin:Math.cos};i.position.x=this.position.x+n*l.x(c),i.position.y=this.position.y+n*l.y(c),i.absorberOrbit.length-=e.length,i.absorberOrbit.angle+=(i.retina.moveSpeed??O)*t.retina.pixelRatio/D*t.retina.reduceFactor}else{const n=r.origin;n.length=e.length,n.angle=e.angle,i.velocity.addTo(n)}},this.initialPosition=h?r.create(h.x,h.y):void 0,a instanceof u?this.options=a:(this.options=new u,this.options.load(a)),this.dragging=!1,this.name=this.options.name,this.opacity=this.options.opacity,this.size=M(this.options.size.value)*o.retina.pixelRatio,this.mass=this.size*this.options.size.density*o.retina.reduceFactor;const d=this.options.size.limit;this.limit={radius:d.radius*o.retina.pixelRatio*o.retina.reduceFactor,mass:d.mass},this.color=S(this.options.color)??{b:0,g:0,r:0},this.position=((b=this.initialPosition)==null?void 0:b.copy())??this._calcPosition()}attract(s){const o=this.container,a=this.options;if(a.draggable){const t=o.interactivity.mouse;t.clicking&&t.downPosition?f(this.position,t.downPosition)<=this.size&&(this.dragging=!0):this.dragging=!1,this.dragging&&t.position&&(this.position.x=t.position.x,this.position.y=t.position.y)}const h=s.getPosition(),{dx:d,dy:b,distance:i}=_(this.position,h),e=r.create(d,b);if(e.length=this.mass/Math.pow(i,T)*o.retina.reduceFactor,i<this.size+s.getRadius()){const t=s.getRadius()*V*o.retina.pixelRatio;this.size>s.getRadius()&&i<this.size-s.getRadius()||s.absorberOrbit!==void 0&&s.absorberOrbit.length<N?a.destroy?s.destroy():(s.needsNewPosition=!0,this._updateParticlePosition(s,e)):(a.destroy&&(s.size.value-=t),this._updateParticlePosition(s,e)),(this.limit.radius<=I||this.size<this.limit.radius)&&(this.size+=t),(this.limit.mass<=C||this.mass<this.limit.mass)&&(this.mass+=t*this.options.size.density*o.retina.reduceFactor)}else this._updateParticlePosition(s,e)}async draw(s){s.translate(this.position.x,this.position.y),s.beginPath(),s.arc(P.x,P.y,this.size,q,z,!1),s.closePath(),s.fillStyle=A(this.color,this.opacity),s.fill(),await Promise.resolve()}resize(){const s=this.initialPosition;this.position=s&&k(s,this.container.canvas.size,r.origin)?s:this._calcPosition()}}export{H as AbsorberInstance};
