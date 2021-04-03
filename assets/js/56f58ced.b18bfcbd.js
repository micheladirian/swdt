(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(110)),i={title:"Postman"},s={unversionedId:"tools/postman",id:"tools/postman",isDocsHomePage:!1,title:"Postman",description:"Send requests, inspect the response, and easily debug. - postman.com",source:"@site/docs/tools/postman.md",slug:"/tools/postman",permalink:"/swdt/docs/tools/postman",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/tools/postman.md",version:"current",sidebar:"docs",previous:{title:"cURL",permalink:"/swdt/docs/tools/curl"},next:{title:"Docker",permalink:"/swdt/docs/tools/docker"}},c=[{value:"Use",id:"use",children:[]},{value:"Newman",id:"newman",children:[]},{value:"Install",id:"install",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"Postman \ud83d\udc9e cURL",id:"postman--curl",children:[]},{value:"Other formats",id:"other-formats",children:[]},{value:"Alternatives",id:"alternatives",children:[{value:"VSCode REST Client",id:"vscode-rest-client",children:[]},{value:"IntelliJ HTTP Client",id:"intellij-http-client",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Send requests, inspect the response, and easily debug. - ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",{parentName:"em",href:"https://www.postman.com/product/api-client/"},"postman.com")))),Object(o.b)("p",null,"\ud83d\udd17 ",Object(o.b)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman")),Object(o.b)("h2",{id:"use"},"Use"),Object(o.b)("p",null,"It is basically ",Object(o.b)("a",{parentName:"p",href:"curl"},"cURL")," with an UI. Of course this is not true, Postman offers a variety of services and extended tooling around that you can not find in CURL. But the part we use, the Client with some requests, this is comparable to cURL with an UI. Two key characteristic of Postman over cURL are that you can manage request collections neatly in folders. This is very practical for our lectures and also in your daily-business to sort, store and share requests. Read more on Postman on their ",Object(o.b)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/introduction/"},"official docs"),". Also you can import and export code snippets raw to and from Postman which is also very handy."),Object(o.b)("h2",{id:"newman"},"Newman"),Object(o.b)("p",null,"Postman has a Command Line Runner called ",Object(o.b)("a",{parentName:"p",href:"https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/"},"newman")," where you can run a Postman Collection from the command line."),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"For our second tool, I only drop some breadcrumbs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.postman.com/downloads/"},"https://www.postman.com/downloads/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://formulae.brew.sh/cask/postman"},"brew")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://winget.run/pkg/Postman/Postman"},"winget"))),Object(o.b)("h2",{id:"get-started"},"Get started"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/sending-the-first-request/"},"Sending your first request")),Object(o.b)("h2",{id:"postman--curl"},"Postman \ud83d\udc9e cURL"),Object(o.b)("p",null,"This is the best part (and I like it so much I need to use more emojis)! You can import requests from cURL to Postman and also export requests as cURL \ud83e\udd2f"),Object(o.b)("p",null,"The \ud83c\udf52 is that you can also export from any browser matching cURLs and import them to Postman or execute them with cURL \ud83d\udca5\ud83c\udf89"),Object(o.b)("p",null,"Try this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("a",{parentName:"li",href:"https://nds-swe.github.io/swdt/"},"nds-swe.github.io")," in your browser"),Object(o.b)("li",{parentName:"ol"},"Open the developer tools, switch to the network tab, refresh (to get the entry in the list) and copy out the cURL request - here is ",Object(o.b)("a",{parentName:"li",href:"https://techtldr.com/copy-any-api-call-as-curl-request-with-chrome-developer-tools/"},"a guide")),Object(o.b)("li",{parentName:"ol"},"Paste the cURL in the command line and run"),Object(o.b)("li",{parentName:"ol"},"Open Postman, click Import then ",Object(o.b)("inlineCode",{parentName:"li"},"raw"),", paste the cURL and run")),Object(o.b)("p",null,"Crazy stuff! \ud83d\ude0d"),Object(o.b)("h2",{id:"other-formats"},"Other formats"),Object(o.b)("p",null,"Postman can not only export cURL but also compost code for many other languages, check their ",Object(o.b)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/"},"export feature"),"."),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://insomnia.rest/download"},"Insomnia"))),Object(o.b)("h3",{id:"vscode-rest-client"},"VSCode REST Client"),Object(o.b)("p",null,"Recently I came across ",Object(o.b)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=humao.rest-client"},"REST Client")," and will soon convert this paragraph into an own article and recommend Postman only as alternative for one main reason - they offer a native VSCode integration with the capability to just place a ",Object(o.b)("inlineCode",{parentName:"p"},".rest")," file in your repository and be ready to go. This is ",Object(o.b)("a",{parentName:"p",href:"/docs/theory/principles#as-a-code"},Object(o.b)("inlineCode",{parentName:"a"},"As A Code"))," made simple!"),Object(o.b)("h3",{id:"intellij-http-client"},"IntelliJ HTTP Client"),Object(o.b)("p",null,"Sadly its part of the ",Object(o.b)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/features/editions_comparison_matrix.html"},"Ultimate Edition")," but in case you have one of these, you can find an inbuilt ",Object(o.b)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html"},"HTTP client")," like the one for VSCode also in IntelliJ."))}p.isMDXComponent=!0}}]);