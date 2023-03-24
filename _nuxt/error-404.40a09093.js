import{a as C,b,e as S,f as y,h as N,r as _,i as q,j as A,k as w,l as P,p as I,m as R,q as B,s as T,o as z,t as E,v as m,w as g,x as j,y as L,z as U,A as V,B as D}from"./entry.8bd9fb55.js";import{u as H}from"./app.config.d58b4d80.js";async function k(e,a=C()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(e))return;const t=a._preloadPromises=a._preloadPromises||[];if(t.length>4)return Promise.all(t).then(()=>k(e,a));a._routePreloaded.add(e);const r=a.resolve(e).matched.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of r){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>t.splice(t.indexOf(o)));t.push(o)}await Promise.all(t)}const x=globalThis.requestIdleCallback||(e=>{const a=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(t)},1)}),M=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),O=e=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{x(e)}):x(e)},F=(...e)=>e.find(a=>a!==void 0),$="noopener noreferrer";function G(e){const a=e.componentName||"NuxtLink";return S({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const n=C(),o=y(()=>t.to||t.href||""),d=y(()=>t.external||t.target&&t.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||N(o.value,!0)),v=_(!1),i=_(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!J()){const f=b();let u,l=null;q(()=>{const p=X();O(()=>{u=x(()=>{var h;(h=i==null?void 0:i.value)!=null&&h.tagName&&(l=p.observe(i.value,async()=>{l==null||l(),l=null;const c=typeof o.value=="string"?o.value:n.resolve(o.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!d.value&&k(o.value,n).catch(()=>{})]),v.value=!0}))})})}),A(()=>{u&&M(u),l==null||l(),l=null})}return()=>{var p,h;if(!d.value)return w(P("RouterLink"),{ref:c=>{i.value=c==null?void 0:c.$el},to:o.value,...v.value&&!t.custom?{class:t.prefetchedClass||e.prefetchedClass}:{},activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom,rel:t.rel},r.default);const s=typeof o.value=="object"?((p=n.resolve(o.value))==null?void 0:p.href)??null:o.value||null,f=t.target||null,u=t.noRel?null:F(t.rel,e.externalRelAttribute,s?$:"")||null,l=()=>B(s,{replace:t.replace});return t.custom?r.default?r.default({href:s,navigate:l,get route(){if(!s)return;const c=I(s);return{path:c.pathname,fullPath:c.pathname,get query(){return R(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:s}},rel:u,target:f,isExternal:d.value,isActive:!1,isExactActive:!1}):null:w("a",{ref:i,href:s,rel:u,target:f},(h=r.default)==null?void 0:h.call(r))}}})}const Q=G({componentName:"NuxtLink"});function X(){const e=b();if(e._observer)return e._observer;let a=null;const t=new Map,r=(o,d)=>(a||(a=new IntersectionObserver(v=>{for(const i of v){const s=t.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&s&&s()}})),t.set(o,d),a.observe(o),()=>{t.delete(o),a.unobserve(o),t.size===0&&(a.disconnect(),a=null)});return e._observer={observe:r}}function J(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const K=e=>(V("data-v-30d2164e"),e=e(),D(),e),W={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},Y=K(()=>m("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),Z={class:"max-w-520px text-center z-20"},ee=["textContent"],te=["textContent"],ae={class:"w-full flex items-center justify-center"},oe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const a=e;return H({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(t,r)=>{const n=Q;return z(),E("div",W,[Y,m("div",Z,[m("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:g(e.statusCode)},null,8,ee),m("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:g(e.description)},null,8,te),m("div",ae,[j(n,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:L(()=>[U(g(e.backHome),1)]),_:1})])])])}}},se=T(oe,[["__scopeId","data-v-30d2164e"]]);export{se as default};
