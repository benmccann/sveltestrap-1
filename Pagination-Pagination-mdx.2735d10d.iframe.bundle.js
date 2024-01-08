/*! For license information please see Pagination-Pagination-mdx.2735d10d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sveltestrap_sveltestrap=self.webpackChunk_sveltestrap_sveltestrap||[]).push([[2641],{5519:function(n,i,t){"use strict";t.d(i,{NF:function(){return o},Zo:function(){return g},ah:function(){return r},pC:function(){return e}});var a=t(959);const e=a.createContext({});function o(n){return function(i){const t=r(i.components);return a.createElement(n,{...i,allComponents:t})}}function r(n){const i=a.useContext(e);return a.useMemo((()=>"function"==typeof n?n(i):{...i,...n}),[i,n])}const s={};function g({components:n,children:i,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||s:r(n),a.createElement(e.Provider,{value:o},i)}},5089:function(n,i,t){"use strict";t.r(i),t(959);var a=t(1527),e=t(5519),o=t(5945),r=t(1796);function s(n){const i=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h2:"h2"},(0,e.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h_,{title:"Components/Pagination"}),"\n",(0,a.jsxs)(i.h1,{id:"pagination-bootstrap-pagination",children:["Pagination ",(0,a.jsx)("small",{class:"bootstrap-docs",children:(0,a.jsx)(i.a,{href:"https://getbootstrap.com/docs/5.3/components/pagination/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bootstrap Pagination"})})]}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"<Pagination>"})," component is used to enhance navigation within a set of content, breaking it into manageable segments. It enables users to easily traverse through multiple pages of information, promoting a streamlined and accessible browsing experience."]}),"\n",(0,a.jsx)(o.Xz,{children:(0,a.jsx)(o.oG,{of:r.Basic})}),"\n",(0,a.jsx)(o.ZX,{of:r.Basic}),"\n",(0,a.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,a.jsxs)(i.p,{children:["You can change the ",(0,a.jsx)(i.code,{children:"Pagination"})," size by setting the ",(0,a.jsx)(i.code,{children:"size"})," prop to ",(0,a.jsx)(i.code,{children:"sm"})," or ",(0,a.jsx)(i.code,{children:"lg"}),"."]}),"\n",(0,a.jsx)(o.Xz,{withSource:"none",children:(0,a.jsx)(o.oG,{of:r.Sizes})}),"\n",(0,a.jsx)(o.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Pagination, PaginationItem, PaginationLink } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Pagination size="lg" ariaLabel="Page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>\n'}),"\n",(0,a.jsx)(i.h2,{id:"theming",children:"Theming"}),"\n",(0,a.jsx)(o.Xz,{withSource:"none",children:(0,a.jsx)(o.oG,{of:r.Theming})}),"\n",(0,a.jsx)(o.Hw,{dark:!0,language:"html",code:'\n<script lang="ts">\n  import { Pagination, PaginationItem, PaginationLink } from \'@sveltestrap/sveltestrap\';\n<\/script>\n\n<Pagination theme="dark" ariaLabel="Dark page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>\n\n<Pagination theme="light" ariaLabel="Light page navigation example">\n  <PaginationItem>\n    <PaginationLink first href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink previous href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">1</PaginationLink>\n  </PaginationItem>\n  <PaginationItem active>\n    <PaginationLink href="#">2</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">3</PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink next href="#" />\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink last href="#" />\n  </PaginationItem>\n</Pagination>\n'})]})}i.default=function(n={}){const{wrapper:i}=Object.assign({},(0,e.ah)(),n.components);return i?(0,a.jsx)(i,Object.assign({},n,{children:(0,a.jsx)(s,n)})):s(n)}},8039:function(n){function i(n){var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}i.keys=function(){return[]},i.resolve=i,i.id=8039,n.exports=i},3354:function(n,i,t){"use strict";var a=t(959),e=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function c(n,i,t){var a,o={},c=null,P=null;for(a in void 0!==t&&(c=""+t),void 0!==i.key&&(c=""+i.key),void 0!==i.ref&&(P=i.ref),i)r.call(i,a)&&!g.hasOwnProperty(a)&&(o[a]=i[a]);if(n&&n.defaultProps)for(a in i=n.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:e,type:n,key:c,ref:P,props:o,_owner:s.current}}i.Fragment=o,i.jsx=c,i.jsxs=c},1527:function(n,i,t){"use strict";n.exports=t(3354)}}]);