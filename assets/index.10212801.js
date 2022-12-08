import{e,f as t,r as a,d as n,C as r,o,A as c,k as i,q as s,b as l,a as u,z as p,$ as f,_ as d,a0 as v,a1 as m,a2 as x,a3 as b,a4 as h,a5 as y,a6 as g,a7 as E,a8 as C,K as w,a9 as N,aa as k,ab as P,ac as O,h as T,ad as R}from"./index.d73c0318.js";var S=function(r){var o,c,i=r.prefixCls,s=r.className,l=r.style,u=r.size,p=r.shape,f=e((t(o={},"".concat(i,"-lg"),"large"===u),t(o,"".concat(i,"-sm"),"small"===u),o)),d=e((t(c={},"".concat(i,"-circle"),"circle"===p),t(c,"".concat(i,"-square"),"square"===p),t(c,"".concat(i,"-round"),"round"===p),c)),v=a.exports.useMemo((function(){return"number"==typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{}}),[u]);return a.exports.createElement("span",{className:e(i,f,d,s),style:n(n({},v),l)})},M=function(c){var i=c.prefixCls,s=c.className,l=c.active,u=c.shape,p=void 0===u?"circle":u,f=c.size,d=void 0===f?"default":f,v=(0,a.exports.useContext(r).getPrefixCls)("skeleton",i),m=o(c,["prefixCls","className"]),x=e(v,"".concat(v,"-element"),t({},"".concat(v,"-active"),l),s);return a.exports.createElement("div",{className:x},a.exports.createElement(S,n({prefixCls:"".concat(v,"-avatar"),shape:p,size:d},m)))},I=function(c){var i,s=c.prefixCls,l=c.className,u=c.active,p=c.block,f=void 0!==p&&p,d=c.size,v=void 0===d?"default":d,m=(0,a.exports.useContext(r).getPrefixCls)("skeleton",s),x=o(c,["prefixCls"]),b=e(m,"".concat(m,"-element"),(t(i={},"".concat(m,"-active"),u),t(i,"".concat(m,"-block"),f),i),l);return a.exports.createElement("div",{className:b},a.exports.createElement(S,n({prefixCls:"".concat(m,"-button"),size:v},x)))},A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},B=function(e,t){return a.exports.createElement(c,i(i({},e),{},{ref:t,icon:A}))};B.displayName="DotChartOutlined";var j=a.exports.forwardRef(B),z=function(n){var o=n.prefixCls,c=n.className,i=n.style,s=n.active,l=n.children,u=(0,a.exports.useContext(r).getPrefixCls)("skeleton",o),p=e(u,"".concat(u,"-element"),t({},"".concat(u,"-active"),s),c),f=null!=l?l:a.exports.createElement(j,null);return a.exports.createElement("div",{className:p},a.exports.createElement("div",{className:e("".concat(u,"-image"),c),style:i},f))},L=function(n){var o=n.prefixCls,c=n.className,i=n.style,s=n.active,l=(0,a.exports.useContext(r).getPrefixCls)("skeleton",o),u=e(l,"".concat(l,"-element"),t({},"".concat(l,"-active"),s),c);return a.exports.createElement("div",{className:u},a.exports.createElement("div",{className:e("".concat(l,"-image"),c),style:i},a.exports.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(l,"-image-svg")},a.exports.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(l,"-image-path")}))))},q=function(c){var i,s=c.prefixCls,l=c.className,u=c.active,p=c.block,f=c.size,d=void 0===f?"default":f,v=(0,a.exports.useContext(r).getPrefixCls)("skeleton",s),m=o(c,["prefixCls"]),x=e(v,"".concat(v,"-element"),(t(i={},"".concat(v,"-active"),u),t(i,"".concat(v,"-block"),p),i),l);return a.exports.createElement("div",{className:x},a.exports.createElement(S,n({prefixCls:"".concat(v,"-input"),size:d},m)))},K=function(t){var n=function(e){var a=t.width,n=t.rows,r=void 0===n?2:n;return Array.isArray(a)?a[e]:r-1===e?a:void 0},r=t.prefixCls,o=t.className,c=t.style,i=t.rows,l=s(Array(i)).map((function(e,t){return a.exports.createElement("li",{key:t,style:{width:n(t)}})}));return a.exports.createElement("ul",{className:e(r,o),style:c},l)},D=function(t){var r=t.prefixCls,o=t.className,c=t.width,i=t.style;return a.exports.createElement("h3",{className:e(r,o),style:n({width:c},i)})};function V(e){return e&&"object"===l(e)?e:{}}var _=function(o){var c=o.prefixCls,i=o.loading,s=o.className,l=o.style,u=o.children,p=o.avatar,f=void 0!==p&&p,d=o.title,v=void 0===d||d,m=o.paragraph,x=void 0===m||m,b=o.active,h=o.round,y=a.exports.useContext(r),g=y.getPrefixCls,E=y.direction,C=g("skeleton",c);if(i||!("loading"in o)){var w,N,k,P=!!f,O=!!v,T=!!x;if(P){var R=n(n({prefixCls:"".concat(C,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(O,T)),V(f));N=a.exports.createElement("div",{className:"".concat(C,"-header")},a.exports.createElement(S,n({},R)))}if(O||T){var M,I;if(O){var A=n(n({prefixCls:"".concat(C,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(P,T)),V(v));M=a.exports.createElement(D,n({},A))}if(T){var B=n(n({prefixCls:"".concat(C,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(P,O)),V(x));I=a.exports.createElement(K,n({},B))}k=a.exports.createElement("div",{className:"".concat(C,"-content")},M,I)}var j=e(C,(t(w={},"".concat(C,"-with-avatar"),P),t(w,"".concat(C,"-active"),b),t(w,"".concat(C,"-rtl"),"rtl"===E),t(w,"".concat(C,"-round"),h),w),s);return a.exports.createElement("div",{className:j,style:l},N,k)}return void 0!==u?u:null};_.Button=I,_.Avatar=M,_.Input=q,_.Image=L,_.Node=z;var W=_,F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},G=function(e,t){return a.exports.createElement(c,i(i({},e),{},{ref:t,icon:F}))};G.displayName="PlusOutlined";var H=a.exports.forwardRef(G),X=a.exports.createContext(null),Y=a.exports.forwardRef((function(t,n){var r=t.prefixCls,o=t.className,c=t.style,i=t.id,s=t.active,l=t.tabKey,u=t.children;return a.exports.createElement("div",{id:i&&"".concat(i,"-panel-").concat(l),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(l),"aria-hidden":!s,style:c,className:e(r,s&&"".concat(r,"-active"),o),ref:n},u)})),J=["key","forceRender","style","className"];function U(r){var o=r.id,c=r.activeKey,s=r.animated,l=r.tabPosition,f=r.destroyInactiveTabPane,d=a.exports.useContext(X),v=d.prefixCls,m=d.tabs,x=s.tabPane,b="".concat(v,"-tabpane");return a.exports.createElement("div",{className:e("".concat(v,"-content-holder"))},a.exports.createElement("div",{className:e("".concat(v,"-content"),"".concat(v,"-content-").concat(l),t({},"".concat(v,"-content-animated"),x))},m.map((function(t){var r=t.key,l=t.forceRender,d=t.style,v=t.className,m=u(t,J),h=r===c;return a.exports.createElement(p,n({key:r,visible:h,forceRender:l,removeOnLeave:!!f,leavedClassName:"".concat(b,"-hidden")},s.tabPaneMotion),(function(t,c){var s=t.style,l=t.className;return a.exports.createElement(Y,n({},m,{prefixCls:b,id:o,tabKey:r,animated:x,active:h,style:i(i({},d),s),className:e(v,l),ref:c}))}))}))))}function $(e){var t=a.exports.useRef(),n=a.exports.useRef(!1);return a.exports.useEffect((function(){return n.current=!1,function(){n.current=!0,f.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(f.cancel(t.current),t.current=f((function(){e.apply(void 0,r)})))}}function Q(n,r){var o,c=n.prefixCls,i=n.id,s=n.active,l=n.tab,u=l.key,p=l.label,f=l.disabled,d=l.closeIcon,m=n.closable,x=n.renderWrapper,b=n.removeAriaLabel,h=n.editable,y=n.onClick,g=n.onRemove,E=n.onFocus,C=n.style,w="".concat(c,"-tab");a.exports.useEffect((function(){return g}),[]);var N=h&&!1!==m&&!f;function k(e){f||y(e)}var P=a.exports.createElement("div",{key:u,ref:r,className:e(w,(o={},t(o,"".concat(w,"-with-remove"),N),t(o,"".concat(w,"-active"),s),t(o,"".concat(w,"-disabled"),f),o)),style:C,onClick:k},a.exports.createElement("div",{role:"tab","aria-selected":s,id:i&&"".concat(i,"-tab-").concat(u),className:"".concat(w,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[v.SPACE,v.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:E},p),N&&a.exports.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:u,event:t})}},d||h.removeIcon||"×"));return x?x(P):P}var Z=a.exports.forwardRef(Q),ee={width:0,height:0,left:0,top:0};var te={width:0,height:0,left:0,top:0,right:0};var ae={adjustX:1,adjustY:1},ne=[0,0],re={topLeft:{points:["bl","tl"],overflow:ae,offset:[0,-4],targetOffset:ne},topCenter:{points:["bc","tc"],overflow:ae,offset:[0,-4],targetOffset:ne},topRight:{points:["br","tr"],overflow:ae,offset:[0,-4],targetOffset:ne},bottomLeft:{points:["tl","bl"],overflow:ae,offset:[0,4],targetOffset:ne},bottomCenter:{points:["tc","bc"],overflow:ae,offset:[0,4],targetOffset:ne},bottomRight:{points:["tr","br"],overflow:ae,offset:[0,4],targetOffset:ne}},oe=v.ESC,ce=v.TAB;var ie=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function se(n,r){var o=n.arrow,c=void 0!==o&&o,s=n.prefixCls,l=void 0===s?"rc-dropdown":s,p=n.transitionName,v=n.animation,b=n.align,h=n.placement,y=void 0===h?"bottomLeft":h,g=n.placements,E=void 0===g?re:g,C=n.getPopupContainer,w=n.showAction,N=n.hideAction,k=n.overlayClassName,P=n.overlayStyle,O=n.visible,T=n.trigger,R=void 0===T?["hover"]:T,S=n.autoFocus,M=u(n,ie),I=a.exports.useState(),A=d(I,2),B=A[0],j=A[1],z="visible"in n?O:B,L=a.exports.useRef(null);a.exports.useImperativeHandle(r,(function(){return L.current})),function(e){var t=e.visible,n=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,c=e.autoFocus,i=a.exports.useRef(!1),s=function(){var e,a,c,i;t&&r.current&&(null===(e=r.current)||void 0===e||null===(a=e.triggerRef)||void 0===a||null===(c=a.current)||void 0===c||null===(i=c.focus)||void 0===i||i.call(c),n(!1),"function"==typeof o&&o(!1))},l=function(){var e,t,a,n,o=m(null===(e=r.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(a=t.current)||void 0===a||null===(n=a.getElement)||void 0===n?void 0:n.call(a))[0];return!!(null==o?void 0:o.focus)&&(o.focus(),i.current=!0,!0)},u=function(e){switch(e.keyCode){case oe:s();break;case ce:var t=!1;i.current||(t=l()),t?e.preventDefault():s()}};a.exports.useEffect((function(){return t?(window.addEventListener("keydown",u),c&&f(l,3),function(){window.removeEventListener("keydown",u),i.current=!1}):function(){i.current=!1}}),[t])}({visible:z,setTriggerVisible:j,triggerRef:L,onVisibleChange:n.onVisibleChange,autoFocus:S});var q,K,D,V,_,W,F=function(){var e,t="function"==typeof(e=n.overlay)?e():e;return a.exports.createElement(a.exports.Fragment,null,c&&a.exports.createElement("div",{className:"".concat(l,"-arrow")}),t)},G=N;return G||-1===R.indexOf("contextMenu")||(G=["click"]),a.exports.createElement(x,i(i({builtinPlacements:E},M),{},{prefixCls:l,ref:L,popupClassName:e(k,t({},"".concat(l,"-show-arrow"),c)),popupStyle:P,action:R,showAction:w,hideAction:G||[],popupPlacement:y,popupAlign:b,popupTransitionName:p,popupAnimation:v,popupVisible:z,stretch:(_=n.minOverlayWidthMatchTrigger,W=n.alignPoint,("minOverlayWidthMatchTrigger"in n?_:!W)?"minWidth":""),popup:"function"==typeof n.overlay?F:F(),onPopupVisibleChange:function(e){var t=n.onVisibleChange;j(e),"function"==typeof t&&t(e)},onPopupClick:function(e){var t=n.onOverlayClick;j(!1),t&&t(e)},getPopupContainer:C}),(K=n.children,D=K.props?K.props:{},V=e(D.className,void 0!==(q=n.openClassName)?q:"".concat(l,"-open")),z&&K?a.exports.cloneElement(K,{className:V}):K))}var le=a.exports.forwardRef(se);function ue(e,t){var n=e.prefixCls,r=e.editable,o=e.locale,c=e.style;return r&&!1!==r.showAdd?a.exports.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null==o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){r.onEdit("add",{event:e})}},r.addIcon||"+"):null}var pe=a.exports.forwardRef(ue);function fe(n,r){var o=n.prefixCls,c=n.id,i=n.tabs,s=n.locale,l=n.mobile,u=n.moreIcon,p=void 0===u?"More":u,f=n.moreTransitionName,m=n.style,x=n.className,y=n.editable,g=n.tabBarGutter,E=n.rtl,C=n.removeAriaLabel,w=n.onTabClick,N=n.getPopupContainer,k=n.popupClassName,P=a.exports.useState(!1),O=d(P,2),T=O[0],R=O[1],S=a.exports.useState(null),M=d(S,2),I=M[0],A=M[1],B="".concat(c,"-more-popup"),j="".concat(o,"-dropdown"),z=null!==I?"".concat(B,"-").concat(I):null,L=null==s?void 0:s.dropdownAriaLabel;var q=a.exports.createElement(b,{onClick:function(e){var t=e.key,a=e.domEvent;w(t,a),R(!1)},prefixCls:"".concat(j,"-menu"),id:B,tabIndex:-1,role:"listbox","aria-activedescendant":z,selectedKeys:[I],"aria-label":void 0!==L?L:"expanded dropdown"},i.map((function(e){var t=y&&!1!==e.closable&&!e.disabled;return a.exports.createElement(h,{key:e.key,id:"".concat(B,"-").concat(e.key),role:"option","aria-controls":c&&"".concat(c,"-panel-").concat(e.key),disabled:e.disabled},a.exports.createElement("span",null,e.label),t&&a.exports.createElement("button",{type:"button","aria-label":C||"remove",tabIndex:0,className:"".concat(j,"-menu-item-remove"),onClick:function(t){var a,n;t.stopPropagation(),a=t,n=e.key,a.preventDefault(),a.stopPropagation(),y.onEdit("remove",{key:n,event:a})}},e.closeIcon||y.removeIcon||"×"))})));function K(e){for(var t=i.filter((function(e){return!e.disabled})),a=t.findIndex((function(e){return e.key===I}))||0,n=t.length,r=0;r<n;r+=1){var o=t[a=(a+e+n)%n];if(!o.disabled)return void A(o.key)}}a.exports.useEffect((function(){var e=document.getElementById(z);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[I]),a.exports.useEffect((function(){T||A(null)}),[T]);var D=t({},E?"marginRight":"marginLeft",g);i.length||(D.visibility="hidden",D.order=1);var V=e(t({},"".concat(j,"-rtl"),E)),_=l?null:a.exports.createElement(le,{prefixCls:j,overlay:q,trigger:["hover"],visible:!!i.length&&T,transitionName:f,onVisibleChange:R,overlayClassName:e(V,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},a.exports.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:D,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":B,id:"".concat(c,"-more"),"aria-expanded":T,onKeyDown:function(e){var t=e.which;if(T)switch(t){case v.UP:K(-1),e.preventDefault();break;case v.DOWN:K(1),e.preventDefault();break;case v.ESC:R(!1);break;case v.SPACE:case v.ENTER:null!==I&&w(I,e)}else[v.DOWN,v.SPACE,v.ENTER].includes(t)&&(R(!0),e.preventDefault())}},p));return a.exports.createElement("div",{className:e("".concat(o,"-nav-operations"),x),style:m,ref:r},_,a.exports.createElement(pe,{prefixCls:o,locale:s,editable:y}))}var de=a.exports.memo(a.exports.forwardRef(fe),(function(e,t){return t.tabMoving})),ve=Math.pow(.995,20);function me(e,t){var n=a.exports.useRef(e),r=a.exports.useState({}),o=d(r,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,o({})}]}function xe(e){var t;return e instanceof Map?(t={},e.forEach((function(e,a){t[a]=e}))):t=e,JSON.stringify(t)}var be=a.exports.forwardRef((function(e,t){var n,r=e.position,o=e.prefixCls,c=e.extra;if(!c)return null;var i={};return"object"!==l(c)||a.exports.isValidElement(c)?i.right=c:i=c,"right"===r&&(n=i.right),"left"===r&&(n=i.left),n?a.exports.createElement("div",{className:"".concat(o,"-extra-content"),ref:t},n):null})),he=function(e){var t=e.current||{},a=t.offsetWidth,n=void 0===a?0:a,r=t.offsetHeight;return[n,void 0===r?0:r]},ye=function(e,t){return e[t?0:1]};function ge(r,o){var c,l,u=a.exports.useContext(X),p=u.prefixCls,v=u.tabs,m=r.className,x=r.style,b=r.id,h=r.animated,E=r.activeKey,C=r.rtl,w=r.extra,N=r.editable,k=r.locale,P=r.tabPosition,O=r.tabBarGutter,T=r.children,R=r.onTabClick,S=r.onTabScroll,M=a.exports.useRef(),I=a.exports.useRef(),A=a.exports.useRef(),B=a.exports.useRef(),j=a.exports.useRef(),z=a.exports.useRef(),L=a.exports.useRef(),q=(l=a.exports.useRef(new Map),[function(e){return l.current.has(e)||l.current.set(e,a.exports.createRef()),l.current.get(e)},function(e){l.current.delete(e)}]),K=d(q,2),D=K[0],V=K[1],_="top"===P||"bottom"===P,W=me(0,(function(e,t){_&&S&&S({direction:e>t?"left":"right"})})),F=d(W,2),G=F[0],H=F[1],Y=me(0,(function(e,t){!_&&S&&S({direction:e>t?"top":"bottom"})})),J=d(Y,2),U=J[0],Q=J[1],ae=a.exports.useState([0,0]),ne=d(ae,2),re=ne[0],oe=ne[1],ce=a.exports.useState([0,0]),ie=d(ce,2),se=ie[0],le=ie[1],ue=a.exports.useState([0,0]),fe=d(ue,2),ge=fe[0],Ee=fe[1],Ce=a.exports.useState([0,0]),we=d(Ce,2),Ne=we[0],ke=we[1],Pe=function(e){var t=a.exports.useRef([]),n=a.exports.useState({}),r=d(n,2)[1],o=a.exports.useRef("function"==typeof e?e():e),c=$((function(){var e=o.current;t.current.forEach((function(t){e=t(e)})),t.current=[],o.current=e,r({})}));return[o.current,function(e){t.current.push(e),c()}]}(new Map),Oe=d(Pe,2),Te=Oe[0],Re=Oe[1],Se=function(e,t,n){return a.exports.useMemo((function(){for(var a,n=new Map,r=t.get(null===(a=e[0])||void 0===a?void 0:a.key)||ee,o=r.left+r.width,c=0;c<e.length;c+=1){var s,l=e[c].key,u=t.get(l);u||(u=t.get(null===(s=e[c-1])||void 0===s?void 0:s.key)||ee);var p=n.get(l)||i({},u);p.right=o-p.left-p.width,n.set(l,p)}return n}),[e.map((function(e){return e.key})).join("_"),t,n])}(v,Te,se[0]),Me=ye(re,_),Ie=ye(se,_),Ae=ye(ge,_),Be=ye(Ne,_),je=Me<Ie+Ae?Me-Be:Me-Ae,ze="".concat(p,"-nav-operations-hidden"),Le=0,qe=0;function Ke(e){return e<Le?Le:e>qe?qe:e}_&&C?(Le=0,qe=Math.max(0,Ie-je)):(Le=Math.min(0,je-Ie),qe=0);var De=a.exports.useRef(),Ve=a.exports.useState(),_e=d(Ve,2),We=_e[0],Fe=_e[1];function Ge(){Fe(Date.now())}function He(){window.clearTimeout(De.current)}!function(e,t){var n=a.exports.useState(),r=d(n,2),o=r[0],c=r[1],i=a.exports.useState(0),s=d(i,2),l=s[0],u=s[1],p=a.exports.useState(0),f=d(p,2),v=f[0],m=f[1],x=a.exports.useState(),b=d(x,2),h=b[0],y=b[1],g=a.exports.useRef(),E=a.exports.useRef(),C=a.exports.useRef(null);C.current={onTouchStart:function(e){var t=e.touches[0],a=t.screenX,n=t.screenY;c({x:a,y:n}),window.clearInterval(g.current)},onTouchMove:function(e){if(o){e.preventDefault();var a=e.touches[0],n=a.screenX,r=a.screenY;c({x:n,y:r});var i=n-o.x,s=r-o.y;t(i,s);var p=Date.now();u(p),m(p-l),y({x:i,y:s})}},onTouchEnd:function(){if(o&&(c(null),y(null),h)){var e=h.x/v,a=h.y/v,n=Math.abs(e),r=Math.abs(a);if(Math.max(n,r)<.1)return;var i=e,s=a;g.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(s)<.01?window.clearInterval(g.current):t(20*(i*=ve),20*(s*=ve))}),20)}},onWheel:function(e){var a=e.deltaX,n=e.deltaY,r=0,o=Math.abs(a),c=Math.abs(n);o===c?r="x"===E.current?a:n:o>c?(r=a,E.current="x"):(r=n,E.current="y"),t(-r,-r)&&e.preventDefault()}},a.exports.useEffect((function(){function t(e){C.current.onTouchMove(e)}function a(e){C.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",(function(e){C.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){C.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",a)}}),[])}(B,(function(e,t){function a(e,t){e((function(e){return Ke(e+t)}))}return!(Me>=Ie)&&(_?a(H,e):a(Q,t),He(),Ge(),!0)})),a.exports.useEffect((function(){return He(),We&&(De.current=window.setTimeout((function(){Fe(0)}),100)),He}),[We]);var Xe=function(e,t,n,r,o,c,i){var s,l,u,p=i.tabs,f=i.tabPosition,d=i.rtl;return["top","bottom"].includes(f)?(s="width",l=d?"right":"left",u=Math.abs(n)):(s="height",l="top",u=-n),a.exports.useMemo((function(){if(!p.length)return[0,0];for(var a=p.length,n=a,r=0;r<a;r+=1){var o=e.get(p[r].key)||te;if(o[l]+o[s]>u+t){n=r-1;break}}for(var c=0,i=a-1;i>=0;i-=1)if((e.get(p[i].key)||te)[l]<u){c=i+1;break}return[c,n]}),[e,t,r,o,c,u,f,p.map((function(e){return e.key})).join("_"),d])}(Se,je,_?G:U,Ie,Ae,Be,i(i({},r),{},{tabs:v})),Ye=d(Xe,2),Je=Ye[0],Ue=Ye[1],$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=Se.get(e)||{width:0,height:0,left:0,right:0,top:0};if(_){var a=G;C?t.right<G?a=t.right:t.right+t.width>G+je&&(a=t.right+t.width-je):t.left<-G?a=-t.left:t.left+t.width>-G+je&&(a=-(t.left+t.width-je)),Q(0),H(Ke(a))}else{var n=U;t.top<-U?n=-t.top:t.top+t.height>-U+je&&(n=-(t.top+t.height-je)),H(0),Q(Ke(n))}},Qe={};"top"===P||"bottom"===P?Qe[C?"marginRight":"marginLeft"]=O:Qe.marginTop=O;var Ze=v.map((function(e,t){var n=e.key;return a.exports.createElement(Z,{id:b,prefixCls:p,key:n,tab:e,style:0===t?void 0:Qe,closable:e.closable,editable:N,active:n===E,renderWrapper:T,removeAriaLabel:null==k?void 0:k.removeAriaLabel,ref:D(n),onClick:function(e){R(n,e)},onRemove:function(){V(n)},onFocus:function(){$e(n),Ge(),B.current&&(C||(B.current.scrollLeft=0),B.current.scrollTop=0)}})})),et=$((function(){var e=he(M),t=he(I),a=he(A);oe([e[0]-t[0]-a[0],e[1]-t[1]-a[1]]);var n=he(L);Ee(n);var r=he(z);ke(r);var o=he(j);le([o[0]-n[0],o[1]-n[1]]),Re((function(){var e=new Map;return v.forEach((function(t){var a=t.key,n=D(a).current;n&&e.set(a,{width:n.offsetWidth,height:n.offsetHeight,left:n.offsetLeft,top:n.offsetTop})})),e}))})),tt=v.slice(0,Je),at=v.slice(Ue+1),nt=[].concat(s(tt),s(at)),rt=a.exports.useState(),ot=d(rt,2),ct=ot[0],it=ot[1],st=Se.get(E),lt=a.exports.useRef();function ut(){f.cancel(lt.current)}a.exports.useEffect((function(){var e={};return st&&(_?(C?e.right=st.right:e.left=st.left,e.width=st.width):(e.top=st.top,e.height=st.height)),ut(),lt.current=f((function(){it(e)})),ut}),[st,_,C]),a.exports.useEffect((function(){$e()}),[E,xe(st),xe(Se),_]),a.exports.useEffect((function(){et()}),[C]);var pt,ft,dt,vt,mt=!!nt.length,xt="".concat(p,"-nav-wrap");return _?C?(ft=G>0,pt=G+Me<Ie):(pt=G<0,ft=-G+Me<Ie):(dt=U<0,vt=-U+Me<Ie),a.exports.createElement(y,{onResize:et},a.exports.createElement("div",{ref:g(o,M),role:"tablist",className:e("".concat(p,"-nav"),m),style:x,onKeyDown:function(){Ge()}},a.exports.createElement(be,{ref:I,position:"left",extra:w,prefixCls:p}),a.exports.createElement("div",{className:e(xt,(c={},t(c,"".concat(xt,"-ping-left"),pt),t(c,"".concat(xt,"-ping-right"),ft),t(c,"".concat(xt,"-ping-top"),dt),t(c,"".concat(xt,"-ping-bottom"),vt),c)),ref:B},a.exports.createElement(y,{onResize:et},a.exports.createElement("div",{ref:j,className:"".concat(p,"-nav-list"),style:{transform:"translate(".concat(G,"px, ").concat(U,"px)"),transition:We?"none":void 0}},Ze,a.exports.createElement(pe,{ref:L,prefixCls:p,locale:k,editable:N,style:i(i({},0===Ze.length?void 0:Qe),{},{visibility:mt?"hidden":null})}),a.exports.createElement("div",{className:e("".concat(p,"-ink-bar"),t({},"".concat(p,"-ink-bar-animated"),h.inkBar)),style:ct})))),a.exports.createElement(de,n({},r,{removeAriaLabel:null==k?void 0:k.removeAriaLabel,ref:z,prefixCls:p,tabs:nt,className:!mt&&ze,tabMoving:!!We})),a.exports.createElement(be,{ref:A,position:"right",extra:w,prefixCls:p})))}var Ee=a.exports.forwardRef(ge),Ce=["renderTabBar"],we=["label","key"];function Ne(e){var t=e.renderTabBar,r=u(e,Ce),o=a.exports.useContext(X).tabs;return t?t(i(i({},r),{},{panes:o.map((function(e){var t=e.label,a=e.key,r=u(e,we);return E.createElement(Y,n({tab:t,key:a,tabKey:a},r))}))}),Ee):E.createElement(Ee,r)}var ke=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],Pe=0;function Oe(r,o){var c,s=r.id,p=r.prefixCls,f=void 0===p?"rc-tabs":p,v=r.className,m=r.items,x=r.direction,b=r.activeKey,h=r.defaultActiveKey,y=r.editable,g=r.animated,E=r.tabPosition,N=void 0===E?"top":E,k=r.tabBarGutter,P=r.tabBarStyle,O=r.tabBarExtraContent,T=r.locale,R=r.moreIcon,S=r.moreTransitionName,M=r.destroyInactiveTabPane,I=r.renderTabBar,A=r.onChange,B=r.onTabClick,j=r.onTabScroll,z=r.getPopupContainer,L=r.popupClassName,q=u(r,ke),K=a.exports.useMemo((function(){return(m||[]).filter((function(e){return e&&"object"===l(e)&&"key"in e}))}),[m]),D="rtl"===x,V=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:i({inkBar:!0},"object"===l(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(g),_=a.exports.useState(!1),W=d(_,2),F=W[0],G=W[1];a.exports.useEffect((function(){G(C())}),[]);var H=w((function(){var e;return null===(e=K[0])||void 0===e?void 0:e.key}),{value:b,defaultValue:h}),Y=d(H,2),J=Y[0],$=Y[1],Q=a.exports.useState((function(){return K.findIndex((function(e){return e.key===J}))})),Z=d(Q,2),ee=Z[0],te=Z[1];a.exports.useEffect((function(){var e,t=K.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(ee,K.length-1)),$(null===(e=K[t])||void 0===e?void 0:e.key));te(t)}),[K.map((function(e){return e.key})).join("_"),J,ee]);var ae=w(null,{value:s}),ne=d(ae,2),re=ne[0],oe=ne[1];a.exports.useEffect((function(){s||(oe("rc-tabs-".concat(Pe)),Pe+=1)}),[]);var ce={id:re,activeKey:J,animated:V,tabPosition:N,rtl:D,mobile:F},ie=i(i({},ce),{},{editable:y,locale:T,moreIcon:R,moreTransitionName:S,tabBarGutter:k,onTabClick:function(e,t){null==B||B(e,t);var a=e!==J;$(e),a&&(null==A||A(e))},onTabScroll:j,extra:O,style:P,panes:null,getPopupContainer:z,popupClassName:L});return a.exports.createElement(X.Provider,{value:{tabs:K,prefixCls:f}},a.exports.createElement("div",n({ref:o,id:s,className:e(f,"".concat(f,"-").concat(N),(c={},t(c,"".concat(f,"-mobile"),F),t(c,"".concat(f,"-editable"),y),t(c,"".concat(f,"-rtl"),D),c),v)},q),undefined,a.exports.createElement(Ne,n({},ie,{renderTabBar:I})),a.exports.createElement(U,n({destroyInactiveTabPane:M},ce,{animated:V}))))}var Te=a.exports.forwardRef(Oe),Re={motionAppear:!1,motionEnter:!0,motionLeave:!0};var Se=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var Me=function(){return null},Ie=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function Ae(o){var c,i=o.type,s=o.className,u=o.size,p=o.onEdit,f=o.hideAdd,d=o.centered,v=o.addIcon,m=o.children,x=o.items,b=o.animated,h=Ie(o,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),y=h.prefixCls,g=h.moreIcon,E=void 0===g?a.exports.createElement(O,null):g,C=a.exports.useContext(r),w=C.getPrefixCls,R=C.direction,S=C.getPopupContainer,M=w("tabs",y);"editable-card"===i&&(c={onEdit:function(e,t){var a=t.key,n=t.event;null==p||p("add"===e?n:a,e)},removeIcon:a.exports.createElement(T,null),addIcon:v||a.exports.createElement(H,null),showAdd:!0!==f});var I=w(),A=function(e,t){return e||function(e){return e.filter((function(e){return e}))}(k(t).map((function(e){if(a.exports.isValidElement(e)){var t=e.key,r=e.props||{},o=r.tab,c=Se(r,["tab"]);return n(n({key:String(t)},c),{label:o})}return null})))}(x,m),B=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===a?{inkBar:!1,tabPane:!1}:!0===a?{inkBar:!0,tabPane:!0}:n({inkBar:!0},"object"===l(a)?a:{})).tabPane&&(t.tabPaneMotion=n(n({},Re),{motionName:N(e,"switch")})),t}(M,b);return a.exports.createElement(P.Consumer,null,(function(r){var o,l=void 0!==u?u:r;return a.exports.createElement(Te,n({direction:R,getPopupContainer:S,moreTransitionName:"".concat(I,"-slide-up")},h,{items:A,className:e((o={},t(o,"".concat(M,"-").concat(l),l),t(o,"".concat(M,"-card"),["card","editable-card"].includes(i)),t(o,"".concat(M,"-editable-card"),"editable-card"===i),t(o,"".concat(M,"-centered"),d),o),s),editable:c,moreIcon:E,prefixCls:M,animated:B}))}))}Ae.TabPane=Me;var Be=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},je=function(r){var o=r.prefixCls,c=r.className,i=r.hoverable,s=void 0===i||i,l=Be(r,["prefixCls","className","hoverable"]);return a.exports.createElement(R,null,(function(r){var i=(0,r.getPrefixCls)("card",o),u=e("".concat(i,"-grid"),c,t({},"".concat(i,"-grid-hoverable"),s));return a.exports.createElement("div",n({},l,{className:u}))}))},ze=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var Le=a.exports.forwardRef((function(c,i){var s,l,u,p=a.exports.useContext(r),f=p.getPrefixCls,d=p.direction,v=a.exports.useContext(P),m=c.prefixCls,x=c.className,b=c.extra,h=c.headStyle,y=void 0===h?{}:h,g=c.bodyStyle,E=void 0===g?{}:g,C=c.title,w=c.loading,N=c.bordered,k=void 0===N||N,O=c.size,T=c.type,R=c.cover,S=c.actions,M=c.tabList,I=c.children,A=c.activeTabKey,B=c.defaultActiveTabKey,j=c.tabBarExtraContent,z=c.hoverable,L=c.tabProps,q=void 0===L?{}:L,K=ze(c,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),D=f("card",m),V=a.exports.createElement(W,{loading:!0,active:!0,paragraph:{rows:4},title:!1},I),_=void 0!==A,F=n(n({},q),(t(s={},_?"activeKey":"defaultActiveKey",_?A:B),t(s,"tabBarExtraContent",j),s)),G=M&&M.length?a.exports.createElement(Ae,n({size:"large"},F,{className:"".concat(D,"-head-tabs"),onChange:function(e){var t;null===(t=c.onTabChange)||void 0===t||t.call(c,e)},items:M.map((function(e){var t;return{label:e.tab,key:e.key,disabled:null!==(t=e.disabled)&&void 0!==t&&t}}))})):null;(C||b||G)&&(u=a.exports.createElement("div",{className:"".concat(D,"-head"),style:y},a.exports.createElement("div",{className:"".concat(D,"-head-wrapper")},C&&a.exports.createElement("div",{className:"".concat(D,"-head-title")},C),b&&a.exports.createElement("div",{className:"".concat(D,"-extra")},b)),G));var H,X=R?a.exports.createElement("div",{className:"".concat(D,"-cover")},R):null,Y=a.exports.createElement("div",{className:"".concat(D,"-body"),style:E},w?V:I),J=S&&S.length?a.exports.createElement("ul",{className:"".concat(D,"-actions")},function(e){return e.map((function(t,n){return a.exports.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a.exports.createElement("span",null,t))}))}(S)):null,U=o(K,["onTabChange"]),$=O||v,Q=e(D,(t(l={},"".concat(D,"-loading"),w),t(l,"".concat(D,"-bordered"),k),t(l,"".concat(D,"-hoverable"),z),t(l,"".concat(D,"-contain-grid"),(a.exports.Children.forEach(c.children,(function(e){e&&e.type&&e.type===je&&(H=!0)})),H)),t(l,"".concat(D,"-contain-tabs"),M&&M.length),t(l,"".concat(D,"-").concat($),$),t(l,"".concat(D,"-type-").concat(T),!!T),t(l,"".concat(D,"-rtl"),"rtl"===d),l),x);return a.exports.createElement("div",n({ref:i},U,{className:Q}),u,X,Y,J)})),qe=globalThis&&globalThis.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},Ke=function(t){return a.exports.createElement(R,null,(function(r){var o=r.getPrefixCls,c=t.prefixCls,i=t.className,s=t.avatar,l=t.title,u=t.description,p=qe(t,["prefixCls","className","avatar","title","description"]),f=o("card",c),d=e("".concat(f,"-meta"),i),v=s?a.exports.createElement("div",{className:"".concat(f,"-meta-avatar")},s):null,m=l?a.exports.createElement("div",{className:"".concat(f,"-meta-title")},l):null,x=u?a.exports.createElement("div",{className:"".concat(f,"-meta-description")},u):null,b=m||x?a.exports.createElement("div",{className:"".concat(f,"-meta-detail")},m,x):null;return a.exports.createElement("div",n({},p,{className:d}),v,b)}))},De=Le;De.Grid=je,De.Meta=Ke;var Ve=De;export{Ve as C,Ae as T};
