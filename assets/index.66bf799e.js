var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{a as n}from"./useTablePagination.cce215e9.js";import{r as s}from"./index.21e88de5.js";function i(e,i,c){s.exports.useEffect((()=>{"{}"==JSON.stringify(e)&&i()}),[e]),n((()=>{"{}"!=JSON.stringify(e)&&i()}),[e],((e,n)=>{for(var s in n||(n={}))r.call(n,s)&&o(e,s,n[s]);if(t)for(var s of t(n))a.call(n,s)&&o(e,s,n[s]);return e})({wait:800},c))}function c(e){const[t,r]=s.exports.useState(e);return{filter:t,setFilter:r}}function u(e){const[t,r]=s.exports.useState(e);return{data:t,setData:r}}function f(e){const[t,r]=s.exports.useState(e||!1);return{loading:t,setLoading:r}}export{u as a,f as b,i as c,c as u};
