var r=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;import{r as a,X as u,Y as l,Z as i}from"./index.d73c0318.js";var c,f=(c=a.exports.useEffect,function(r,e){var n=a.exports.useRef(!1);c((function(){return function(){n.current=!1}}),[]),c((function(){if(n.current)return r();n.current=!0}),e)}),s=globalThis&&globalThis.__read||function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,a=n.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(t=a.next()).done;)u.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u},p=globalThis&&globalThis.__spread||function(){for(var r=[],e=0;e<arguments.length;e++)r=r.concat(s(arguments[e]));return r};var y=globalThis&&globalThis.__read||function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,a=n.call(r),u=[];try{for(;(void 0===e||e-- >0)&&!(t=a.next()).done;)u.push(t.value)}catch(l){o={error:l}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return u};function v(r,e,n){var t=y(a.exports.useState({}),2),o=t[0],c=t[1],s=function(r,e){var n,t=u(r),o=null!==(n=null==e?void 0:e.wait)&&void 0!==n?n:1e3,c=a.exports.useMemo((function(){return l((function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return t.current.apply(t,p(r))}),o,e)}),[]);return i((function(){c.cancel()})),{run:c,cancel:c.cancel,flush:c.flush}}((function(){c({})}),n),v=s.run,b=s.cancel;a.exports.useEffect((function(){return v()}),e),i(b),f(r,[o])}function b(r){const[u,l]=a.exports.useState(((r,a)=>{for(var u in a||(a={}))n.call(a,u)&&o(r,u,a[u]);if(e)for(var u of e(a))t.call(a,u)&&o(r,u,a[u]);return r})({current:1,pageSize:5,pageSizeOptions:[5,10,20,40],showSizeChanger:!0},r));return{pagination:u,setPagination:l}}export{v as a,b as u};
