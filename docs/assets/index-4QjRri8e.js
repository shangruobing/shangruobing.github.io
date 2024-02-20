import{_ as n}from"./index-yepc7o5B.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-6BIro7Ta.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-pWa7zmJs.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-6BIro7Ta.js","assets/PolygonDrawerBase-P6GofvZo.js","assets/index-yepc7o5B.js","assets/index-eBqgu0pU.css","assets/TriangleDrawer-pWa7zmJs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}