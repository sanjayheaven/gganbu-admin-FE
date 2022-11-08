var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,o=(e,a)=>{for(var t in a||(a={}))r.call(a,t)&&n(e,t,a[t]);if(i)for(var t of i(a))s.call(a,t)&&n(e,t,a[t]);return e},l=(e,i)=>a(e,t(i));import{F as c}from"./filterAction.4dc74e04.js";import{d,I as p,u as m,c as u,g as f}from"./ipDetail.2c99aee3.js";import{u as b,z as y,a9 as g,R as h,S as j,J as v,aZ as w}from"./index.282bde3a.js";import{u as I,a as O,b as x,c as S}from"./index.503b99c7.js";import{u as P}from"./useTablePagination.03cfaf4a.js";import{u as N,a as k}from"./index.a3acbd1a.js";import{S as C}from"./index.443a0a3e.js";import{C as D}from"./index.04e6f108.js";import{T as z}from"./Table.77e59312.js";var _=()=>{const{filter:e,setFilter:a}=I({type:"ip"}),{pagination:t,setPagination:i}=P(),{selectedItem:r,setSelectedItem:s}=N({}),{modal:n,setModal:_}=k({}),{data:A,setData:E}=O([]),{loading:T,setLoading:F}=x(!1),R=async a=>{try{F(!0);const r=await f(l(o({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:s=[],total:n}=r;F(!1),E(s),i(l(o(o({},t),a||{}),{total:n}))}catch(r){}},q=[{title:"Ip",dataIndex:"ip"},{title:"Desc",dataIndex:"desc"},{title:"Action",render:(e,a)=>b(C,{children:[y("a",{onClick:()=>{s(o({},a)),_(l(o({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),y("a",{className:"text-red-600",onClick:()=>{g.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await d(a._id),await R()}catch(e){}}})},children:"Delete"})]})}].map((e=>l(o({},e),{key:e.dataIndex})));return S(e,(()=>R(l(o({},t),{current:1})))),b("div",{children:[y(D,{className:"mb-4",children:b("div",{className:"grid grid-cols-4 gap-4",children:[h([{label:"Name",className:"mb-0",children:y(j,{value:e.name,onChange:t=>a(l(o({},e),{name:t.target.value})),placeholder:"ip/desc"})}]),y(c,{className:"mb-0",onQuery:()=>R(),onReset:()=>a({type:"ip"})})]})}),y(D,{title:y(v,{onClick:()=>{_(l(o({},n),{title:"Add",visible:!0})),s({})},type:"primary",children:"+ New Ip"}),children:y(z,{rowKey:e=>e._id,onChange:e=>R(e),pagination:t,loading:T,columns:q,dataSource:A})}),y(p,l(o({selectedItem:r,setSelectedItem:s},n),{onOk:()=>(async()=>{const{ip:e,desc:a}=r;if(!a||!e)return w.error("Please finish all required info");try{r._id?await m(r._id,r):await u(l(o({},r),{type:"ip"})),_(l(o({},n),{visible:!1})),await R()}catch(t){}})()}))]})};export{_ as default};