import{F as v}from"./index-U8ylzn9J.js";const x=.5;class u{async init(){await Promise.resolve()}isEnabled(a){return!v()&&!a.destroyed&&a.container.actualOptions.interactivity.events.onHover.parallax.enable}async move(a){const t=a.container,y=t.actualOptions,o=y.interactivity.events.onHover.parallax;if(v()||!o.enable)return;const m=o.force,n=t.interactivity.mouse.position;if(!n)return;const s=t.canvas.size,i={x:s.width*x,y:s.height*x},r=o.smooth,c=a.getRadius()/m,l={x:(n.x-i.x)*c,y:(n.y-i.y)*c},{offset:e}=a;e.x+=(l.x-e.x)/r,e.y+=(l.y-e.y)/r,await Promise.resolve()}}export{u as ParallaxMover};
