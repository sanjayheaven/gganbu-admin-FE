import{i,u as h,j as s,b9 as o,aD as u,b as c,I as r}from"./index.ada4c005.js";const p=t=>i.get("/whitelists/getWhitelists",{params:t}),W=t=>i.post("/whitelists/createWhitelist",t),g=(t,e)=>i.post("/whitelists/updateWhitelist",{whitelistId:t,...e}),w=t=>i.post("/whitelists/deleteWhitelist",{whitelistId:t}),b=({selectedItem:t,setSelectedItem:e,...l})=>{const{t:n}=h();return s(o,{...l,children:s(u,{labelCol:{span:3},children:c([{label:"IP",required:!0,children:s(r,{onChange:a=>e({...t,ip:a.target.value}),value:t.ip})},{label:n("DESC"),required:!0,children:s(r.TextArea,{onChange:a=>e({...t,desc:a.target.value}),value:t.desc})}])})})};export{b as I,W as c,w as d,p as g,g as u};