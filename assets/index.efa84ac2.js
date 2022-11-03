import{r as e,a0 as t,e as r,f as n,_ as a,a1 as o,a as c,a2 as i,k as l,a3 as s,b as u,a4 as p,a5 as f,a6 as d,q as v,a7 as m,d as x,$ as b,a8 as h,K as y,A as g,C as E,a9 as C,aa as w,h as N,o as k}from"./index.1febd9c7.js";var P=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},T=function(o){var c=o.prefixCls,i=o.className,l=o.hoverable,s=void 0===l||l,u=P(o,["prefixCls","className","hoverable"]);return e.exports.createElement(t,null,(function(t){var o=(0,t.getPrefixCls)("card",c),l=r("".concat(o,"-grid"),i,n({},"".concat(o,"-grid-hoverable"),s));return e.exports.createElement("div",a({},u,{className:l}))}))},O=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},S=function(n){return e.exports.createElement(t,null,(function(t){var o=t.getPrefixCls,c=n.prefixCls,i=n.className,l=n.avatar,s=n.title,u=n.description,p=O(n,["prefixCls","className","avatar","title","description"]),f=o("card",c),d=r("".concat(f,"-meta"),i),v=l?e.exports.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,m=s?e.exports.createElement("div",{className:"".concat(f,"-meta-title")},s):null,x=u?e.exports.createElement("div",{className:"".concat(f,"-meta-description")},u):null,b=m||x?e.exports.createElement("div",{className:"".concat(f,"-meta-detail")},m,x):null;return e.exports.createElement("div",a({},p,{className:d}),v,b)}))};function I(t){var r=e.exports.useRef(),n=e.exports.useRef(!1);return e.exports.useEffect((function(){return n.current=!1,function(){n.current=!0,o.cancel(r.current)}}),[]),function(){for(var e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];n.current||(o.cancel(r.current),r.current=o((function(){t.apply(void 0,a)})))}}function R(t,a){var o,c=t.prefixCls,l=t.id,s=t.active,u=t.tab,p=u.key,f=u.tab,d=u.disabled,v=u.closeIcon,m=t.closable,x=t.renderWrapper,b=t.removeAriaLabel,h=t.editable,y=t.onClick,g=t.onRemove,E=t.onFocus,C=t.style,w="".concat(c,"-tab");e.exports.useEffect((function(){return g}),[]);var N=h&&!1!==m&&!d;function k(e){d||y(e)}var P=e.exports.createElement("div",{key:p,ref:a,className:r(w,(o={},n(o,"".concat(w,"-with-remove"),N),n(o,"".concat(w,"-active"),s),n(o,"".concat(w,"-disabled"),d),o)),style:C,onClick:k},e.exports.createElement("div",{role:"tab","aria-selected":s,id:l&&"".concat(l,"-tab-").concat(p),className:"".concat(w,"-btn"),"aria-controls":l&&"".concat(l,"-panel-").concat(p),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),k(e)},onKeyDown:function(e){[i.SPACE,i.ENTER].includes(e.which)&&(e.preventDefault(),k(e))},onFocus:E},f),N&&e.exports.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:p,event:t})}},v||h.removeIcon||"×"));return x?x(P):P}var A=e.exports.forwardRef(R),M={width:0,height:0,left:0,top:0};var L={width:0,height:0,left:0,top:0,right:0};var j={adjustX:1,adjustY:1},B=[0,0],q={topLeft:{points:["bl","tl"],overflow:j,offset:[0,-4],targetOffset:B},topCenter:{points:["bc","tc"],overflow:j,offset:[0,-4],targetOffset:B},topRight:{points:["br","tr"],overflow:j,offset:[0,-4],targetOffset:B},bottomLeft:{points:["tl","bl"],overflow:j,offset:[0,4],targetOffset:B},bottomCenter:{points:["tc","bc"],overflow:j,offset:[0,4],targetOffset:B},bottomRight:{points:["tr","br"],overflow:j,offset:[0,4],targetOffset:B}},K=i.ESC,z=i.TAB;var D=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function V(t,a){var i=t.arrow,f=void 0!==i&&i,d=t.prefixCls,v=void 0===d?"rc-dropdown":d,m=t.transitionName,x=t.animation,b=t.align,h=t.placement,y=void 0===h?"bottomLeft":h,g=t.placements,E=void 0===g?q:g,C=t.getPopupContainer,w=t.showAction,N=t.hideAction,k=t.overlayClassName,P=t.overlayStyle,T=t.visible,O=t.trigger,S=void 0===O?["hover"]:O,I=t.autoFocus,R=u(t,D),A=e.exports.useState(),M=c(A,2),L=M[0],j=M[1],B="visible"in t?T:L,V=e.exports.useRef(null);e.exports.useImperativeHandle(a,(function(){return V.current})),function(t){var r=t.visible,n=t.setTriggerVisible,a=t.triggerRef,c=t.onVisibleChange,i=t.autoFocus,l=e.exports.useRef(!1),u=function(){var e,t,o,i;r&&a.current&&(null===(e=a.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(o=t.current)||void 0===o||null===(i=o.focus)||void 0===i||i.call(o),n(!1),"function"==typeof c&&c(!1))},p=function(){var e,t,r,n,o=s(null===(e=a.current)||void 0===e||null===(t=e.popupRef)||void 0===t||null===(r=t.current)||void 0===r||null===(n=r.getElement)||void 0===n?void 0:n.call(r))[0];return!!(null==o?void 0:o.focus)&&(o.focus(),l.current=!0,!0)},f=function(e){switch(e.keyCode){case K:u();break;case z:var t=!1;l.current||(t=p()),t?e.preventDefault():u()}};e.exports.useEffect((function(){return r?(window.addEventListener("keydown",f),i&&o(p,3),function(){window.removeEventListener("keydown",f),l.current=!1}):function(){l.current=!1}}),[r])}({visible:B,setTriggerVisible:j,triggerRef:V,onVisibleChange:t.onVisibleChange,autoFocus:I});var W,_,F,H,G,Y,X=function(){var r,n="function"==typeof(r=t.overlay)?r():r;return e.exports.createElement(e.exports.Fragment,null,f&&e.exports.createElement("div",{className:"".concat(v,"-arrow")}),n)},U=N;return U||-1===S.indexOf("contextMenu")||(U=["click"]),e.exports.createElement(p,l(l({builtinPlacements:E},R),{},{prefixCls:v,ref:V,popupClassName:r(k,n({},"".concat(v,"-show-arrow"),f)),popupStyle:P,action:S,showAction:w,hideAction:U||[],popupPlacement:y,popupAlign:b,popupTransitionName:m,popupAnimation:x,popupVisible:B,stretch:(G=t.minOverlayWidthMatchTrigger,Y=t.alignPoint,("minOverlayWidthMatchTrigger"in t?G:!Y)?"minWidth":""),popup:"function"==typeof t.overlay?X:X(),onPopupVisibleChange:function(e){var r=t.onVisibleChange;j(e),"function"==typeof r&&r(e)},onPopupClick:function(e){var r=t.onOverlayClick;j(!1),r&&r(e)},getPopupContainer:C}),(_=t.children,F=_.props?_.props:{},H=r(F.className,void 0!==(W=t.openClassName)?W:"".concat(v,"-open")),B&&_?e.exports.cloneElement(_,{className:H}):_))}var W=e.exports.forwardRef(V);function _(t,r){var n=t.prefixCls,a=t.editable,o=t.locale,c=t.style;return a&&!1!==a.showAdd?e.exports.createElement("button",{ref:r,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null==o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var F=e.exports.forwardRef(_);function H(t,a){var o=t.prefixCls,l=t.id,s=t.tabs,u=t.locale,p=t.mobile,v=t.moreIcon,m=void 0===v?"More":v,x=t.moreTransitionName,b=t.style,h=t.className,y=t.editable,g=t.tabBarGutter,E=t.rtl,C=t.removeAriaLabel,w=t.onTabClick,N=t.popupClassName,k=e.exports.useState(!1),P=c(k,2),T=P[0],O=P[1],S=e.exports.useState(null),I=c(S,2),R=I[0],A=I[1],M="".concat(l,"-more-popup"),L="".concat(o,"-dropdown"),j=null!==R?"".concat(M,"-").concat(R):null,B=null==u?void 0:u.dropdownAriaLabel;var q=e.exports.createElement(f,{onClick:function(e){var t=e.key,r=e.domEvent;w(t,r),O(!1)},prefixCls:"".concat(L,"-menu"),id:M,tabIndex:-1,role:"listbox","aria-activedescendant":j,selectedKeys:[R],"aria-label":void 0!==B?B:"expanded dropdown"},s.map((function(t){var r=y&&!1!==t.closable&&!t.disabled;return e.exports.createElement(d,{key:t.key,id:"".concat(M,"-").concat(t.key),role:"option","aria-controls":l&&"".concat(l,"-panel-").concat(t.key),disabled:t.disabled},e.exports.createElement("span",null,t.tab),r&&e.exports.createElement("button",{type:"button","aria-label":C||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(e){var r,n;e.stopPropagation(),r=e,n=t.key,r.preventDefault(),r.stopPropagation(),y.onEdit("remove",{key:n,event:r})}},t.closeIcon||y.removeIcon||"×"))})));function K(e){for(var t=s.filter((function(e){return!e.disabled})),r=t.findIndex((function(e){return e.key===R}))||0,n=t.length,a=0;a<n;a+=1){var o=t[r=(r+e+n)%n];if(!o.disabled)return void A(o.key)}}e.exports.useEffect((function(){var e=document.getElementById(j);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[R]),e.exports.useEffect((function(){T||A(null)}),[T]);var z=n({},E?"marginRight":"marginLeft",g);s.length||(z.visibility="hidden",z.order=1);var D=r(n({},"".concat(L,"-rtl"),E)),V=p?null:e.exports.createElement(W,{prefixCls:L,overlay:q,trigger:["hover"],visible:T,transitionName:x,onVisibleChange:O,overlayClassName:r(D,N),mouseEnterDelay:.1,mouseLeaveDelay:.1},e.exports.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:z,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(l,"-more"),"aria-expanded":T,onKeyDown:function(e){var t=e.which;if(T)switch(t){case i.UP:K(-1),e.preventDefault();break;case i.DOWN:K(1),e.preventDefault();break;case i.ESC:O(!1);break;case i.SPACE:case i.ENTER:null!==R&&w(R,e)}else[i.DOWN,i.SPACE,i.ENTER].includes(t)&&(O(!0),e.preventDefault())}},m));return e.exports.createElement("div",{className:r("".concat(o,"-nav-operations"),h),style:b,ref:a},V,e.exports.createElement(F,{prefixCls:o,locale:u,editable:y}))}var G=e.exports.memo(e.exports.forwardRef(H),(function(e,t){return t.tabMoving})),Y=e.exports.createContext(null),X=Math.pow(.995,20);function U(t,r){var n=e.exports.useRef(t),a=e.exports.useState({}),o=c(a,2)[1];return[n.current,function(e){var t="function"==typeof e?e(n.current):e;t!==n.current&&r(t,n.current),n.current=t,o({})}]}var $=function(t){var r,n=t.position,a=t.prefixCls,o=t.extra;if(!o)return null;var c={};return o&&"object"===x(o)&&!e.exports.isValidElement(o)?c=o:c.right=o,"right"===n&&(r=c.right),"left"===n&&(r=c.left),r?e.exports.createElement("div",{className:"".concat(a,"-extra-content")},r):null};function J(t,i){var s,u,p=e.exports.useContext(Y),f=p.prefixCls,d=p.tabs,x=t.className,b=t.style,h=t.id,y=t.animated,g=t.activeKey,E=t.rtl,C=t.extra,w=t.editable,N=t.locale,k=t.tabPosition,P=t.tabBarGutter,T=t.children,O=t.onTabClick,S=t.onTabScroll,R=e.exports.useRef(),j=e.exports.useRef(),B=e.exports.useRef(),q=e.exports.useRef(),K=(u=e.exports.useRef(new Map),[function(t){return u.current.has(t)||u.current.set(t,e.exports.createRef()),u.current.get(t)},function(e){u.current.delete(e)}]),z=c(K,2),D=z[0],V=z[1],W="top"===k||"bottom"===k,_=U(0,(function(e,t){W&&S&&S({direction:e>t?"left":"right"})})),H=c(_,2),J=H[0],Q=H[1],Z=U(0,(function(e,t){!W&&S&&S({direction:e>t?"top":"bottom"})})),ee=c(Z,2),te=ee[0],re=ee[1],ne=e.exports.useState(0),ae=c(ne,2),oe=ae[0],ce=ae[1],ie=e.exports.useState(0),le=c(ie,2),se=le[0],ue=le[1],pe=e.exports.useState(null),fe=c(pe,2),de=fe[0],ve=fe[1],me=e.exports.useState(null),xe=c(me,2),be=xe[0],he=xe[1],ye=e.exports.useState(0),ge=c(ye,2),Ee=ge[0],Ce=ge[1],we=e.exports.useState(0),Ne=c(we,2),ke=Ne[0],Pe=Ne[1],Te=function(t){var r=e.exports.useRef([]),n=e.exports.useState({}),a=c(n,2)[1],o=e.exports.useRef("function"==typeof t?t():t),i=I((function(){var e=o.current;r.current.forEach((function(t){e=t(e)})),r.current=[],o.current=e,a({})}));return[o.current,function(e){r.current.push(e),i()}]}(new Map),Oe=c(Te,2),Se=Oe[0],Ie=Oe[1],Re=function(t,r,n){return e.exports.useMemo((function(){for(var e,n=new Map,a=r.get(null===(e=t[0])||void 0===e?void 0:e.key)||M,o=a.left+a.width,c=0;c<t.length;c+=1){var i,s=t[c].key,u=r.get(s);u||(u=r.get(null===(i=t[c-1])||void 0===i?void 0:i.key)||M);var p=n.get(s)||l({},u);p.right=o-p.left-p.width,n.set(s,p)}return n}),[t.map((function(e){return e.key})).join("_"),r,n])}(d,Se,oe),Ae="".concat(f,"-nav-operations-hidden"),Me=0,Le=0;function je(e){return e<Me?Me:e>Le?Le:e}W?E?(Me=0,Le=Math.max(0,oe-de)):(Me=Math.min(0,de-oe),Le=0):(Me=Math.min(0,be-se),Le=0);var Be=e.exports.useRef(),qe=e.exports.useState(),Ke=c(qe,2),ze=Ke[0],De=Ke[1];function Ve(){De(Date.now())}function We(){window.clearTimeout(Be.current)}function _e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=Re.get(e)||{width:0,height:0,left:0,right:0,top:0};if(W){var r=J;E?t.right<J?r=t.right:t.right+t.width>J+de&&(r=t.right+t.width-de):t.left<-J?r=-t.left:t.left+t.width>-J+de&&(r=-(t.left+t.width-de)),re(0),Q(je(r))}else{var n=te;t.top<-te?n=-t.top:t.top+t.height>-te+be&&(n=-(t.top+t.height-be)),Q(0),re(je(n))}}!function(t,r){var n=e.exports.useState(),a=c(n,2),o=a[0],i=a[1],l=e.exports.useState(0),s=c(l,2),u=s[0],p=s[1],f=e.exports.useState(0),d=c(f,2),v=d[0],m=d[1],x=e.exports.useState(),b=c(x,2),h=b[0],y=b[1],g=e.exports.useRef(),E=e.exports.useRef(),C=e.exports.useRef(null);C.current={onTouchStart:function(e){var t=e.touches[0],r=t.screenX,n=t.screenY;i({x:r,y:n}),window.clearInterval(g.current)},onTouchMove:function(e){if(o){e.preventDefault();var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a});var c=n-o.x,l=a-o.y;r(c,l);var s=Date.now();p(s),m(s-u),y({x:c,y:l})}},onTouchEnd:function(){if(o&&(i(null),y(null),h)){var e=h.x/v,t=h.y/v,n=Math.abs(e),a=Math.abs(t);if(Math.max(n,a)<.1)return;var c=e,l=t;g.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(g.current):r(20*(c*=X),20*(l*=X))}),20)}},onWheel:function(e){var t=e.deltaX,n=e.deltaY,a=0,o=Math.abs(t),c=Math.abs(n);o===c?a="x"===E.current?t:n:o>c?(a=t,E.current="x"):(a=n,E.current="y"),r(-a,-a)&&e.preventDefault()}},e.exports.useEffect((function(){function e(e){C.current.onTouchMove(e)}function r(e){C.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",r,{passive:!1}),t.current.addEventListener("touchstart",(function(e){C.current.onTouchStart(e)}),{passive:!1}),t.current.addEventListener("wheel",(function(e){C.current.onWheel(e)})),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",r)}}),[])}(R,(function(e,t){function r(e,t){e((function(e){return je(e+t)}))}if(W){if(de>=oe)return!1;r(Q,e)}else{if(be>=se)return!1;r(re,t)}return We(),Ve(),!0})),e.exports.useEffect((function(){return We(),ze&&(Be.current=window.setTimeout((function(){De(0)}),100)),We}),[ze]);var Fe=function(t,r,n,a,o){var c,i,l,s=o.tabs,u=o.tabPosition,p=o.rtl;["top","bottom"].includes(u)?(c="width",i=p?"right":"left",l=Math.abs(r.left)):(c="height",i="top",l=-r.top);var f=r[c],d=n[c],v=a[c],m=f;return d+v>f&&d<f&&(m=f-v),e.exports.useMemo((function(){if(!s.length)return[0,0];for(var e=s.length,r=e,n=0;n<e;n+=1){var a=t.get(s[n].key)||L;if(a[i]+a[c]>l+m){r=n-1;break}}for(var o=0,u=e-1;u>=0;u-=1)if((t.get(s[u].key)||L)[i]<l){o=u+1;break}return[o,r]}),[t,l,m,u,s.map((function(e){return e.key})).join("_"),p])}(Re,{width:de,height:be,left:J,top:te},{width:oe,height:se},{width:Ee,height:ke},l(l({},t),{},{tabs:d})),He=c(Fe,2),Ge=He[0],Ye=He[1],Xe={};"top"===k||"bottom"===k?Xe[E?"marginRight":"marginLeft"]=P:Xe.marginTop=P;var Ue=d.map((function(t,r){var n=t.key;return e.exports.createElement(A,{id:h,prefixCls:f,key:n,tab:t,style:0===r?void 0:Xe,closable:t.closable,editable:w,active:n===g,renderWrapper:T,removeAriaLabel:null==N?void 0:N.removeAriaLabel,ref:D(n),onClick:function(e){O(n,e)},onRemove:function(){V(n)},onFocus:function(){_e(n),Ve(),R.current&&(E||(R.current.scrollLeft=0),R.current.scrollTop=0)}})})),$e=I((function(){var e,t,r,n,a,o,c=(null===(e=R.current)||void 0===e?void 0:e.offsetWidth)||0,i=(null===(t=R.current)||void 0===t?void 0:t.offsetHeight)||0,l=(null===(r=q.current)||void 0===r?void 0:r.offsetWidth)||0,s=(null===(n=q.current)||void 0===n?void 0:n.offsetHeight)||0;ve(c),he(i),Ce(l),Pe(s);var u=((null===(a=j.current)||void 0===a?void 0:a.offsetWidth)||0)-l,p=((null===(o=j.current)||void 0===o?void 0:o.offsetHeight)||0)-s;ce(u),ue(p),Ie((function(){var e=new Map;return d.forEach((function(t){var r=t.key,n=D(r).current;n&&e.set(r,{width:n.offsetWidth,height:n.offsetHeight,left:n.offsetLeft,top:n.offsetTop})})),e}))})),Je=d.slice(0,Ge),Qe=d.slice(Ye+1),Ze=[].concat(v(Je),v(Qe)),et=e.exports.useState(),tt=c(et,2),rt=tt[0],nt=tt[1],at=Re.get(g),ot=e.exports.useRef();function ct(){o.cancel(ot.current)}e.exports.useEffect((function(){var e={};return at&&(W?(E?e.right=at.right:e.left=at.left,e.width=at.width):(e.top=at.top,e.height=at.height)),ct(),ot.current=o((function(){nt(e)})),ct}),[at,W,E]),e.exports.useEffect((function(){_e()}),[g,at,Re,W]),e.exports.useEffect((function(){$e()}),[E,P,g,d.map((function(e){return e.key})).join("_")]);var it,lt,st,ut,pt=!!Ze.length,ft="".concat(f,"-nav-wrap");return W?E?(lt=J>0,it=J+de<oe):(it=J<0,lt=-J+de<oe):(st=te<0,ut=-te+be<se),e.exports.createElement("div",{ref:i,role:"tablist",className:r("".concat(f,"-nav"),x),style:b,onKeyDown:function(){Ve()}},e.exports.createElement($,{position:"left",extra:C,prefixCls:f}),e.exports.createElement(m,{onResize:$e},e.exports.createElement("div",{className:r(ft,(s={},n(s,"".concat(ft,"-ping-left"),it),n(s,"".concat(ft,"-ping-right"),lt),n(s,"".concat(ft,"-ping-top"),st),n(s,"".concat(ft,"-ping-bottom"),ut),s)),ref:R},e.exports.createElement(m,{onResize:$e},e.exports.createElement("div",{ref:j,className:"".concat(f,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat(te,"px)"),transition:ze?"none":void 0}},Ue,e.exports.createElement(F,{ref:q,prefixCls:f,locale:N,editable:w,style:l(l({},0===Ue.length?void 0:Xe),{},{visibility:pt?"hidden":null})}),e.exports.createElement("div",{className:r("".concat(f,"-ink-bar"),n({},"".concat(f,"-ink-bar-animated"),y.inkBar)),style:rt}))))),e.exports.createElement(G,a({},t,{removeAriaLabel:null==N?void 0:N.removeAriaLabel,ref:B,prefixCls:f,tabs:Ze,className:!pt&&Ae,tabMoving:!!ze})),e.exports.createElement($,{position:"right",extra:C,prefixCls:f}))}var Q=e.exports.forwardRef(J);function Z(t){var a=t.id,o=t.activeKey,c=t.animated,i=t.tabPosition,l=t.rtl,s=t.destroyInactiveTabPane,u=e.exports.useContext(Y),p=u.prefixCls,f=u.tabs,d=c.tabPane,v=f.findIndex((function(e){return e.key===o}));return e.exports.createElement("div",{className:r("".concat(p,"-content-holder"))},e.exports.createElement("div",{className:r("".concat(p,"-content"),"".concat(p,"-content-").concat(i),n({},"".concat(p,"-content-animated"),d)),style:v&&d?n({},l?"marginRight":"marginLeft","-".concat(v,"00%")):null},f.map((function(t){return e.exports.cloneElement(t.node,{key:t.key,prefixCls:p,tabKey:t.key,id:a,animated:d,active:t.key===o,destroyInactiveTabPane:s})}))))}function ee(t){var n=t.prefixCls,a=t.forceRender,o=t.className,i=t.style,s=t.id,u=t.active,p=t.animated,f=t.destroyInactiveTabPane,d=t.tabKey,v=t.children,m=e.exports.useState(a),x=c(m,2),b=x[0],h=x[1];e.exports.useEffect((function(){u?h(!0):f&&h(!1)}),[u,f]);var y={};return u||(p?(y.visibility="hidden",y.height=0,y.overflowY="hidden"):y.display="none"),e.exports.createElement("div",{id:s&&"".concat(s,"-panel-").concat(d),role:"tabpanel",tabIndex:u?0:-1,"aria-labelledby":s&&"".concat(s,"-tab-").concat(d),"aria-hidden":!u,style:l(l({},y),i),className:r("".concat(n,"-tabpane"),u&&"".concat(n,"-tabpane-active"),o)},(u||b||a)&&v)}var te=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","popupClassName"],re=0;function ne(t,o){var i,s,p=t.id,f=t.prefixCls,d=void 0===f?"rc-tabs":f,v=t.className,m=t.children,g=t.direction,E=t.activeKey,C=t.defaultActiveKey,w=t.editable,N=t.animated,k=void 0===N?{inkBar:!0,tabPane:!1}:N,P=t.tabPosition,T=void 0===P?"top":P,O=t.tabBarGutter,S=t.tabBarStyle,I=t.tabBarExtraContent,R=t.locale,A=t.moreIcon,M=t.moreTransitionName,L=t.destroyInactiveTabPane,j=t.renderTabBar,B=t.onChange,q=t.onTabClick,K=t.onTabScroll,z=t.popupClassName,D=u(t,te),V=function(t){return b(t).map((function(t){if(e.exports.isValidElement(t)){var r=void 0!==t.key?String(t.key):void 0;return l(l({key:r},t.props),{},{node:t})}return null})).filter((function(e){return e}))}(m),W="rtl"===g;s=!1===k?{inkBar:!1,tabPane:!1}:!0===k?{inkBar:!0,tabPane:!0}:l({inkBar:!0,tabPane:!1},"object"===x(k)?k:{});var _=e.exports.useState(!1),F=c(_,2),H=F[0],G=F[1];e.exports.useEffect((function(){G(h())}),[]);var X=y((function(){var e;return null===(e=V[0])||void 0===e?void 0:e.key}),{value:E,defaultValue:C}),U=c(X,2),$=U[0],J=U[1],ee=e.exports.useState((function(){return V.findIndex((function(e){return e.key===$}))})),ne=c(ee,2),ae=ne[0],oe=ne[1];e.exports.useEffect((function(){var e,t=V.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,V.length-1)),J(null===(e=V[t])||void 0===e?void 0:e.key));oe(t)}),[V.map((function(e){return e.key})).join("_"),$,ae]);var ce=y(null,{value:p}),ie=c(ce,2),le=ie[0],se=ie[1],ue=T;H&&!["left","right"].includes(T)&&(ue="top"),e.exports.useEffect((function(){p||(se("rc-tabs-".concat(re)),re+=1)}),[]);var pe,fe={id:le,activeKey:$,animated:s,tabPosition:ue,rtl:W,mobile:H},de=l(l({},fe),{},{editable:w,locale:R,moreIcon:A,moreTransitionName:M,tabBarGutter:O,onTabClick:function(e,t){null==q||q(e,t);var r=e!==$;J(e),r&&(null==B||B(e))},onTabScroll:K,extra:I,style:S,panes:m,popupClassName:z});return pe=j?j(de,Q):e.exports.createElement(Q,de),e.exports.createElement(Y.Provider,{value:{tabs:V,prefixCls:d}},e.exports.createElement("div",a({ref:o,id:p,className:r(d,"".concat(d,"-").concat(ue),(i={},n(i,"".concat(d,"-mobile"),H),n(i,"".concat(d,"-editable"),w),n(i,"".concat(d,"-rtl"),W),i),v)},D),pe,e.exports.createElement(Z,a({destroyInactiveTabPane:L},fe,{animated:s}))))}var ae=e.exports.forwardRef(ne);ae.TabPane=ee;var oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},ce=function(t,r){return e.exports.createElement(g,l(l({},t),{},{ref:r,icon:oe}))};ce.displayName="PlusOutlined";var ie=e.exports.forwardRef(ce),le=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function se(t){var o,c=t.type,i=t.className,l=t.size,s=t.onEdit,u=t.hideAdd,p=t.centered,f=t.addIcon,d=le(t,["type","className","size","onEdit","hideAdd","centered","addIcon"]),v=d.prefixCls,m=d.moreIcon,x=void 0===m?e.exports.createElement(w,null):m,b=e.exports.useContext(E),h=b.getPrefixCls,y=b.direction,g=h("tabs",v);"editable-card"===c&&(o={onEdit:function(e,t){var r=t.key,n=t.event;null==s||s("add"===e?n:r,e)},removeIcon:e.exports.createElement(N,null),addIcon:f||e.exports.createElement(ie,null),showAdd:!0!==u});var k=h();return e.exports.createElement(C.Consumer,null,(function(t){var s,u=void 0!==l?l:t;return e.exports.createElement(ae,a({direction:y,moreTransitionName:"".concat(k,"-slide-up")},d,{className:r((s={},n(s,"".concat(g,"-").concat(u),u),n(s,"".concat(g,"-card"),["card","editable-card"].includes(c)),n(s,"".concat(g,"-editable-card"),"editable-card"===c),n(s,"".concat(g,"-centered"),p),s),i),editable:o,moreIcon:x,prefixCls:g}))}))}se.TabPane=ee;var ue=function(t){var n=t.prefixCls,o=t.className,c=t.width,i=t.style;return e.exports.createElement("h3",{className:r(n,o),style:a({width:c},i)})},pe=function(t){var n=function(e){var r=t.width,n=t.rows,a=void 0===n?2:n;return Array.isArray(r)?r[e]:a-1===e?r:void 0},a=t.prefixCls,o=t.className,c=t.style,i=t.rows,l=v(Array(i)).map((function(t,r){return e.exports.createElement("li",{key:r,style:{width:n(r)}})}));return e.exports.createElement("ul",{className:r(a,o),style:c},l)},fe=function(t){var o,c,i=t.prefixCls,l=t.className,s=t.style,u=t.size,p=t.shape,f=r((n(o={},"".concat(i,"-lg"),"large"===u),n(o,"".concat(i,"-sm"),"small"===u),o)),d=r((n(c={},"".concat(i,"-circle"),"circle"===p),n(c,"".concat(i,"-square"),"square"===p),n(c,"".concat(i,"-round"),"round"===p),c)),v="number"==typeof u?{width:u,height:u,lineHeight:"".concat(u,"px")}:{};return e.exports.createElement("span",{className:r(i,f,d,l),style:a(a({},v),s)})},de=function(t){var o=t.prefixCls,c=t.className,i=t.active,l=(0,e.exports.useContext(E).getPrefixCls)("skeleton",o),s=k(t,["prefixCls","className"]),u=r(l,"".concat(l,"-element"),n({},"".concat(l,"-active"),i),c);return e.exports.createElement("div",{className:u},e.exports.createElement(fe,a({prefixCls:"".concat(l,"-avatar")},s)))};de.defaultProps={size:"default",shape:"circle"};var ve=de,me=function(t){var o,c=t.prefixCls,i=t.className,l=t.active,s=t.block,u=void 0!==s&&s,p=(0,e.exports.useContext(E).getPrefixCls)("skeleton",c),f=k(t,["prefixCls"]),d=r(p,"".concat(p,"-element"),(n(o={},"".concat(p,"-active"),l),n(o,"".concat(p,"-block"),u),o),i);return e.exports.createElement("div",{className:d},e.exports.createElement(fe,a({prefixCls:"".concat(p,"-button")},f)))};me.defaultProps={size:"default"};var xe=me,be=function(t){var o,c=t.prefixCls,i=t.className,l=t.active,s=t.block,u=(0,e.exports.useContext(E).getPrefixCls)("skeleton",c),p=k(t,["prefixCls"]),f=r(u,"".concat(u,"-element"),(n(o={},"".concat(u,"-active"),l),n(o,"".concat(u,"-block"),s),o),i);return e.exports.createElement("div",{className:f},e.exports.createElement(fe,a({prefixCls:"".concat(u,"-input")},p)))};be.defaultProps={size:"default"};var he=be,ye=function(t){var n=t.prefixCls,a=t.className,o=t.style,c=(0,e.exports.useContext(E).getPrefixCls)("skeleton",n),i=r(c,"".concat(c,"-element"),a);return e.exports.createElement("div",{className:i},e.exports.createElement("div",{className:r("".concat(c,"-image"),a),style:o},e.exports.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c,"-image-svg")},e.exports.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(c,"-image-path")}))))};function ge(e){return e&&"object"===x(e)?e:{}}var Ee=function(t){var o=t.prefixCls,c=t.loading,i=t.className,l=t.style,s=t.children,u=t.avatar,p=t.title,f=t.paragraph,d=t.active,v=t.round,m=e.exports.useContext(E),x=m.getPrefixCls,b=m.direction,h=x("skeleton",o);if(c||!("loading"in t)){var y,g,C,w=!!u,N=!!p,k=!!f;if(w){var P=a(a({prefixCls:"".concat(h,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(N,k)),ge(u));g=e.exports.createElement("div",{className:"".concat(h,"-header")},e.exports.createElement(fe,P))}if(N||k){var T,O;if(N){var S=a(a({prefixCls:"".concat(h,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(w,k)),ge(p));T=e.exports.createElement(ue,S)}if(k){var I=a(a({prefixCls:"".concat(h,"-paragraph")},function(e,t){var r={};return e&&t||(r.width="61%"),r.rows=!e&&t?3:2,r}(w,N)),ge(f));O=e.exports.createElement(pe,I)}C=e.exports.createElement("div",{className:"".concat(h,"-content")},T,O)}var R=r(h,(n(y={},"".concat(h,"-with-avatar"),w),n(y,"".concat(h,"-active"),d),n(y,"".concat(h,"-rtl"),"rtl"===b),n(y,"".concat(h,"-round"),v),y),i);return e.exports.createElement("div",{className:R,style:l},g,C)}return void 0!==s?s:null};Ee.defaultProps={avatar:!1,title:!0,paragraph:!0},Ee.Button=xe,Ee.Avatar=ve,Ee.Input=he,Ee.Image=ye;var Ce=Ee,we=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var Ne=e.exports.forwardRef((function(t,o){var c,i,l,s=e.exports.useContext(E),u=s.getPrefixCls,p=s.direction,f=e.exports.useContext(C),d=t.prefixCls,v=t.className,m=t.extra,x=t.headStyle,b=void 0===x?{}:x,h=t.bodyStyle,y=void 0===h?{}:h,g=t.title,w=t.loading,N=t.bordered,P=void 0===N||N,O=t.size,S=t.type,I=t.cover,R=t.actions,A=t.tabList,M=t.children,L=t.activeTabKey,j=t.defaultActiveTabKey,B=t.tabBarExtraContent,q=t.hoverable,K=t.tabProps,z=void 0===K?{}:K,D=we(t,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=u("card",d),W=e.exports.createElement(Ce,{loading:!0,active:!0,paragraph:{rows:4},title:!1},M),_=void 0!==L,F=a(a({},z),(n(c={},_?"activeKey":"defaultActiveKey",_?L:j),n(c,"tabBarExtraContent",B),c)),H=A&&A.length?e.exports.createElement(se,a({size:"large"},F,{className:"".concat(V,"-head-tabs"),onChange:function(e){var r;null===(r=t.onTabChange)||void 0===r||r.call(t,e)}}),A.map((function(t){return e.exports.createElement(se.TabPane,{tab:t.tab,disabled:t.disabled,key:t.key})}))):null;(g||m||H)&&(l=e.exports.createElement("div",{className:"".concat(V,"-head"),style:b},e.exports.createElement("div",{className:"".concat(V,"-head-wrapper")},g&&e.exports.createElement("div",{className:"".concat(V,"-head-title")},g),m&&e.exports.createElement("div",{className:"".concat(V,"-extra")},m)),H));var G,Y=I?e.exports.createElement("div",{className:"".concat(V,"-cover")},I):null,X=e.exports.createElement("div",{className:"".concat(V,"-body"),style:y},w?W:M),U=R&&R.length?e.exports.createElement("ul",{className:"".concat(V,"-actions")},function(t){return t.map((function(r,n){return e.exports.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(n)},e.exports.createElement("span",null,r))}))}(R)):null,$=k(D,["onTabChange"]),J=O||f,Q=r(V,(n(i={},"".concat(V,"-loading"),w),n(i,"".concat(V,"-bordered"),P),n(i,"".concat(V,"-hoverable"),q),n(i,"".concat(V,"-contain-grid"),(e.exports.Children.forEach(t.children,(function(e){e&&e.type&&e.type===T&&(G=!0)})),G)),n(i,"".concat(V,"-contain-tabs"),A&&A.length),n(i,"".concat(V,"-").concat(J),J),n(i,"".concat(V,"-type-").concat(S),!!S),n(i,"".concat(V,"-rtl"),"rtl"===p),i),v);return e.exports.createElement("div",a({ref:o},$,{className:Q}),l,Y,X,U)}));Ne.Grid=T,Ne.Meta=S;var ke=Ne;export{ke as C,se as T};
