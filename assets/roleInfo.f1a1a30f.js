import{e as I,u as D,c as F,b as S,a as T,d as E,F as M,T as _}from"./filterAction.bad607a6.js";import{i as u,j as c,b9 as v,a as t,aD as j,b as x,I as f,bh as q,aC as z,bg as O,ad as K,ba as L}from"./index.fd722815.js";import{u as B,a as H}from"./index.9b56791e.js";import{C}from"./index.3e5b4951.js";const Q=e=>u.get("/roles/getRoles",{params:e}),G=e=>u.post("/roles/createRole",e),J=(e,r)=>u.post("/roles/updateRole",{roleId:e,...r}),U=e=>u.post("/roles/deleteRole",{roleId:e}),V=({selectedItem:e,setSelectedItem:r,...s})=>c(v,{...s,className:"min-w-max",children:[t(j,{labelCol:{span:3},children:x([{label:"Name",required:!0,children:t(f,{value:e.name,onChange:l=>r({...e,name:l.target.value})})},{label:"Desc",required:!0,children:t(f.TextArea,{value:e.desc,onChange:l=>r({...e,desc:l.target.value})})}])}),c("div",{className:" grid grid-cols-3 mt-5 gap-4 ",children:[t("div",{className:"text-lg font-bold ",children:"Route Auth"}),t("div",{className:"text-lg font-bold ",children:"Content Auth"})]}),c("div",{className:"grid grid-cols-3 mt-5 gap-4 max-h-[40vh] overflow-auto",children:[t(I,{onCheck:l=>r({...e,routeAuth:l}),checkedKeys:e.routeAuth,fieldNames:{key:"path"},checkable:!0,treeData:q}),t("div",{})]})]}),$=()=>{const{filter:e,setFilter:r}=D({}),{pagination:s,setPagination:l}=F(),{selectedItem:n,setSelectedItem:m}=B({}),{modal:i,setModal:h}=H({}),{data:N,setData:R}=S([]),{loading:y,setLoading:g}=T(!1),{t:k}=z(),d=async a=>{g(!0);try{const o=await Q({...e,current:(a==null?void 0:a.current)||s.current,pageSize:(a==null?void 0:a.pageSize)||s.pageSize}),{items:b=[],total:A}=o;g(!1),R(b),l({...s,...a||{},total:A})}catch{}},w=async()=>{const{name:a}=n;if(!a)return L.error("Please finish all required info");try{n._id?await J(n._id,n):await G(n),h({...i,open:!1}),await d()}catch{}};E(e,()=>d({...s,current:1}));const p=[{title:"Name",dataIndex:"name"},{title:"Desc",dataIndex:"desc"},{title:"Staff Count",dataIndex:"staffCount"},{title:"Action",dataIndex:"action",render:(a,o)=>c(O,{children:[t("a",{onClick:()=>{m({...o}),h({...i,open:!0,title:"Edit"})},children:"Edit"}),t("a",{className:"text-red-600",onClick:()=>{v.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await U(o._id),await d()}catch{}}})},children:"Delete"})]})}].map(a=>({...a,key:a.dataIndex}));return c("div",{children:[t(C,{className:"mb-4",children:c("div",{className:"grid grid-cols-4 gap-4",children:[x([{label:k("SEARCH"),className:"mb-0",children:t(f,{value:e.name,onChange:a=>r({...e,name:a.target.value}),placeholder:"name/desc"})}]),t(M,{className:"mb-0",onQuery:()=>d(),onReset:()=>r({})})]})}),t(C,{title:t(K,{onClick:()=>{h({...i,title:"Add",open:!0}),m({})},type:"primary",children:"+ New Role"}),children:t(_,{rowKey:a=>a._id,onChange:a=>d(a),pagination:s,loading:y,columns:p,dataSource:N})}),t(V,{selectedItem:n,setSelectedItem:m,...i,onOk:()=>w()})]})};export{$ as default};
