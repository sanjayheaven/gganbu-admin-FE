var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,s=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))i.call(a,t)&&n(e,t,a[t]);return e},o=(e,r)=>a(e,t(r));import{F as d}from"./filterAction.4dc74e04.js";import{U as c,u as m,a9 as u,z as p,Q as f,R as h,S as g,b3 as b,aa as v,J as y,aZ as x}from"./index.282bde3a.js";import{a as I,T as j}from"./Table.77e59312.js";import{u as w,a as C,b as N,c as S}from"./index.503b99c7.js";import{u as O}from"./useTablePagination.03cfaf4a.js";import{u as k,a as A}from"./index.a3acbd1a.js";import{S as R}from"./index.443a0a3e.js";import{C as P}from"./index.04e6f108.js";var D=e=>{var a=e,{selectedItem:t,setSelectedItem:n}=a,d=((e,a)=>{var t={};for(var n in e)l.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&r)for(var n of r(e))a.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t})(a,["selectedItem","setSelectedItem"]);return m(u,o(s({},d),{className:"min-w-max",children:[p(f,{labelCol:{span:3},children:h([{label:"Name",required:!0,children:p(g,{value:t.name,onChange:e=>n(o(s({},t),{name:e.target.value}))})},{label:"Desc",required:!0,children:p(g.TextArea,{value:t.desc,onChange:e=>n(o(s({},t),{desc:e.target.value}))})}])}),m("div",{className:" grid grid-cols-3 mt-5 gap-4 ",children:[p("div",{className:"text-lg font-bold ",children:"Route Auth"}),p("div",{className:"text-lg font-bold ",children:"Content Auth"})]}),m("div",{className:"grid grid-cols-3 mt-5 gap-4 max-h-[40vh] overflow-auto",children:[p(I,{onCheck:e=>n(o(s({},t),{routeAuth:e})),checkedKeys:t.routeAuth,fieldNames:{key:"path"},checkable:!0,treeData:b}),p("div",{})]})]}))},z=()=>{const{filter:e,setFilter:a}=w({}),{pagination:t,setPagination:r}=O(),{selectedItem:l,setSelectedItem:i}=k({}),{modal:n,setModal:f}=A({}),{data:b,setData:I}=C([]),{loading:z,setLoading:E}=N(!1),{t:T}=v(),_=async a=>{E(!0);try{const l=await(e=>c.get("/roles/getRoles",{params:e}))(o(s({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:i=[],total:n}=l;E(!1),I(i),r(o(s(s({},t),a||{}),{total:n}))}catch(l){}},q=async()=>{const{name:e}=l;if(!e)return x.error("Please finish all required info");try{l._id?await((e,a)=>c.post("/roles/updateRole",s({roleId:e},a)))(l._id,l):await(e=>c.post("/roles/createRole",e))(l),f(o(s({},n),{visible:!1})),await _()}catch(a){}};S(e,(()=>_(o(s({},t),{current:1}))));const F=[{title:"Name",dataIndex:"name"},{title:"Desc",dataIndex:"desc"},{title:"Staff Count",dataIndex:"staffCount"},{title:"Action",dataIndex:"action",render:(e,a)=>m(R,{children:[p("a",{onClick:()=>{i(s({},a)),f(o(s({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),p("a",{className:"text-red-600",onClick:()=>{u.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await(e=a._id,c.post("/roles/deleteRole",{roleId:e})),await _()}catch(t){}var e}})},children:"Delete"})]})}].map((e=>o(s({},e),{key:e.dataIndex})));return m("div",{children:[p(P,{className:"mb-4",children:m("div",{className:"grid grid-cols-4 gap-4",children:[h([{label:T("SEARCH"),className:"mb-0",children:p(g,{value:e.name,onChange:t=>a(o(s({},e),{name:t.target.value})),placeholder:"name/desc"})}]),p(d,{className:"mb-0",onQuery:()=>_(),onReset:()=>a({})})]})}),p(P,{title:p(y,{onClick:()=>{f(o(s({},n),{title:"Add",visible:!0})),i({})},type:"primary",children:"+ New Role"}),children:p(j,{rowKey:e=>e._id,onChange:e=>_(e),pagination:t,loading:z,columns:F,dataSource:b})}),p(D,o(s({selectedItem:l,setSelectedItem:i},n),{onOk:()=>q()}))]})};export{z as default};