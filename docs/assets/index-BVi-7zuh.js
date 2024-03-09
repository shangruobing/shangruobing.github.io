import{_ as n}from"./index-BLharBJw.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CDKPGbCk.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-BWyUtTyS.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CDKPGbCk.js","assets/PolygonDrawerBase-Bl7n9zAJ.js","assets/index-BLharBJw.js","assets/index-ByoDVq-K.css","assets/TriangleDrawer-BWyUtTyS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
