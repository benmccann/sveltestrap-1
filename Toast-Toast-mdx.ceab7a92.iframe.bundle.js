/*! For license information please see Toast-Toast-mdx.ceab7a92.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[7438,4374],{5519:function(t,e,o){"use strict";o.d(e,{NF:function(){return i},Zo:function(){return c},ah:function(){return a},pC:function(){return s}});var n=o(959);const s=n.createContext({});function i(t){return function(e){const o=a(e.components);return n.createElement(t,{...e,allComponents:o})}}function a(t){const e=n.useContext(s);return n.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const r={};function c({components:t,children:e,disableParentContext:o}){let i;return i=o?"function"==typeof t?t({}):t||r:a(t),n.createElement(s.Provider,{value:i},e)}},866:function(t,e,o){"use strict";o.r(e),o.d(e,{Autohide:function(){return N},Basic:function(){return Z},Dismissible:function(){return V},Events:function(){return F},Icons:function(){return z},Theming:function(){return P}});var n=o(579),s=(o(206),o(2815)),i=o(2039),a=o(5055);function r(t,e,o){const n=t.slice();return n[15]=e[o],n}function c(t){let e;return{c(){e=(0,n.fLW)("Sveltestrap")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function l(t){let e,o,s,i=t[18].color+"";return{c(){e=(0,n.fLW)("This is a toast on a "),o=(0,n.fLW)(i),s=(0,n.fLW)(" background — check it out!")},m(t,i){(0,n.$Tr)(t,e,i),(0,n.$Tr)(t,o,i),(0,n.$Tr)(t,s,i)},p(t,e){262144&e&&i!==(i=t[18].color+"")&&(0,n.rTO)(o,i)},d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o),(0,n.ogt)(s))}}}function d(t){let e,o,s,i;return e=new a.WV({props:{$$slots:{default:[c]},$$scope:{ctx:t}}}),s=new a.Yo({props:{$$slots:{default:[l]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment)},m(t,a){(0,n.yef)(e,t,a),(0,n.$Tr)(t,o,a),(0,n.yef)(s,t,a),i=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};786432&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),i=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(s,t)}}}function u(t){let e,o,i,a,r;const c=[t[18],{theme:t[18].theme||null},{style:"--bs-toast-color: "+("dark"===t[18].theme?"#fff":"#111")+";"},{class:"me-1"}];let l={$$slots:{default:[d]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)l=(0,n.f0i)(l,c[t]);return i=new s.Z({props:l}),{c(){e=(0,n.bGB)("div"),o=(0,n.bGB)("div"),(0,n.YCL)(i.$$.fragment),(0,n.Ljt)(o,"class",a="p-3 bg-"+t[18].color+" mb-3 rounded"),(0,n.Ljt)(e,"class","toast-width")},m(t,s){(0,n.$Tr)(t,e,s),(0,n.R3I)(e,o),(0,n.yef)(i,o,null),r=!0},p(t,e){const s=262144&e?(0,n.LoY)(c,[(0,n.gCg)(t[18]),{theme:t[18].theme||null},{style:"--bs-toast-color: "+("dark"===t[18].theme?"#fff":"#111")+";"},c[3]]):{};786432&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s),(!r||262144&e&&a!==(a="p-3 bg-"+t[18].color+" mb-3 rounded"))&&(0,n.Ljt)(o,"class",a)},i(t){r||((0,n.Ui)(i.$$.fragment,t),r=!0)},o(t){(0,n.etI)(i.$$.fragment,t),r=!1},d(t){t&&(0,n.ogt)(e),(0,n.vpE)(i)}}}function m(t){let e,o=t[15]+"";return{c(){e=(0,n.fLW)(o)},m(t,o){(0,n.$Tr)(t,e,o)},p:n.ZTd,d(t){t&&(0,n.ogt)(e)}}}function p(t){let e,o,s,i=t[15]+"";return{c(){e=(0,n.fLW)("This is a toast with a "),o=(0,n.fLW)(i),s=(0,n.fLW)(" icon.")},m(t,i){(0,n.$Tr)(t,e,i),(0,n.$Tr)(t,o,i),(0,n.$Tr)(t,s,i)},p:n.ZTd,d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o),(0,n.ogt)(s))}}}function $(t){let e,o,s,i;return e=new a.WV({props:{icon:t[15],$$slots:{default:[m]},$$scope:{ctx:t}}}),s=new a.Yo({props:{$$slots:{default:[p]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment)},m(t,a){(0,n.yef)(e,t,a),(0,n.$Tr)(t,o,a),(0,n.yef)(s,t,a),i=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};524288&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),i=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(s,t)}}}function f(t){let e,o,i,a;return i=new s.Z({props:{class:"me-1",$$slots:{default:[$]},$$scope:{ctx:t}}}),{c(){e=(0,n.bGB)("div"),o=(0,n.bGB)("div"),(0,n.YCL)(i.$$.fragment),(0,n.Ljt)(o,"class","p-2 mb-3"),(0,n.Ljt)(e,"class","column")},m(t,s){(0,n.$Tr)(t,e,s),(0,n.R3I)(e,o),(0,n.yef)(i,o,null),a=!0},p(t,e){const o={};524288&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){a||((0,n.Ui)(i.$$.fragment,t),a=!0)},o(t){(0,n.etI)(i.$$.fragment,t),a=!1},d(t){t&&(0,n.ogt)(e),(0,n.vpE)(i)}}}function g(t){let e;return{c(){e=(0,n.fLW)("Sveltestrap")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function h(t){let e,o;return e=new a.JO({props:{slot:"icon",name:"emoji-sunglasses",class:"me-2"}}),{c(){(0,n.YCL)(e.$$.fragment)},m(t,s){(0,n.yef)(e,t,s),o=!0},p:n.ZTd,i(t){o||((0,n.Ui)(e.$$.fragment,t),o=!0)},o(t){(0,n.etI)(e.$$.fragment,t),o=!1},d(t){(0,n.vpE)(e,t)}}}function T(t){let e;return{c(){e=(0,n.fLW)("This is a toast with a custom icon.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function y(t){let e,o,s,i;return e=new a.WV({props:{$$slots:{icon:[h],default:[g]},$$scope:{ctx:t}}}),s=new a.Yo({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment)},m(t,a){(0,n.yef)(e,t,a),(0,n.$Tr)(t,o,a),(0,n.yef)(s,t,a),i=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};524288&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),i=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(s,t)}}}function v(t){let e,o,i,a,c,l,d=(0,n.NXn)(t[3]),u=[];for(let e=0;e<d.length;e+=1)u[e]=f(r(t,d,e));const m=t=>(0,n.etI)(u[t],1,1,(()=>{u[t]=null}));return c=new s.Z({props:{class:"me-1",$$slots:{default:[y]},$$scope:{ctx:t}}}),{c(){e=(0,n.bGB)("div");for(let t=0;t<u.length;t+=1)u[t].c();o=(0,n.DhX)(),i=(0,n.bGB)("div"),a=(0,n.bGB)("div"),(0,n.YCL)(c.$$.fragment),(0,n.Ljt)(a,"class","p-2 mb-3"),(0,n.Ljt)(i,"class","column"),(0,n.Ljt)(e,"class","columns")},m(t,s){(0,n.$Tr)(t,e,s);for(let t=0;t<u.length;t+=1)u[t]&&u[t].m(e,null);(0,n.R3I)(e,o),(0,n.R3I)(e,i),(0,n.R3I)(i,a),(0,n.yef)(c,a,null),l=!0},p(t,s){if(8&s){let i;for(d=(0,n.NXn)(t[3]),i=0;i<d.length;i+=1){const a=r(t,d,i);u[i]?(u[i].p(a,s),(0,n.Ui)(u[i],1)):(u[i]=f(a),u[i].c(),(0,n.Ui)(u[i],1),u[i].m(e,o))}for((0,n.dvw)(),i=d.length;i<u.length;i+=1)m(i);(0,n.gbL)()}const i={};524288&s&&(i.$$scope={dirty:s,ctx:t}),c.$set(i)},i(t){if(!l){for(let t=0;t<d.length;t+=1)(0,n.Ui)(u[t]);(0,n.Ui)(c.$$.fragment,t),l=!0}},o(t){u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)(0,n.etI)(u[t]);(0,n.etI)(c.$$.fragment,t),l=!1},d(t){t&&(0,n.ogt)(e),(0,n.RMB)(u,t),(0,n.vpE)(c)}}}function b(t){let e;return{c(){e=(0,n.fLW)("Toast title")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function x(t){let e;return{c(){e=(0,n.fLW)("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function L(t){let e,o,s,i;return e=new a.WV({props:{toggle:t[4],$$slots:{default:[b]},$$scope:{ctx:t}}}),s=new a.Yo({props:{$$slots:{default:[x]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment)},m(t,a){(0,n.yef)(e,t,a),(0,n.$Tr)(t,o,a),(0,n.yef)(s,t,a),i=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};524288&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),i=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(s,t)}}}function w(t){let e,o;return e=new a.zx({props:{color:"primary",$$slots:{default:[I]},$$scope:{ctx:t}}}),e.$on("click",t[5]),{c(){(0,n.YCL)(e.$$.fragment)},m(t,s){(0,n.yef)(e,t,s),o=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){o||((0,n.Ui)(e.$$.fragment,t),o=!0)},o(t){(0,n.etI)(e.$$.fragment,t),o=!1},d(t){(0,n.vpE)(e,t)}}}function I(t){let e;return{c(){e=(0,n.fLW)("Show Toast")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function O(t){let e,o,i,a;e=new s.Z({props:{isOpen:t[0],$$slots:{default:[L]},$$scope:{ctx:t}}});let r=!t[0]&&w(t);return{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),r&&r.c(),i=(0,n.cSb)()},m(t,s){(0,n.yef)(e,t,s),(0,n.$Tr)(t,o,s),r&&r.m(t,s),(0,n.$Tr)(t,i,s),a=!0},p(t,o){const s={};1&o&&(s.isOpen=t[0]),524288&o&&(s.$$scope={dirty:o,ctx:t}),e.$set(s),t[0]?r&&((0,n.dvw)(),(0,n.etI)(r,1,1,(()=>{r=null})),(0,n.gbL)()):r?(r.p(t,o),1&o&&(0,n.Ui)(r,1)):(r=w(t),r.c(),(0,n.Ui)(r,1),r.m(i.parentNode,i))},i(t){a||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(r),a=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(r),a=!1},d(t){t&&((0,n.ogt)(o),(0,n.ogt)(i)),(0,n.vpE)(e,t),r&&r.d(t)}}}function B(t){let e;return{c(){e=(0,n.fLW)("Show Toast that autohides")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function q(t){let e;return{c(){e=(0,n.fLW)("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function C(t){let e,o,i,r;return e=new a.zx({props:{color:"primary",disabled:t[0],$$slots:{default:[B]},$$scope:{ctx:t}}}),e.$on("click",t[6]),i=new s.Z({props:{autohide:!0,body:!0,header:"Autohides in "+t[2]+" sec",isOpen:t[0],$$slots:{default:[q]},$$scope:{ctx:t}}}),i.$on("close",t[8]),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(i.$$.fragment)},m(t,s){(0,n.yef)(e,t,s),(0,n.$Tr)(t,o,s),(0,n.yef)(i,t,s),r=!0},p(t,o){const n={};1&o&&(n.disabled=t[0]),524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const s={};4&o&&(s.header="Autohides in "+t[2]+" sec"),1&o&&(s.isOpen=t[0]),524288&o&&(s.$$scope={dirty:o,ctx:t}),i.$set(s)},i(t){r||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(i.$$.fragment,t),r=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(i.$$.fragment,t),r=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(i,t)}}}function U(t){let e,o,s=t[0]?"Close":"Open";return{c(){e=(0,n.fLW)(s),o=(0,n.fLW)(" Toast")},m(t,s){(0,n.$Tr)(t,e,s),(0,n.$Tr)(t,o,s)},p(t,o){1&o&&s!==(s=t[0]?"Close":"Open")&&(0,n.rTO)(e,s)},d(t){t&&((0,n.ogt)(e),(0,n.ogt)(o))}}}function j(t){let e;return{c(){e=(0,n.fLW)("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function E(t){let e,o,i,r,c,l,d,u,m,p;return l=new a.zx({props:{color:"danger",$$slots:{default:[U]},$$scope:{ctx:t}}}),l.$on("click",t[4]),u=new s.Z({props:{body:!0,theme:"dark",header:"It's Toasterific",isOpen:t[0],$$slots:{default:[j]},$$scope:{ctx:t}}}),u.$on("open",t[9]),u.$on("opening",t[10]),u.$on("closing",t[11]),u.$on("close",t[12]),{c(){e=(0,n.bGB)("div"),o=(0,n.bGB)("h5"),i=(0,n.fLW)("Current state: "),r=(0,n.fLW)(t[1]),c=(0,n.DhX)(),(0,n.YCL)(l.$$.fragment),d=(0,n.DhX)(),m=(0,n.bGB)("div"),(0,n.YCL)(u.$$.fragment),(0,n.czc)(m,"display","contents"),(0,n.czc)(m,"--bs-toast-color","#fff"),(0,n.Ljt)(e,"class","toast-events")},m(t,s){(0,n.$Tr)(t,e,s),(0,n.R3I)(e,o),(0,n.R3I)(o,i),(0,n.R3I)(o,r),(0,n.R3I)(e,c),(0,n.yef)(l,e,null),(0,n.R3I)(e,d),(0,n.R3I)(e,m),(0,n.yef)(u,m,null),p=!0},p(t,e){(!p||2&e)&&(0,n.rTO)(r,t[1]);const o={};524289&e&&(o.$$scope={dirty:e,ctx:t}),l.$set(o);const s={};1&e&&(s.isOpen=t[0]),524288&e&&(s.$$scope={dirty:e,ctx:t}),u.$set(s)},i(t){p||((0,n.Ui)(l.$$.fragment,t),(0,n.Ui)(u.$$.fragment,t),p=!0)},o(t){(0,n.etI)(l.$$.fragment,t),(0,n.etI)(u.$$.fragment,t),p=!1},d(t){t&&(0,n.ogt)(e),(0,n.vpE)(l),(0,n.vpE)(u)}}}function k(t){let e;return{c(){e=(0,n.fLW)("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function Y(t){let e;return{c(){e=(0,n.fLW)("Light Theme")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function D(t){let e;return{c(){e=(0,n.fLW)("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.")},m(t,o){(0,n.$Tr)(t,e,o)},d(t){t&&(0,n.ogt)(e)}}}function W(t){let e,o,s,i;return e=new a.WV({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),s=new a.Yo({props:{$$slots:{default:[D]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment)},m(t,a){(0,n.yef)(e,t,a),(0,n.$Tr)(t,o,a),(0,n.yef)(s,t,a),i=!0},p(t,o){const n={};524288&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const i={};524288&o&&(i.$$scope={dirty:o,ctx:t}),s.$set(i)},i(t){i||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),i=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),i=!1},d(t){t&&(0,n.ogt)(o),(0,n.vpE)(e,t),(0,n.vpE)(s,t)}}}function H(t){let e,o,i,a,r;return o=new s.Z({props:{body:!0,theme:"dark",header:"Dark Theme",style:"--bs-toast-color: #fff;",isOpen:!0,$$slots:{default:[k]},$$scope:{ctx:t}}}),a=new s.Z({props:{theme:"light",style:"--bs-toast-color: #000;",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){e=(0,n.bGB)("div"),(0,n.YCL)(o.$$.fragment),i=(0,n.DhX)(),(0,n.YCL)(a.$$.fragment),(0,n.Ljt)(e,"class","horizontal gap-lg toast-events")},m(t,s){(0,n.$Tr)(t,e,s),(0,n.yef)(o,e,null),(0,n.R3I)(e,i),(0,n.yef)(a,e,null),r=!0},p(t,e){const n={};524288&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const s={};524288&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){r||((0,n.Ui)(o.$$.fragment,t),(0,n.Ui)(a.$$.fragment,t),r=!0)},o(t){(0,n.etI)(o.$$.fragment,t),(0,n.etI)(a.$$.fragment,t),r=!1},d(t){t&&(0,n.ogt)(e),(0,n.vpE)(o),(0,n.vpE)(a)}}}function S(t){let e,o,s,a,r,c,l,d,m,p,$,f,g,h;return e=new i.YS({props:{$$slots:{default:[u,({args:t})=>({18:t}),({args:t})=>t?262144:0]},$$scope:{ctx:t}}}),s=new i.oG({props:{name:"Basic",source:t[7]}}),r=new i.oG({props:{name:"Icons",$$slots:{default:[v]},$$scope:{ctx:t}}}),l=new i.oG({props:{name:"Dismissible",$$slots:{default:[O]},$$scope:{ctx:t}}}),m=new i.oG({props:{name:"Autohide",$$slots:{default:[C]},$$scope:{ctx:t}}}),$=new i.oG({props:{name:"Events",$$slots:{default:[E]},$$scope:{ctx:t}}}),g=new i.oG({props:{name:"Theming",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){(0,n.YCL)(e.$$.fragment),o=(0,n.DhX)(),(0,n.YCL)(s.$$.fragment),a=(0,n.DhX)(),(0,n.YCL)(r.$$.fragment),c=(0,n.DhX)(),(0,n.YCL)(l.$$.fragment),d=(0,n.DhX)(),(0,n.YCL)(m.$$.fragment),p=(0,n.DhX)(),(0,n.YCL)($.$$.fragment),f=(0,n.DhX)(),(0,n.YCL)(g.$$.fragment)},m(t,i){(0,n.yef)(e,t,i),(0,n.$Tr)(t,o,i),(0,n.yef)(s,t,i),(0,n.$Tr)(t,a,i),(0,n.yef)(r,t,i),(0,n.$Tr)(t,c,i),(0,n.yef)(l,t,i),(0,n.$Tr)(t,d,i),(0,n.yef)(m,t,i),(0,n.$Tr)(t,p,i),(0,n.yef)($,t,i),(0,n.$Tr)(t,f,i),(0,n.yef)(g,t,i),h=!0},p(t,[o]){const n={};786432&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n);const s={};524288&o&&(s.$$scope={dirty:o,ctx:t}),r.$set(s);const i={};524289&o&&(i.$$scope={dirty:o,ctx:t}),l.$set(i);const a={};524293&o&&(a.$$scope={dirty:o,ctx:t}),m.$set(a);const c={};524291&o&&(c.$$scope={dirty:o,ctx:t}),$.$set(c);const d={};524288&o&&(d.$$scope={dirty:o,ctx:t}),g.$set(d)},i(t){h||((0,n.Ui)(e.$$.fragment,t),(0,n.Ui)(s.$$.fragment,t),(0,n.Ui)(r.$$.fragment,t),(0,n.Ui)(l.$$.fragment,t),(0,n.Ui)(m.$$.fragment,t),(0,n.Ui)($.$$.fragment,t),(0,n.Ui)(g.$$.fragment,t),h=!0)},o(t){(0,n.etI)(e.$$.fragment,t),(0,n.etI)(s.$$.fragment,t),(0,n.etI)(r.$$.fragment,t),(0,n.etI)(l.$$.fragment,t),(0,n.etI)(m.$$.fragment,t),(0,n.etI)($.$$.fragment,t),(0,n.etI)(g.$$.fragment,t),h=!1},d(t){t&&((0,n.ogt)(o),(0,n.ogt)(a),(0,n.ogt)(c),(0,n.ogt)(d),(0,n.ogt)(p),(0,n.ogt)(f)),(0,n.vpE)(e,t),(0,n.vpE)(s,t),(0,n.vpE)(r,t),(0,n.vpE)(l,t),(0,n.vpE)(m,t),(0,n.vpE)($,t),(0,n.vpE)(g,t)}}}const X={title:"Stories/Toast",component:s.Z,parameters:{controls:{exclude:/^(close|closing|default|open|opening)$/g}},argTypes:{color:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Color of the Toast background.",table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},class:{className:"string",table:{disable:!0}},autohide:{control:"boolean"},body:{control:"boolean"},delay:{control:"number"},duration:{control:"number"},fade:{control:"boolean"},header:{control:"text",table:{disable:!0}},isOpen:{control:"boolean"},theme:{control:{type:"select"},options:["dark","light","auto"],description:"The theme style to apply.",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}},toggle:{control:"null",table:{disable:!0}},"on:open":{control:!1,description:"This event is fired once the Toast has opened.",table:{category:"events",type:{summary:"Function"},defaultValue:{summary:"null"}}},"on:opening":{control:!1,description:"This event is fired immediately once open has been triggered.",table:{category:"events",type:{summary:"Function"},defaultValue:{summary:"null"}}},"on:close":{description:"This event is fired once the Toast has closed.",table:{category:"events",type:{summary:"Function"},defaultValue:{summary:"null"}}},"on:closing":{description:"This event is fired immediately once close has been triggered.",table:{category:"events",type:{summary:"Function"},defaultValue:{summary:"null"}}},"default ":{description:"This is the default content slot.",table:{category:"slots",type:{summary:"any"},defaultValue:{summary:"empty"}}}},args:{color:"primary",autohide:!1,body:!1,delay:5e3,duration:200,fade:!0,isOpen:!0}};function _(t,e,o){let n=!1,s="Closed",i=5,a=null;return[n,s,i,["primary","secondary","success","danger","warning","info","light","dark"],function(){o(0,n=!n)},function(){o(0,n=!0)},function(){o(0,n=!0),o(2,i=5),clearInterval(a),a=null,a=setInterval((()=>{i<=0?clearInterval(a):o(2,i--,i)}),1e3)},'\n<div class="p-3 bg-primary mb-3 rounded">\n  <Toast>\n    <ToastHeader>Sveltestrap</ToastHeader>\n    <ToastBody>\n      This is a toast on a primary background — check it out!\n    </ToastBody>\n  </Toast>\n</div>',()=>o(0,n=!1),()=>o(1,s="Opened"),()=>o(1,s="Opening..."),()=>o(1,s="Closing..."),()=>o(1,s="Closed")]}class G extends n.f_C{constructor(t){super(),(0,n.S1n)(this,t,_,S,n.N8,{})}}const{default:A}=o(5649),R=A(G,{meta:{title:"Stories/Toast"},stories:{"tpl:default":{name:"default",template:!0,source:'<div class="toast-width">\n  <div class="p-3 bg-{args.color} mb-3 rounded">\n    <Toast\n      {...args}\n      theme={args.theme || null}\n      style="--bs-toast-color: {args.theme === \'dark\' ? \'#fff\' : \'#111\'};"\n      class="me-1"\n    >\n      <ToastHeader>Sveltestrap</ToastHeader>\n      <ToastBody>\n        This is a toast on a {args.color} background — check it out!\n      </ToastBody>\n    </Toast>\n  </div>\n</div>',hasArgs:!0},Basic:{name:"Basic",template:!1,source:"",hasArgs:!1},Icons:{name:"Icons",template:!1,source:'<div class="columns">\n  {#each colors as color}\n    <div class="column">\n      <div class="p-2 mb-3">\n        <Toast class="me-1">\n          <ToastHeader icon={color}>{color}</ToastHeader>\n          <ToastBody>\n            This is a toast with a {color} icon.\n          </ToastBody>\n        </Toast>\n      </div>\n    </div>\n  {/each}\n\n  <div class="column">\n    <div class="p-2 mb-3">\n      <Toast class="me-1">\n        <ToastHeader>\n          <Icon slot="icon" name="emoji-sunglasses" class="me-2" />\n          Sveltestrap\n        </ToastHeader>\n        <ToastBody>This is a toast with a custom icon.</ToastBody>\n      </Toast>\n    </div>\n  </div>\n</div>',hasArgs:!1},Dismissible:{name:"Dismissible",template:!1,source:'<Toast {isOpen}>\n  <ToastHeader {toggle}>Toast title</ToastHeader>\n  <ToastBody>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </ToastBody>\n</Toast>\n\n{#if !isOpen}\n  <Button color="primary" on:click={reopen}>Show Toast</Button>\n{/if}',hasArgs:!1},Autohide:{name:"Autohide",template:!1,source:'<Button color="primary" on:click={startCount} disabled={isOpen}>Show Toast that autohides</Button>\n<Toast autohide body header="Autohides in {seconds} sec" {isOpen} on:close={() => (isOpen = false)}>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n</Toast>',hasArgs:!1},Events:{name:"Events",template:!1,source:"<div class=\"toast-events\">\n  <h5>Current state: {status}</h5>\n\n  <Button color=\"danger\" on:click={toggle}>{isOpen ? 'Close' : 'Open'} Toast</Button>\n\n  <Toast\n    body\n    theme=\"dark\"\n    header=\"It's Toasterific\"\n    --bs-toast-color=\"#fff\"\n    {isOpen}\n    on:open={() => (status = 'Opened')}\n    on:opening={() => (status = 'Opening...')}\n    on:closing={() => (status = 'Closing...')}\n    on:close={() => (status = 'Closed')}\n  >\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </Toast>\n</div>",hasArgs:!1},Theming:{name:"Theming",template:!1,source:'<div class="horizontal gap-lg toast-events">\n  <Toast body theme="dark" header="Dark Theme" style="--bs-toast-color: #fff;" isOpen={true}>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </Toast>\n\n  <Toast theme="light" style="--bs-toast-color: #000;">\n    <ToastHeader>Light Theme</ToastHeader>\n    <ToastBody>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat.\n    </ToastBody>\n  </Toast>\n</div>',hasArgs:!1}},allocatedIds:["default","Story","Template","Button","Icon","ToastBody","ToastHeader"]},X);e.default=R.meta;const Z=R.stories.Basic,z=R.stories.Icons,V=R.stories.Dismissible,N=R.stories.Autohide,F=R.stories.Events,P=R.stories.Theming},5624:function(t,e,o){"use strict";o.r(e),o(959);var n=o(1527),s=o(5519),i=o(5945),a=o(866);function r(t){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,s.ah)(),t.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h_,{title:"Components/Toast"}),"\n",(0,n.jsxs)(e.h1,{id:"toast-bootstrap-toast",children:["Toast ",(0,n.jsx)("small",{class:"bootstrap-docs",children:(0,n.jsx)(e.a,{href:"https://getbootstrap.com/docs/5.3/components/toasts/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Toast"})})]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"<Toast>"})," component is a user interface element designed to provide unobtrusive, temporary messages or notifications to users."]}),"\n",(0,n.jsx)(i.Xz,{children:(0,n.jsx)(i.oG,{of:a.Basic})}),"\n",(0,n.jsx)(i.ZX,{of:a.Basic}),"\n",(0,n.jsx)(e.h2,{id:"icons",children:"Icons"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:a.Icons})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Icon, Toast, ToastBody, ToastHeader } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<div>\n  {#each colors as color}\n    <div class="p-3 mb-3">\n      <Toast class="me-1">\n        <ToastHeader icon={color}>{color}</ToastHeader>\n        <ToastBody>\n          This is a toast with a {color} icon.\n        </ToastBody>\n      </Toast>\n    </div>\n  {/each}\n</div>\n\n<div class="p-3 mb-3">\n  <Toast class="me-1">\n    <ToastHeader>\n      <Icon slot="icon" name="emoji-sunglasses" class="me-2" />\n      Sveltestrap\n    </ToastHeader>\n    <ToastBody>This is a toast with a custom icon.</ToastBody>\n  </Toast>\n</div>\n'}),"\n",(0,n.jsx)(e.h2,{id:"dismissible",children:"Dismissible"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:a.Dismissible})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Toast, ToastBody, ToastHeader } from \'@sveltestrap/sveltestrap\';\n\n  let isOpen = false;\n\n  function toggle() {\n    isOpen = !isOpen;\n  }\n\n  function reopen() {\n    isOpen = true;\n  }\n<\/script>\n\n<Toast {isOpen}>\n  <ToastHeader {toggle}>Toast title</ToastHeader>\n  <ToastBody>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </ToastBody>\n</Toast>\n{#if !isOpen}\n  <Button color="primary" on:click={reopen}>Show Toast</Button>\n{/if}\n'}),"\n",(0,n.jsx)(e.h2,{id:"autohide",children:"Autohide"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:a.Autohide})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Button, Toast } from \'@sveltestrap/sveltestrap\';\n\n  let isOpen = false;\n<\/script>\n\n<Button color="primary" on:click={() => (isOpen = true)} disabled={isOpen}>\n  Show Toast that autohides\n</Button>\n\n<Toast autohide body header="Autohides after 5 sec" {isOpen} on:close={() => (isOpen = false)}>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n</Toast>\n'}),"\n",(0,n.jsx)(e.h2,{id:"events",children:"Events"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:a.Events})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:"\n<script lang=\"ts\">\n  import { Button, Toast } from '@sveltestrap/sveltestrap';\n\n  let isOpen = false;\n  let status = 'Closed';\n\n  function toggle() {\n    isOpen = !isOpen;\n  }\n<\/script>\n\n<h5>Current state: {status}</h5>\n\n<Button color=\"danger\" on:click={toggle}>{isOpen ? 'Close' : 'Open'} Toast</Button>\n\n<Toast\n  body\n  header=\"It's Toasterific\"\n  {isOpen}\n  on:open={() => (status = 'Opened')}\n  on:opening={() => (status = 'Opening...')}\n  on:closing={() => (status = 'Closing...')}\n  on:close={() => (status = 'Closed')}\n>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  consequat.\n</Toast>\n"}),"\n",(0,n.jsx)(e.h2,{id:"theming",children:"Theming"}),"\n",(0,n.jsx)(i.Xz,{withSource:"none",children:(0,n.jsx)(i.oG,{of:a.Theming})}),"\n",(0,n.jsx)(i.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Toast } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Toast\n  body\n  theme="dark"\n  header="Dark Theme"\n  style="--bs-toast-color: #fff;"\n  isOpen={true}\n>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  consequat.\n</Toast>\n\n<Toast theme="light" style="--bs-toast-color: #000;">\n  <ToastHeader>Light Theme</ToastHeader>\n  <ToastBody>\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n  </ToastBody>\n</Toast>\n'})]})}e.default=function(t={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,n.jsx)(e,Object.assign({},t,{children:(0,n.jsx)(r,t)})):r(t)}},8039:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=8039,t.exports=e},3354:function(t,e,o){"use strict";var n=o(959),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,o){var n,i={},l=null,d=null;for(n in void 0!==o&&(l=""+o),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,n)&&!c.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===i[n]&&(i[n]=e[n]);return{$$typeof:s,type:t,key:l,ref:d,props:i,_owner:r.current}}e.Fragment=i,e.jsx=l,e.jsxs=l},1527:function(t,e,o){"use strict";t.exports=o(3354)}}]);