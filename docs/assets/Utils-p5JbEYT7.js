import{a9 as b,N as l,U as g,C as w,G as D}from"./index-U8ylzn9J.js";const m=.5,d=0,x=1,M=60,z=0,F=.01;function R(n){const i=n.initialPosition,{dx:o,dy:t}=b(i,n.position),c=Math.abs(o),a=Math.abs(t),{maxDistance:s}=n.retina,e=s.horizontal,f=s.vertical;if(!e&&!f)return;const h=(e&&c>=e)??!1,v=(f&&a>=f)??!1;if((h||v)&&!n.misplaced)n.misplaced=!!e&&c>e||!!f&&a>f,e&&(n.velocity.x=n.velocity.y*m-n.velocity.x),f&&(n.velocity.y=n.velocity.x*m-n.velocity.y);else if((!e||c<e)&&(!f||a<f)&&n.misplaced)n.misplaced=!1;else if(n.misplaced){const u=n.position,y=n.velocity;e&&(u.x<i.x&&y.x<d||u.x>i.x&&y.x>d)&&(y.x*=-l()),f&&(u.y<i.y&&y.y<d||u.y>i.y&&y.y>d)&&(y.y*=-l())}}async function V(n,i,o,t,c,a){await P(n,a);const s=n.gravity,e=s!=null&&s.enable&&s.inverse?-x:x;c&&o&&(n.velocity.x+=c*a.factor/(M*o)),s!=null&&s.enable&&o&&(n.velocity.y+=e*(s.acceleration*a.factor)/(M*o));const f=n.moveDecay;n.velocity.multTo(f);const h=n.velocity.mult(o);s!=null&&s.enable&&t>d&&(!s.inverse&&h.y>=d&&h.y>=t||s.inverse&&h.y<=d&&h.y<=-t)&&(h.y=e*t,o&&(n.velocity.y=h.y/o));const v=n.options.zIndex,u=(x-n.zIndexFactor)**v.velocityRate;h.multTo(u);const{position:y}=n;y.addTo(h),i.vibrate&&(y.x+=Math.sin(y.x*Math.cos(y.y)),y.y+=Math.cos(y.y*Math.sin(y.x)))}function k(n,i){const o=n.container;if(!n.spin)return;const t={x:n.spin.direction==="clockwise"?Math.cos:Math.sin,y:n.spin.direction==="clockwise"?Math.sin:Math.cos};n.position.x=n.spin.center.x+n.spin.radius*t.x(n.spin.angle),n.position.y=n.spin.center.y+n.spin.radius*t.y(n.spin.angle),n.spin.radius+=n.spin.acceleration;const c=Math.max(o.canvas.size.width,o.canvas.size.height),a=c*m;n.spin.radius>a?(n.spin.radius=a,n.spin.acceleration*=-x):n.spin.radius<z&&(n.spin.radius=z,n.spin.acceleration*=-x),n.spin.angle+=i*F*(x-n.spin.radius/c)}async function P(n,i){var s;const o=n.options,t=o.move.path;if(!t.enable)return;if(n.lastPathTime<=n.pathDelay){n.lastPathTime+=i.value;return}const a=await((s=n.pathGenerator)==null?void 0:s.generate(n,i));a&&n.velocity.addTo(a),t.clamp&&(n.velocity.x=g(n.velocity.x,-x,x),n.velocity.y=g(n.velocity.y,-x,x)),n.lastPathTime-=n.pathDelay}function A(n){return n.slow.inRange?n.slow.factor:x}function C(n){const i=n.container,o=n.options,t=o.move.spin;if(!t.enable)return;const c=t.position??{x:50,y:50},a=.01,s={x:c.x*a*i.canvas.size.width,y:c.y*a*i.canvas.size.height},e=n.getPosition(),f=w(e,s),h=D(t.acceleration);n.retina.spinAcceleration=h*i.retina.pixelRatio;const v=0;n.spin={center:s,direction:n.velocity.x>=v?"clockwise":"counter-clockwise",angle:n.velocity.angle,radius:f,acceleration:n.retina.spinAcceleration}}export{R as applyDistance,P as applyPath,A as getProximitySpeedFactor,C as initSpin,V as move,k as spin};
