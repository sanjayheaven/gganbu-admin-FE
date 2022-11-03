var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{r as s,C as c,_ as i,at as p,au as d,aq as m,$ as u,H as f,e as b,f as h,q as x,A as v,k as g,a2 as y,b4 as E,a as O,a0 as N,a7 as w,b5 as C,M as T,u as j,z as k,J as P,Q as S}from"./index.1febd9c7.js";import{S as R}from"./index.7c1d10d5.js";import{T as I,C as _}from"./index.efa84ac2.js";import{T as D}from"./Table.fbba7f07.js";var A=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},B=function(e){var t,r,a=e.prefixCls,n=e.separator,o=void 0===n?"/":n,l=e.children,m=e.overlay,u=e.dropdownProps,f=A(e,["prefixCls","separator","children","overlay","dropdownProps"]),b=(0,s.exports.useContext(c).getPrefixCls)("breadcrumb",a);return t="href"in f?s.exports.createElement("a",i({className:"".concat(b,"-link")},f),l):s.exports.createElement("span",i({className:"".concat(b,"-link")},f),l),r=t,t=m?s.exports.createElement(p,i({overlay:m,placement:"bottom"},u),s.exports.createElement("span",{className:"".concat(b,"-overlay-link")},r,s.exports.createElement(d,null))):r,l?s.exports.createElement("li",null,t,o&&s.exports.createElement("span",{className:"".concat(b,"-separator")},o)):null};B.__ANT_BREADCRUMB_ITEM=!0;var H=B,L=function(e){var t=e.children,r=(0,s.exports.useContext(c).getPrefixCls)("breadcrumb");return s.exports.createElement("span",{className:"".concat(r,"-separator")},t||"/")};L.__ANT_BREADCRUMB_SEPARATOR=!0;var M=L,z=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function U(e,t,r,a){var n=r.indexOf(e)===r.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var r=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),(function(e,r){return t[r]||e}))}(e,t);return n?s.exports.createElement("span",null,o):s.exports.createElement("a",{href:"#/".concat(a.join("/"))},o)}var q=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(r){e=e.replace(":".concat(r),t[r])})),e},K=function(e,t,r){var a=x(e),n=q(t||"",r);return n&&a.push(n),a},J=function(e){var t,r=e.prefixCls,a=e.separator,n=void 0===a?"/":a,o=e.style,l=e.className,p=e.routes,d=e.children,x=e.itemRender,v=void 0===x?U:x,g=e.params,y=void 0===g?{}:g,E=z(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),O=s.exports.useContext(c),N=O.getPrefixCls,w=O.direction,C=N("breadcrumb",r);if(p&&p.length>0){var T=[];t=p.map((function(e){var t,r=q(e.path,y);return r&&T.push(r),e.children&&e.children.length&&(t=s.exports.createElement(m,{items:e.children.map((function(e){return{key:e.path||e.breadcrumbName,label:v(e,y,p,K(T,e.path,y))}}))})),s.exports.createElement(H,{overlay:t,separator:n,key:r||e.breadcrumbName},v(e,y,p,T))}))}else d&&(t=u(d).map((function(e,t){return e?f(e,{separator:n,key:t}):e})));var j=b(C,h({},"".concat(C,"-rtl"),"rtl"===w),l);return s.exports.createElement("nav",i({className:j,style:o},E),s.exports.createElement("ol",null,t))};J.Item=H,J.Separator=M;var Q=J,$={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},F=function(e,t){return s.exports.createElement(v,g(g({},e),{},{ref:t,icon:$}))};F.displayName="ArrowLeftOutlined";var G=s.exports.forwardRef(F),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},W=function(e,t){return s.exports.createElement(v,g(g({},e),{},{ref:t,icon:V}))};W.displayName="ArrowRightOutlined";var X=s.exports.forwardRef(W),Y=globalThis&&globalThis.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},Z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},ee=s.exports.forwardRef((function(e,t){var r=e.style,a=e.noStyle,n=e.disabled,o=Y(e,["style","noStyle","disabled"]),l={};return a||(l=i({},Z)),n&&(l.pointerEvents="none"),l=i(i({},l),r),s.exports.createElement("div",i({role:"button",tabIndex:0,ref:t},o,{onKeyDown:function(e){e.keyCode===y.ENTER&&e.preventDefault()},onKeyUp:function(t){var r=t.keyCode,a=e.onClick;r===y.ENTER&&a&&a()},style:l}))})),te=function(e,t,r){return t&&r?s.exports.createElement(T,{componentName:"PageHeader"},(function(a){var n=a.back;return s.exports.createElement("div",{className:"".concat(e,"-back")},s.exports.createElement(ee,{onClick:function(e){null==r||r(e)},className:"".concat(e,"-back-button"),"aria-label":n},t))})):null},re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?s.exports.createElement(X,null):s.exports.createElement(G,null)},ae=function(e){var t=E(!1),r=O(t,2),a=r[0],n=r[1],o=function(e){var t=e.width;n(t<768,!0)};return s.exports.createElement(N,null,(function(t){var r,n,l=t.getPrefixCls,c=t.pageHeader,i=t.direction,p=e.prefixCls,d=e.style,m=e.footer,u=e.children,f=e.breadcrumb,x=e.breadcrumbRender,v=e.className,g=!0;"ghost"in e?g=e.ghost:c&&"ghost"in c&&(g=c.ghost);var y=l("page-header",p),E=(null==f?void 0:f.routes)?function(e){return s.exports.createElement(Q,e)}(f):null,O=f&&"props"in f,N=null!==(n=null==x?void 0:x(e,E))&&void 0!==n?n:E,T=O?f:N,j=b(y,v,(h(r={"has-breadcrumb":!!T,"has-footer":!!m},"".concat(y,"-ghost"),g),h(r,"".concat(y,"-rtl"),"rtl"===i),h(r,"".concat(y,"-compact"),a),r));return s.exports.createElement(w,{onResize:o},s.exports.createElement("div",{className:j,style:d},T,function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",a=t.title,n=t.avatar,o=t.subTitle,l=t.tags,c=t.extra,i=t.onBack,p="".concat(e,"-heading"),d=a||o||l||c;if(!d)return null;var m=re(t,r),u=te(e,m,i),f=u||n||d;return s.exports.createElement("div",{className:p},f&&s.exports.createElement("div",{className:"".concat(p,"-left")},u,n&&s.exports.createElement(C,n),a&&s.exports.createElement("span",{className:"".concat(p,"-title"),title:"string"==typeof a?a:void 0},a),o&&s.exports.createElement("span",{className:"".concat(p,"-sub-title"),title:"string"==typeof o?o:void 0},o),l&&s.exports.createElement("span",{className:"".concat(p,"-tags")},l)),c&&s.exports.createElement("span",{className:"".concat(p,"-extra")},s.exports.createElement(R,null,c)))}(y,e,i),u&&function(e,t){return s.exports.createElement("div",{className:"".concat(e,"-content")},t)}(y,u),function(e,t){return t?s.exports.createElement("div",{className:"".concat(e,"-footer")},t):null}(y,m)))}))};function ne(){const[e,c]=s.exports.useState("1"),i=[{title:"Name",dataIndex:"name"},{title:"Desc",dataIndex:"desc"},{title:"Time",dataIndex:"time"}].map((e=>{return s=((e,t)=>{for(var r in t||(t={}))n.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&l(e,r,t[r]);return e})({},e),c={key:e.dataIndex},t(s,r(c));var s,c}));return j("div",{children:[k(ae,{className:" sticky top-0 z-10 mb-4",ghost:!1,onBack:()=>window.history.back(),title:"Order Detail",subTitle:"This is Order Code",extra:[k(P,{children:"Export"},"2"),k(P,{type:"primary",children:"Save"},"1")],footer:j(I,{onChange:e=>c(e),children:[k(I.TabPane,{tab:"Details"},"1"),k(I.TabPane,{tab:"History"},"2")]}),children:"This area place main Info. like, Customer Name, Create Time, Status, etc."}),"1"==e&&j(S,{children:[j("div",{className:"grid grid-cols-3 gap-4 mb-4 min-h-full",children:[j(_,{className:"",title:"Customer Detail",children:[j("span",{className:"grid grid-cols-2 gap-4 mb-4",children:[k("span",{children:"Name:"}),k("span",{children:"Company"})]}),j("span",{className:"grid grid-cols-2 gap-4 mb-4",children:[k("span",{children:"Contact Phone:"}),k("span",{children:"(+65) 8888888866"})]})]}),j(_,{className:"col-span-2",title:"Order Detail",children:[j("span",{className:"grid grid-cols-2 gap-4 mb-4",children:[k("span",{children:"Code:"}),k("span",{children:"This is Order Code"})]}),j("span",{className:"grid grid-cols-2 gap-4 mb-4",children:[k("span",{children:"Create Time:"}),k("span",{children:"This is time."})]})]})]}),k(_,{className:"mb-4",title:"Item List"}),k(_,{className:"mb-4",title:"After Sales"})]}),"2"==e&&k(S,{children:k(_,{children:k(D,{columns:i,dataSource:[{name:"Test",desc:"Update Order Status",time:(new Date).toISOString()}]})})})]})}export{ne as default};