var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,l=(e,a)=>{for(var r in a||(a={}))n.call(a,r)&&o(e,r,a[r]);if(t)for(var r of t(a))s.call(a,r)&&o(e,r,a[r]);return e},i=(e,t)=>a(e,r(t));import{r as d,O as c,a3 as m,z as p,Q as u,az as b,U as g,a6 as h,u as v,S as f}from"./index.559ed890.js";import{F as y}from"./filterAction.c0a6db58.js";import{u as j,a as x}from"./useTablePagination.82704ae0.js";import{C as O}from"./index.6ec31141.js";import{T as S}from"./Table.9aede898.js";const w=[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],C=Array.from({length:133}).map(((e,a)=>({key:a,name:"John Brown"+a,username:"Username"+a,address:"New York No. 1 Lake Park",tags:["nice","developer"]})));function N(){const[e,a]=d.exports.useState({}),{pagination:r,setPagination:t}=j(),[n,s]=d.exports.useState(!1),[o,N]=d.exports.useState([]),P=c(),{t:k}=m(),A=async()=>{s(!0),setTimeout((()=>{N(C),s(!1)}),1e3)};x((()=>{A()}),[e.name,r.current,r.pageSize],{wait:800});const I=[{title:"Name",dataIndex:"name"},{title:"Username",dataIndex:"username"},{title:"Address",dataIndex:"address"},{title:"Tags",dataIndex:"tags",render:e=>p(u,{children:e.map((e=>{let a=e.length>5?"geekblue":"green";return"loser"===e&&(a="volcano"),p(b,{color:a,children:e.toUpperCase()},e)}))})},{title:"Action",render:(e,a)=>p("div",{children:p("a",{onClick:()=>{P("/order/orderDetail",{state:{id:a._id,name:"hello"}})},children:"Detail"})})}].map((e=>i(l({},e),{key:e.dataIndex}))),T=[{label:k("SEARCH"),className:"mb-0",children:p(g,{allowClear:!0,value:e.name,onChange:r=>a(i(l({},e),{name:r.target.value})),placeholder:"search by code"})},{label:k("STATUS"),className:"mb-0",children:p(h,{allowClear:!0,onChange:r=>a(i(l({},e),{status:r})),value:e.status,options:w})}];return v("div",{children:[p(O,{className:"mb-4",children:v("div",{className:"grid grid-cols-4 gap-4",children:[f(T),p(y,{className:"mb-0",onQuery:()=>A(),onReset:()=>a({})})]})}),p(O,{children:p(S,{onChange:e=>t(e),pagination:r,loading:n,columns:I,dataSource:o})})]})}export{N as default,w as statusOptions};