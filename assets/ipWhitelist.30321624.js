var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,o=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(i)for(var t of i(a))s.call(a,t)&&n(e,t,a[t]);return e},l=(e,i)=>a(e,t(i));import{F as d}from"./filterAction.adef8b6d.js";import{d as c,I as p,u as m,c as f,g as u}from"./ipDetail.a0773754.js";import{u as b,z as y,a9 as g,R as h,S as j,J as v,aZ as w}from"./index.9821a2d8.js";import{u as I,a as O,b as x,c as S}from"./index.dfc4f11c.js";import{u as P}from"./useTablePagination.212eff0d.js";import{u as N,a as k}from"./index.1d637ad4.js";import{S as C}from"./index.c3d0099e.js";import{C as D}from"./index.42e0b683.js";import{T as z}from"./Table.72d476b0.js";var _=()=>{const{filter:e,setFilter:a}=I({type:"ip"}),{pagination:t,setPagination:i}=P(),{selectedItem:r,setSelectedItem:s}=N({}),{modal:n,setModal:_}=k({}),{data:A,setData:E}=O([]),{loading:T,setLoading:F}=x(!1),R=async a=>{try{F(!0);const r=await u(l(o({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:s=[],total:n}=r;F(!1),E(s),i(l(o(o({},t),a||{}),{total:n}))}catch(r){}},q=[{title:"Ip",dataIndex:"ip"},{title:"Desc",dataIndex:"desc"},{title:"Action",render:(e,a)=>b(C,{children:[y("a",{onClick:()=>{s(o({},a)),_(l(o({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),y("a",{className:"text-red-600",onClick:()=>{g.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await c(a._id),await R()}catch(e){}}})},children:"Delete"})]})}].map((e=>l(o({},e),{key:e.dataIndex})));return S(e,(()=>R(l(o({},t),{current:1})))),b("div",{children:[y(D,{className:"mb-4",children:b("div",{className:"grid grid-cols-4 gap-4",children:[h([{label:"Name",className:"mb-0",children:y(j,{value:e.name,onChange:t=>a(l(o({},e),{name:t.target.value})),placeholder:"ip/desc"})}]),y(d,{className:"mb-0",onQuery:()=>R(),onReset:()=>a({type:"ip"})})]})}),y(D,{title:y(v,{onClick:()=>{_(l(o({},n),{title:"Add",visible:!0})),s({})},type:"primary",children:"+ New Ip"}),children:y(z,{rowKey:e=>e._id,onChange:e=>R(e),pagination:t,loading:T,columns:q,dataSource:A})}),y(p,l(o({selectedItem:r,setSelectedItem:s},n),{onOk:()=>(async()=>{const{ip:e,desc:a}=r;if(!a||!e)return w.error("Please finish all required info");try{r._id?await m(r._id,r):await f(l(o({},r),{type:"ip"})),_(l(o({},n),{visible:!1})),await R()}catch(t){}})()}))]})};export{_ as default};
