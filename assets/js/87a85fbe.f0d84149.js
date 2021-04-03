(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(v,i(i({ref:t},p),{},{components:n})):o.a.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(108)),s={title:"DevOps"},i={unversionedId:"theory/devops",id:"theory/devops",isDocsHomePage:!1,title:"DevOps",description:"DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. - wikipedia",source:"@site/docs/theory/devops.md",slug:"/theory/devops",permalink:"/swdt/docs/theory/devops",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/theory/devops.md",version:"current",sidebar:"docs",previous:{title:"Guiding Thread",permalink:"/swdt/docs/guiding-thread"},next:{title:"Principles",permalink:"/swdt/docs/theory/principles"}},c=[{value:"DevOps vs DevSecOps",id:"devops-vs-devsecops",children:[]},{value:"Resources",id:"resources",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. - ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/DevOps"},"wikipedia")))),Object(a.b)("p",null,"Development and Operations in one engineer is the dream of many companies. Some have achieved this, some are striving towards it. Nowadays no one wants an isolated code geek that does not talk to the outside world and worst case even works unintentionally against them."),Object(a.b)("p",null,"Read the ",Object(a.b)("a",{parentName:"p",href:"#resources"},"resources")," to learn more about DevOps and what it means."),Object(a.b)("h2",{id:"devops-vs-devsecops"},"DevOps vs DevSecOps"),Object(a.b)("p",null,"Historically the term ",Object(a.b)("em",{parentName:"p"},"Sec")," is often left away but I am on no terms trying to neglect the security aspect of engineering, it is just more common to write DevOps only. If I write DevOps, DevSecOps is implied."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://aws.amazon.com/devops/what-is-devops/"},"Amazon Web Services")," - What is DevOps?"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.atlassian.com/devops/what-is-devops"},"Atlassian")," - Abundant resource on DevOps with Solutions and best practices")))}l.isMDXComponent=!0}}]);