import{_ as h}from"./iframe-BO0CMWkX.js";import{R as o,r as a}from"./index-DH5ua8nC.js";import{r as d,C as E,A as R,H as x,D as y}from"./index-7r0Ywx_I.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bw8VTzHM.js";import"./index-hOpM0UTb.js";import"./index-DrFu-skq.js";var c={},m=d;c.createRoot=m.createRoot,c.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await v(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},f=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},v=async t=>{let e=n.get(t);return e||(e=c.createRoot(t),n.set(t,e)),e},w={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:o.createElement(o.Fragment,null,e)}},T=class{constructor(){this.render=async(t,e,r)=>{let s={...w,...e==null?void 0:e.components},i=y;return new Promise((u,p)=>{h(()=>import("./index-COxJNofV.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:l})=>_(o.createElement(g,{showException:p,key:Math.random()},o.createElement(l,{components:s},o.createElement(i,{context:t,docsParameter:e}))),r)).then(()=>u())})},this.unmount=t=>{f(t)}}};export{T as DocsRenderer,w as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-COxJNofV.js","./index-DH5ua8nC.js","./_commonjsHelpers-Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
