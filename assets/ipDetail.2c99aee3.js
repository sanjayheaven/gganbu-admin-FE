var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,o=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&i(e,r,t[r]);return e},n=(e,a)=>t(e,r(a));import{U as c,z as d,a9 as p,Q as h,R as u,S as b}from"./index.282bde3a.js";const f=e=>c.get("/whitelists/getWhitelists",{params:e}),v=e=>c.post("/whitelists/createWhitelist",e),O=(e,t)=>c.post("/whitelists/updateWhitelist",o({whitelistId:e},t)),g=e=>c.post("/whitelists/deleteWhitelist",{whitelistId:e});var m=e=>{var t=e,{selectedItem:r,setSelectedItem:i}=t,c=((e,t)=>{var r={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))t.indexOf(i)<0&&s.call(e,i)&&(r[i]=e[i]);return r})(t,["selectedItem","setSelectedItem"]);return d(p,n(o({},c),{children:d(h,{labelCol:{span:3},children:u([{label:"Ip",required:!0,children:d(b,{onChange:e=>i(n(o({},r),{ip:e.target.value})),value:r.ip})},{label:"Desc",required:!0,children:d(b.TextArea,{onChange:e=>i(n(o({},r),{desc:e.target.value})),value:r.desc})}])})}))};export{m as I,v as c,g as d,f as g,O as u};