var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,o=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(i)for(var t of i(a))s.call(a,t)&&n(e,t,a[t]);return e},c=(e,i)=>a(e,t(i));import{F as l}from"./filterAction.c8c8991a.js";import{d,I as m,u as p,c as u,g as f}from"./ipDetail.ee968e66.js";import{u as b,z as y,a9 as g,R as h,S as j,J as v,aZ as w}from"./index.1652faee.js";import{u as I,a as O,b as x,c as S}from"./index.bcdd362a.js";import{u as P}from"./useTablePagination.a19176b2.js";import{u as N,a as k}from"./index.a56a7a79.js";import{S as C}from"./index.f40c86c3.js";import{C as D}from"./index.97f9b28b.js";import{T as z}from"./Table.85ad3882.js";var A=()=>{const{filter:e,setFilter:a}=I({type:"account"}),{pagination:t,setPagination:i}=P(),{selectedItem:r,setSelectedItem:s}=N({}),{modal:n,setModal:A}=k({}),{data:_,setData:E}=O([]),{loading:T,setLoading:F}=x(!1),R=async a=>{try{F(!0);const r=await f(c(o({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:s=[],total:n}=r;F(!1),E(s),i(c(o(o({},t),a||{}),{total:n}))}catch(r){}},q=[{title:"Ip",dataIndex:"ip"},{title:"Desc",dataIndex:"desc"},{title:"Action",render:(e,a)=>b(C,{children:[y("a",{onClick:()=>{s(o({},a)),A(c(o({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),y("a",{className:"text-red-600",onClick:()=>{g.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await d(a._id),await R()}catch(e){}}})},children:"Delete"})]})}].map((e=>c(o({},e),{key:e.dataIndex})));return S(e,(()=>R(c(o({},t),{current:1})))),b("div",{children:[y(D,{className:"mb-4",children:b("div",{className:"grid grid-cols-4 gap-4",children:[h([{label:"Name",className:"mb-0",children:y(j,{value:e.name,onChange:t=>a(c(o({},e),{name:t.target.value})),placeholder:"ip/desc"})}]),y(l,{className:"mb-0",onQuery:()=>R(),onReset:()=>a({type:"ip"})})]})}),y(D,{title:y(v,{onClick:()=>{A(c(o({},n),{title:"Add",visible:!0})),s({})},type:"primary",children:"+ New Account"}),children:y(z,{rowKey:e=>e._id,onChange:e=>R(e),pagination:t,loading:T,columns:q,dataSource:_})}),y(m,c(o({selectedItem:r,setSelectedItem:s},n),{onOk:()=>(async()=>{const{staffId:e}=r;if(!e)return w.error("Please finish all required info");try{r._id?await p(r._id,r):await u(c(o({},r),{type:"account"})),A(c(o({},n),{visible:!1})),await R()}catch(a){}})()}))]})};export{A as default};
