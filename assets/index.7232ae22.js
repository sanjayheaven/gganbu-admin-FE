import{r as e,a0 as t,e as a,f as r,_ as c,q as n,C as l,o,d as s,a1 as i,a2 as p}from"./index.21e88de5.js";var m=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(a[r[c]]=e[r[c]])}return a},d=function(n){var l=n.prefixCls,o=n.className,s=n.hoverable,i=void 0===s||s,p=m(n,["prefixCls","className","hoverable"]);return e.exports.createElement(t,null,(function(t){var n=(0,t.getPrefixCls)("card",l),s=a("".concat(n,"-grid"),o,r({},"".concat(n,"-grid-hoverable"),i));return e.exports.createElement("div",c({},p,{className:s}))}))},v=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(a[r[c]]=e[r[c]])}return a},u=function(r){return e.exports.createElement(t,null,(function(t){var n=t.getPrefixCls,l=r.prefixCls,o=r.className,s=r.avatar,i=r.title,p=r.description,m=v(r,["prefixCls","className","avatar","title","description"]),d=n("card",l),u=a("".concat(d,"-meta"),o),x=s?e.exports.createElement("div",{className:"".concat(d,"-meta-avatar")},s):null,f=i?e.exports.createElement("div",{className:"".concat(d,"-meta-title")},i):null,y=p?e.exports.createElement("div",{className:"".concat(d,"-meta-description")},p):null,b=f||y?e.exports.createElement("div",{className:"".concat(d,"-meta-detail")},f,y):null;return e.exports.createElement("div",c({},m,{className:u}),x,b)}))},x=function(t){var r=t.prefixCls,n=t.className,l=t.width,o=t.style;return e.exports.createElement("h3",{className:a(r,n),style:c({width:l},o)})},f=function(t){var r=function(e){var a=t.width,r=t.rows,c=void 0===r?2:r;return Array.isArray(a)?a[e]:c-1===e?a:void 0},c=t.prefixCls,l=t.className,o=t.style,s=t.rows,i=n(Array(s)).map((function(t,a){return e.exports.createElement("li",{key:a,style:{width:r(a)}})}));return e.exports.createElement("ul",{className:a(c,l),style:o},i)},y=function(t){var n,l,o=t.prefixCls,s=t.className,i=t.style,p=t.size,m=t.shape,d=a((r(n={},"".concat(o,"-lg"),"large"===p),r(n,"".concat(o,"-sm"),"small"===p),n)),v=a((r(l={},"".concat(o,"-circle"),"circle"===m),r(l,"".concat(o,"-square"),"square"===m),r(l,"".concat(o,"-round"),"round"===m),l)),u="number"==typeof p?{width:p,height:p,lineHeight:"".concat(p,"px")}:{};return e.exports.createElement("span",{className:a(o,d,v,s),style:c(c({},u),i)})},b=function(t){var n=t.prefixCls,s=t.className,i=t.active,p=(0,e.exports.useContext(l).getPrefixCls)("skeleton",n),m=o(t,["prefixCls","className"]),d=a(p,"".concat(p,"-element"),r({},"".concat(p,"-active"),i),s);return e.exports.createElement("div",{className:d},e.exports.createElement(y,c({prefixCls:"".concat(p,"-avatar")},m)))};b.defaultProps={size:"default",shape:"circle"};var h=b,g=function(t){var n,s=t.prefixCls,i=t.className,p=t.active,m=t.block,d=void 0!==m&&m,v=(0,e.exports.useContext(l).getPrefixCls)("skeleton",s),u=o(t,["prefixCls"]),x=a(v,"".concat(v,"-element"),(r(n={},"".concat(v,"-active"),p),r(n,"".concat(v,"-block"),d),n),i);return e.exports.createElement("div",{className:x},e.exports.createElement(y,c({prefixCls:"".concat(v,"-button")},u)))};g.defaultProps={size:"default"};var E=g,C=function(t){var n,s=t.prefixCls,i=t.className,p=t.active,m=t.block,d=(0,e.exports.useContext(l).getPrefixCls)("skeleton",s),v=o(t,["prefixCls"]),u=a(d,"".concat(d,"-element"),(r(n={},"".concat(d,"-active"),p),r(n,"".concat(d,"-block"),m),n),i);return e.exports.createElement("div",{className:u},e.exports.createElement(y,c({prefixCls:"".concat(d,"-input")},v)))};C.defaultProps={size:"default"};var N=C,w=function(t){var r=t.prefixCls,c=t.className,n=t.style,o=(0,e.exports.useContext(l).getPrefixCls)("skeleton",r),s=a(o,"".concat(o,"-element"),c);return e.exports.createElement("div",{className:s},e.exports.createElement("div",{className:a("".concat(o,"-image"),c),style:n},e.exports.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(o,"-image-svg")},e.exports.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(o,"-image-path")}))))};function O(e){return e&&"object"===s(e)?e:{}}var P=function(t){var n=t.prefixCls,o=t.loading,s=t.className,i=t.style,p=t.children,m=t.avatar,d=t.title,v=t.paragraph,u=t.active,b=t.round,h=e.exports.useContext(l),g=h.getPrefixCls,E=h.direction,C=g("skeleton",n);if(o||!("loading"in t)){var N,w,P,j=!!m,k=!!d,q=!!v;if(j){var z=c(c({prefixCls:"".concat(C,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(k,q)),O(m));w=e.exports.createElement("div",{className:"".concat(C,"-header")},e.exports.createElement(y,z))}if(k||q){var T,S;if(k){var A=c(c({prefixCls:"".concat(C,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(j,q)),O(d));T=e.exports.createElement(x,A)}if(q){var _=c(c({prefixCls:"".concat(C,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(j,k)),O(v));S=e.exports.createElement(f,_)}P=e.exports.createElement("div",{className:"".concat(C,"-content")},T,S)}var K=a(C,(r(N={},"".concat(C,"-with-avatar"),j),r(N,"".concat(C,"-active"),u),r(N,"".concat(C,"-rtl"),"rtl"===E),r(N,"".concat(C,"-round"),b),N),s);return e.exports.createElement("div",{className:K,style:i},w,P)}return void 0!==p?p:null};P.defaultProps={avatar:!1,title:!0,paragraph:!0},P.Button=E,P.Avatar=h,P.Input=N,P.Image=w;var j=P,k=globalThis&&globalThis.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(a[r[c]]=e[r[c]])}return a};var q=e.exports.forwardRef((function(t,n){var s,m,v,u=e.exports.useContext(l),x=u.getPrefixCls,f=u.direction,y=e.exports.useContext(i),b=t.prefixCls,h=t.className,g=t.extra,E=t.headStyle,C=void 0===E?{}:E,N=t.bodyStyle,w=void 0===N?{}:N,O=t.title,P=t.loading,q=t.bordered,z=void 0===q||q,T=t.size,S=t.type,A=t.cover,_=t.actions,K=t.tabList,B=t.children,I=t.activeTabKey,M=t.defaultActiveTabKey,L=t.tabBarExtraContent,G=t.hoverable,H=t.tabProps,R=void 0===H?{}:H,D=k(t,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),F=x("card",b),J=e.exports.createElement(j,{loading:!0,active:!0,paragraph:{rows:4},title:!1},B),Q=void 0!==I,U=c(c({},R),(r(s={},Q?"activeKey":"defaultActiveKey",Q?I:M),r(s,"tabBarExtraContent",L),s)),V=K&&K.length?e.exports.createElement(p,c({size:"large"},U,{className:"".concat(F,"-head-tabs"),onChange:function(e){var a;null===(a=t.onTabChange)||void 0===a||a.call(t,e)}}),K.map((function(t){return e.exports.createElement(p.TabPane,{tab:t.tab,disabled:t.disabled,key:t.key})}))):null;(O||g||V)&&(v=e.exports.createElement("div",{className:"".concat(F,"-head"),style:C},e.exports.createElement("div",{className:"".concat(F,"-head-wrapper")},O&&e.exports.createElement("div",{className:"".concat(F,"-head-title")},O),g&&e.exports.createElement("div",{className:"".concat(F,"-extra")},g)),V));var W,X=A?e.exports.createElement("div",{className:"".concat(F,"-cover")},A):null,Y=e.exports.createElement("div",{className:"".concat(F,"-body"),style:w},P?J:B),Z=_&&_.length?e.exports.createElement("ul",{className:"".concat(F,"-actions")},function(t){return t.map((function(a,r){return e.exports.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(r)},e.exports.createElement("span",null,a))}))}(_)):null,$=o(D,["onTabChange"]),ee=T||y,te=a(F,(r(m={},"".concat(F,"-loading"),P),r(m,"".concat(F,"-bordered"),z),r(m,"".concat(F,"-hoverable"),G),r(m,"".concat(F,"-contain-grid"),(e.exports.Children.forEach(t.children,(function(e){e&&e.type&&e.type===d&&(W=!0)})),W)),r(m,"".concat(F,"-contain-tabs"),K&&K.length),r(m,"".concat(F,"-").concat(ee),ee),r(m,"".concat(F,"-type-").concat(S),!!S),r(m,"".concat(F,"-rtl"),"rtl"===f),m),h);return e.exports.createElement("div",c({ref:n},$,{className:te}),v,X,Y,Z)}));q.Grid=d,q.Meta=u;var z=q;export{z as C};
