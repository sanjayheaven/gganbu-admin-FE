var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))i.call(a,t)&&n(e,t,a[t]);return e},o=(e,r)=>a(e,t(r));import{F as d}from"./filterAction.51252921.js";import{V as c,u as m,P as u,z as p,R as f,S as h,U as g,a$ as v,J as b,aV as y}from"./index.21e88de5.js";import{a as x,T as I}from"./Table.199d686c.js";import{u as N,a as j,b as w,c as C}from"./index.66bf799e.js";import{u as O}from"./useTablePagination.cce215e9.js";import{u as S,a as k}from"./index.f504757f.js";import{S as P}from"./index.5a19d83a.js";import{C as A}from"./index.7232ae22.js";var R=e=>{var a=e,{selectedItem:t,setSelectedItem:n}=a,d=((e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&r)for(var n of r(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t})(a,["selectedItem","setSelectedItem"]);return m(u,o(s({},d),{className:"min-w-max",children:[p(f,{labelCol:{span:3},children:h([{label:"Name",required:!0,children:p(g,{value:t.name,onChange:e=>n(o(s({},t),{name:e.target.value}))})},{label:"Desc",required:!0,children:p(g.TextArea,{value:t.desc,onChange:e=>n(o(s({},t),{desc:e.target.value}))})}])}),m("div",{className:" grid grid-cols-3 mt-5 gap-4 ",children:[p("div",{className:"text-lg font-bold ",children:"Route Auth"}),p("div",{className:"text-lg font-bold ",children:"Content Auth"})]}),m("div",{className:"grid grid-cols-3 mt-5 gap-4 max-h-[40vh] overflow-auto",children:[p(x,{onCheck:e=>n(o(s({},t),{routeAuth:e})),checkedKeys:t.routeAuth,fieldNames:{key:"path"},checkable:!0,treeData:v}),p("div",{})]})]}))},D=()=>{const{filter:e,setFilter:a}=N({}),{pagination:t,setPagination:r}=O(),{selectedItem:l,setSelectedItem:i}=S({}),{modal:n,setModal:f}=k({}),{data:v,setData:x}=j([]),{loading:D,setLoading:z}=w(!1),T=async a=>{z(!0);try{const l=await(e=>c.get("/roles/getRoles",{params:e}))(o(s({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:i=[],total:n}=l;z(!1),x(i),r(o(s(s({},t),a||{}),{total:n}))}catch(l){}},_=async()=>{const{name:e}=l;if(!e)return y.error("Please finish all required info");try{l._id?await((e,a)=>c.post("/roles/updateRole",s({roleId:e},a)))(l._id,l):await(e=>c.post("/roles/createRole",e))(l),f(o(s({},n),{visible:!1})),await T()}catch(a){}};C(e,(()=>T(o(s({},t),{current:1}))));const q=[{title:"Name",dataIndex:"name"},{title:"Desc",dataIndex:"desc"},{title:"Staff Count",dataIndex:"staffCount"},{title:"Action",dataIndex:"action",render:(e,a)=>m(P,{children:[p("a",{onClick:()=>{i(s({},a)),f(o(s({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),p("a",{className:"text-red-600",onClick:()=>{u.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await(e=a._id,c.post("/roles/deleteRole",{roleId:e})),await T()}catch(t){}var e}})},children:"Delete"})]})}].map((e=>o(s({},e),{key:e.dataIndex})));return m("div",{children:[p(A,{className:"mb-4",children:m("div",{className:"grid grid-cols-4 gap-4",children:[h([{label:"Name",className:"mb-0",children:p(g,{value:e.name,onChange:t=>a(o(s({},e),{name:t.target.value})),placeholder:"name/desc"})}]),p(d,{className:"mb-0",onQuery:()=>T(),onReset:()=>a({})})]})}),p(A,{title:p(b,{onClick:()=>{f(o(s({},n),{title:"Add",visible:!0})),i({})},type:"primary",children:"+ New Role"}),children:p(I,{rowKey:e=>e._id,onChange:e=>T(e),pagination:t,loading:D,columns:q,dataSource:v})}),p(R,o(s({selectedItem:l,setSelectedItem:i},n),{onOk:()=>_()}))]})};export{D as default};
