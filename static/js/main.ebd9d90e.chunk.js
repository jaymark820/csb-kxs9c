(this["webpackJsonpreact-scaffold"]=this["webpackJsonpreact-scaffold"]||[]).push([[0],{22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c={};a.r(c),a.d(c,"main",(function(){return p})),a.d(c,"bag",(function(){return j}));var s=a(0),n=a(12),o=a.n(n),r=a(16),i=a(2),l=a(13),d=a.n(l),b=a(8);function u(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{method:c="get"}=a||{};return new Promise((e=>{e({code:0,data:[],msg:""})}))}var p={namespace:"main",state:{aaa:"majie",boxList:[]},reducers:{getBoxList:async(e,t)=>{let{payload:a,callback:c}=e,{put:s}=t;const n=await async function(){return u("/wgapi/vod/front/hover/getDropMenuInfo")}(),o=0===n.code&&n.data.recommend?n.data.recommend:[];s({boxList:o}),c&&c(o)},removeAll:(e,t)=>{let{payload:a}=e,{put:c}=t;return c({boxList:[]})}}},j={namespace:"bag",state:{bagList:[]},reducers:{getBagList:async(e,t)=>{let{payload:a}=e,{put:c}=t;const s=await async function(){return u("/wgapi/vod/front/hover/getDropMenuInfo")}();c({bagList:0===s.code&&s.data.videos?s.data.videos:[]})},removeAll:(e,t)=>{let{payload:a}=e,{put:c}=t;return c({bagList:[]})}}};const x=Object.keys(c).map((e=>c[e])).filter((e=>e.namespace)),m=d()(Object(b.devtools)(Object(b.subscribeWithSelector)(((e,t)=>{const{state:a,reducers:c}=x.reduce(((e,t)=>{const a={};return Object.keys(t.reducers).forEach((e=>{a["".concat(t.namespace,"/").concat(e)]=t.reducers[e]})),{...e,state:{...e.state,[t.namespace]:{...t.state}},reducers:{...e.reducers,...a}}}),{state:{},reducers:{}});return{...a,dispatch:async a=>{let{type:s,payload:n,callback:o}=a;if(c[s]){const a=s.split("/")[0];await c[s]({payload:n,callback:o},{put:function(){let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const s=t();e({[a]:{...s[a],...c}})}})}}}})),"BlindBoxStore")),g=()=>m((e=>e.dispatch));a.p;var f=a(1),B=()=>Object(f.jsx)("div",{className:"BlindBox-drawBtn",children:"\u62bd\u5956\u6309\u94ae"}),h=(a.p,()=>Object(f.jsx)("div",{className:"BlindBox-boxList",children:"\u76f2\u76d2\u5217\u8868+\u5956\u54c1\u5217\u8868"})),v=(a.p,()=>Object(f.jsx)("div",{className:"BlindBox-floatArea",children:"\u98d8\u5c4f+\u5269\u4f59\u62bd\u5956\u5238+\u62bd\u5956\u63d0\u793a\u4fe1\u606f"})),O=(a.p,()=>{const e=m((e=>{let{bag:t}=e;return t.bagList})),t=g();return console.log("===>bagList",e),Object(s.useEffect)((()=>{t({type:"bag/getBagList",payload:{}})}),[]),Object(f.jsx)("div",{className:"BlindBox-bags",children:"\u6211\u7684\u80cc\u5305"})}),y=(a.p,()=>Object(f.jsx)("div",{className:"BlindBox-rules",children:"\u73a9\u6cd5\u89c4\u5219"})),L=(a.p,()=>{const e=m((e=>{let{main:t}=e;return t.boxList})),t=g();return console.log("===>boxList",e),Object(s.useEffect)((()=>{t({type:"main/getBoxList",payload:{boxId:123},callback:e=>{console.log("===>res",e)}});const e=function(){return m.subscribe(...arguments)}((e=>{let{main:t}=e;return t.boxList}),((e,t)=>{console.log("===>subscription:",e,t)}));return()=>{e()}}),[]),Object(f.jsxs)("div",{className:"BlindBox-Main",children:[Object(f.jsx)(O,{}),Object(f.jsx)(y,{}),Object(f.jsxs)("div",{className:"BlindBox-Bottom",children:[Object(f.jsx)(v,{}),Object(f.jsx)(h,{}),Object(f.jsx)(B,{})]})]})});a(22);const w=()=>Object(f.jsx)(r.a,{children:Object(f.jsx)(i.c,{children:Object(f.jsx)(i.a,{path:"/",exact:!0,component:L})})}),k=document.getElementById("root");o.a.render(Object(f.jsx)(w,{}),k)}},[[28,1,2]]]);
//# sourceMappingURL=main.ebd9d90e.chunk.js.map