var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,d=(e,a)=>{for(var t in a||(a={}))i.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))o.call(a,t)&&n(e,t,a[t]);return e},s=(e,r)=>a(e,t(r));import{F as c}from"./filterAction.c0a6db58.js";import{O as l,u as m,z as p,P as u,S as g,U as b,J as f}from"./index.559ed890.js";import{d as y,g as h}from"./product.01d698d5.js";import{u as j,a as v,b as x,c as O}from"./index.41358063.js";import{u as C}from"./useTablePagination.82704ae0.js";import{u as I,a as S}from"./index.f494759b.js";import{S as w}from"./index.a6c54c44.js";import{C as P}from"./index.6ec31141.js";import{T as k}from"./Table.9aede898.js";var N=()=>{const{filter:e,setFilter:a}=j({}),{pagination:t,setPagination:r}=C(),{selectedItem:i,setSelectedItem:o}=I({}),{modal:n,setModal:N}=S({}),{data:z,setData:A}=v([]),{loading:D,setLoading:E}=x(!1),T=l(),F=async a=>{E(!0);try{const i=await h(s(d({},e),{current:(null==a?void 0:a.current)||t.current,pageSize:(null==a?void 0:a.pageSize)||t.pageSize})),{items:o=[],total:n}=i;E(!1),A(o),r(s(d(d({},t),a||{}),{total:n}))}catch(i){}};O(e,(()=>F(s(d({},t),{current:1}))));const R=[{title:"Cover",dataIndex:"cover"},{title:"Name",dataIndex:"name"},{title:"Category",dataIndex:"category"},{title:"Remark",dataIndex:"remark"},{title:"Created At",dataIndex:"createdAt"},{title:"Action",dataIndex:"action",render:(e,a)=>m(w,{children:[p("a",{onClick:()=>{o(d({},a)),N(s(d({},n),{visible:!0,title:"Edit"}))},children:"Edit"}),p("a",{className:"text-red-600",onClick:()=>{u.confirm({content:"Sure to delete this item?",onOk:async()=>{try{await y(a._id),await F()}catch(e){}}})},children:"Delete"})]})}].map((e=>s(d({},e),{key:e.dataIndex})));return m("div",{children:[p(P,{className:"mb-4",children:m("div",{className:"grid grid-cols-4 gap-4",children:[g([{label:"Search",className:"mb-0",children:p(b,{value:e.name,onChange:t=>a(s(d({},e),{name:t.target.value})),placeholder:"name"})}]),p(c,{className:"mb-0",onQuery:()=>F(),onReset:()=>a({})})]})}),p(P,{title:p(f,{onClick:()=>T("/product/productCreate"),type:"primary",children:"+ New Product"}),children:p(k,{rowKey:e=>e._id,onChange:e=>F(e),pagination:t,loading:D,columns:R,dataSource:z})})]})};export{N as default};
