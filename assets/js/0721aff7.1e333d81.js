(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return E}));var r=a(0),s=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var D=s.a.createContext({}),C=function(e){var t=s.a.useContext(D),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=C(e.components);return s.a.createElement(D.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=s.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,D=o(e,["components","mdxType","originalType","parentName"]),c=C(a),h=r,E=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?s.a.createElement(E,n(n({ref:t},D),{},{components:a})):s.a.createElement(E,n({ref:t},D))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:r,l[1]=n;for(var D=2;D<i;D++)l[D]=a[D];return s.a.createElement.apply(null,l)}return s.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return n})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return C}));var r=a(3),s=a(7),i=(a(0),a(112)),l={title:"Continuous Integration"},n={unversionedId:"techniques/continuous-integration",id:"techniques/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"Never before was CI so simple as it is today thanks to GitHub Actions.",source:"@site/docs/techniques/continuous-integration.md",slug:"/techniques/continuous-integration",permalink:"/swdt/docs/techniques/continuous-integration",editUrl:"https://github.com/nds-swe/swdt/edit/main/docs/techniques/continuous-integration.md",version:"current",sidebar:"docs",previous:{title:"Principles",permalink:"/swdt/docs/theory/principles"},next:{title:"cURL",permalink:"/swdt/docs/tools/curl"}},o=[],D={toc:o};function C(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},D,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Never before was CI so simple as it is today thanks to ",Object(i.b)("a",{parentName:"p",href:"/docs/tools/github-actions"},"GitHub Actions"),"."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"I do not get paid by GitHub, Actions are just \ud83d\ude0d\ud83e\udd29 They make your life so much easier (as you will learn)!"))),Object(i.b)("p",null,"There are hundreds if not thousands of articles around Continuous Integration and its surroundings. In the end we can boil it down to a simple process."),Object(i.b)("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20id%3D%22mermaid-1618131347001%22%20width%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20height%3D%22701.7249755859375%22%20style%3D%22max-width%3A%201207.9593505859375px%3B%22%20viewBox%3D%220%200%201207.9593505859375%20701.7249755859375%22%3E%3Cstyle%3E%23mermaid-1618131347001%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3Bfill%3A%23333%3B%7D%23mermaid-1618131347001%20.error-icon%7Bfill%3A%23552222%3B%7D%23mermaid-1618131347001%20.error-text%7Bfill%3A%23552222%3Bstroke%3A%23552222%3B%7D%23mermaid-1618131347001%20.edge-thickness-normal%7Bstroke-width%3A2px%3B%7D%23mermaid-1618131347001%20.edge-thickness-thick%7Bstroke-width%3A3.5px%3B%7D%23mermaid-1618131347001%20.edge-pattern-solid%7Bstroke-dasharray%3A0%3B%7D%23mermaid-1618131347001%20.edge-pattern-dashed%7Bstroke-dasharray%3A3%3B%7D%23mermaid-1618131347001%20.edge-pattern-dotted%7Bstroke-dasharray%3A2%3B%7D%23mermaid-1618131347001%20.marker%7Bfill%3A%23333333%3Bstroke%3A%23333333%3B%7D%23mermaid-1618131347001%20.marker.cross%7Bstroke%3A%23333333%3B%7D%23mermaid-1618131347001%20svg%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A16px%3B%7D%23mermaid-1618131347001%20.label%7Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bcolor%3A%23333%3B%7D%23mermaid-1618131347001%20.cluster-label%20text%7Bfill%3A%23333%3B%7D%23mermaid-1618131347001%20.cluster-label%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1618131347001%20.label%20text%2C%23mermaid-1618131347001%20span%7Bfill%3A%23333%3Bcolor%3A%23333%3B%7D%23mermaid-1618131347001%20.node%20rect%2C%23mermaid-1618131347001%20.node%20circle%2C%23mermaid-1618131347001%20.node%20ellipse%2C%23mermaid-1618131347001%20.node%20polygon%2C%23mermaid-1618131347001%20.node%20path%7Bfill%3A%23ECECFF%3Bstroke%3A%239370DB%3Bstroke-width%3A1px%3B%7D%23mermaid-1618131347001%20.node%20.label%7Btext-align%3Acenter%3B%7D%23mermaid-1618131347001%20.node.clickable%7Bcursor%3Apointer%3B%7D%23mermaid-1618131347001%20.arrowheadPath%7Bfill%3A%23333333%3B%7D%23mermaid-1618131347001%20.edgePath%20.path%7Bstroke%3A%23333333%3Bstroke-width%3A1.5px%3B%7D%23mermaid-1618131347001%20.flowchart-link%7Bstroke%3A%23333333%3Bfill%3Anone%3B%7D%23mermaid-1618131347001%20.edgeLabel%7Bbackground-color%3A%23e8e8e8%3Btext-align%3Acenter%3B%7D%23mermaid-1618131347001%20.edgeLabel%20rect%7Bopacity%3A0.5%3Bbackground-color%3A%23e8e8e8%3Bfill%3A%23e8e8e8%3B%7D%23mermaid-1618131347001%20.cluster%20rect%7Bfill%3A%23ffffde%3Bstroke%3A%23aaaa33%3Bstroke-width%3A1px%3B%7D%23mermaid-1618131347001%20.cluster%20text%7Bfill%3A%23333%3B%7D%23mermaid-1618131347001%20.cluster%20span%7Bcolor%3A%23333%3B%7D%23mermaid-1618131347001%20div.mermaidTooltip%7Bposition%3Aabsolute%3Btext-align%3Acenter%3Bmax-width%3A200px%3Bpadding%3A2px%3Bfont-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3Bfont-size%3A12px%3Bbackground%3Ahsl(80%2C100%25%2C96.2745098039%25)%3Bborder%3A1px%20solid%20%23aaaa33%3Bborder-radius%3A2px%3Bpointer-events%3Anone%3Bz-index%3A100%3B%7D%23mermaid-1618131347001%3Aroot%7B--mermaid-font-family%3A%22trebuchet%20ms%22%2Cverdana%2Carial%2Csans-serif%3B%7D%23mermaid-1618131347001%20flowchart%7Bfill%3Aapa%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%20class%3D%22output%22%3E%3Cg%20class%3D%22clusters%22%3E%3Cg%20class%3D%22cluster%22%20id%3D%22flowchart-CI-78%22%20transform%3D%22translate(603.9796905517578%2C374.890625)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20width%3D%221191.9593811035156%22%20height%3D%22284%22%20x%3D%22-595.9796905517578%22%20y%3D%22-142%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C%20-128)%22%20id%3D%22mermaid-1618131347001Text%22%3E%3Cg%20transform%3D%22translate(-8%2C-9)%22%3E%3CforeignObject%20width%3D%2216%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ECI%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePaths%22%3E%3Cg%20class%3D%22edgePath%20LS-change%20LE-branch%22%20id%3D%22L-change-branch%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M222.890625%2C102.9453125L247.890625%2C102.9453125L280.9015655517578%2C102.9453125%22%20marker-end%3D%22url(%23arrowhead98)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead98%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-branch%20LE-changes%22%20id%3D%22L-branch-changes%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M406.7140655517578%2C102.9453125L478.8500061035156%2C102.9453125L551.8578186035156%2C111.36684761497824%22%20marker-end%3D%22url(%23arrowhead99)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead99%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-changes%20LE-testLocally%22%20id%3D%22L-changes-testLocally%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M657.2484436035156%2C117.4453125L691.1312561035156%2C117.4453125L716.1312561035156%2C117.4453125%22%20marker-end%3D%22url(%23arrowhead100)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead100%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-testLocally%20LE-push%22%20id%3D%22L-testLocally-push%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M814.3812561035156%2C117.4453125L839.3812561035156%2C117.4453125L864.3812561035156%2C117.4453125%22%20marker-end%3D%22url(%23arrowhead101)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead101%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-push%20LE-unitTests%22%20id%3D%22L-push-unitTests%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M915.8556894940403%2C136.4453125L839.3812561035156%2C293.890625L765.2562561035156%2C293.890625L691.1312561035156%2C293.890625L604.5531311035156%2C293.890625L478.8500061035156%2C293.890625L343.8078155517578%2C293.890625L247.890625%2C293.890625L173.515625%2C304.4318872940142%22%20marker-end%3D%22url(%23arrowhead102)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead102%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-push%20LE-scan%22%20id%3D%22L-push-scan%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M935.7659779876442%2C136.4453125L1010.7875061035156%2C269.890625L1057.5687561035156%2C278.2986534133146%22%20marker-end%3D%22url(%23arrowhead103)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead103%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-push%20LE-coverage%22%20id%3D%22L-push-coverage%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M932.3718885333258%2C136.4453125L1010.7875061035156%2C340.890625L1052.5165961770451%2C355.890625%22%20marker-end%3D%22url(%23arrowhead104)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead104%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-push%20LE-more%22%20id%3D%22L-push-more%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M930.312776939462%2C136.4453125L1010.7875061035156%2C428.890625L1052.5165961770451%2C443.890625%22%20marker-end%3D%22url(%23arrowhead105)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead105%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-unitTests%20LE-result%22%20id%3D%22L-unitTests-result%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M156.0806327160494%2C329.890625L247.890625%2C391.890625L323.4955070385053%2C573.2029304614947%22%20marker-end%3D%22url(%23arrowhead106)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead106%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-scan%20LE-result%22%20id%3D%22L-scan-result%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M1057.5687561035156%2C304.0745681733708L1010.7875061035156%2C320.890625L925.0843811035156%2C320.890625L839.3812561035156%2C320.890625L765.2562561035156%2C320.890625L691.1312561035156%2C320.890625L604.5531311035156%2C320.890625L478.8500061035156%2C320.890625L366.2247551162181%2C574.3075676162182%22%20marker-end%3D%22url(%23arrowhead107)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead107%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-coverage%20LE-result%22%20id%3D%22L-coverage-result%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M1052.5165961770451%2C393.890625L1010.7875061035156%2C408.890625L925.0843811035156%2C408.890625L839.3812561035156%2C408.890625L765.2562561035156%2C408.890625L691.1312561035156%2C408.890625L604.5531311035156%2C408.890625L478.8500061035156%2C408.890625L371.75173271336246%2C579.8345452133626%22%20marker-end%3D%22url(%23arrowhead108)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead108%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-more%20LE-result%22%20id%3D%22L-more-result%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M1042.9046936035156%2C474.11817930742546L1010.7875061035156%2C479.890625L925.0843811035156%2C479.890625L839.3812561035156%2C479.890625L765.2562561035156%2C479.890625L691.1312561035156%2C479.890625L604.5531311035156%2C479.890625L478.8500061035156%2C479.890625L378.76181494457984%2C586.84462744458%22%20marker-end%3D%22url(%23arrowhead109)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead109%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-result%20LE-changes%22%20id%3D%22L-result-changes%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M360.541570868272%2C568.6243833682722L478.8500061035156%2C167.91796875L557.2332642201475%2C136.4453125%22%20marker-end%3D%22url(%23arrowhead110)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead110%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3Cg%20class%3D%22edgePath%20LS-result%20LE-merge%22%20id%3D%22L-result-merge%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpath%20class%3D%22path%22%20d%3D%22M412.85476436657706%2C620.9375768665774L478.8500061035156%2C618.1382827758789L542.9750061035156%2C618.1382827758789%22%20marker-end%3D%22url(%23arrowhead111)%22%20style%3D%22fill%3Anone%22%3E%3C%2Fpath%3E%3Cdefs%3E%3Cmarker%20id%3D%22arrowhead111%22%20viewBox%3D%220%200%2010%2010%22%20refX%3D%229%22%20refY%3D%225%22%20markerUnits%3D%22strokeWidth%22%20markerWidth%3D%228%22%20markerHeight%3D%226%22%20orient%3D%22auto%22%3E%3Cpath%20d%3D%22M%200%200%20L%2010%205%20L%200%2010%20z%22%20class%3D%22arrowheadPath%22%20style%3D%22stroke-width%3A%201%3B%20stroke-dasharray%3A%201%2C%200%3B%22%3E%3C%2Fpath%3E%3C%2Fmarker%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabels%22%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-change-branch%22%20class%3D%22edgeLabel%20L-LS-change'%20L-LE-branch%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-branch-changes%22%20class%3D%22edgeLabel%20L-LS-branch'%20L-LE-changes%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-changes-testLocally%22%20class%3D%22edgeLabel%20L-LS-changes'%20L-LE-testLocally%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-testLocally-push%22%20class%3D%22edgeLabel%20L-LS-testLocally'%20L-LE-push%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-push-unitTests%22%20class%3D%22edgeLabel%20L-LS-push'%20L-LE-unitTests%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-push-scan%22%20class%3D%22edgeLabel%20L-LS-push'%20L-LE-scan%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-push-coverage%22%20class%3D%22edgeLabel%20L-LS-push'%20L-LE-coverage%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-push-more%22%20class%3D%22edgeLabel%20L-LS-push'%20L-LE-more%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-unitTests-result%22%20class%3D%22edgeLabel%20L-LS-unitTests'%20L-LE-result%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-scan-result%22%20class%3D%22edgeLabel%20L-LS-scan'%20L-LE-result%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-coverage-result%22%20class%3D%22edgeLabel%20L-LS-coverage'%20L-LE-result%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(0%2C0)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%220%22%20height%3D%220%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%220%22%20height%3D%220%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-more-result%22%20class%3D%22edgeLabel%20L-LS-more'%20L-LE-result%22%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(478.8500061035156%2C167.91796875)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-25.3515625%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%2250.703125%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%2250.703125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-result-changes%22%20class%3D%22edgeLabel%20L-LS-result'%20L-LE-changes%22%3Eany%20fail%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22edgeLabel%22%20transform%3D%22translate(478.8500061035156%2C618.1382827758789)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cg%20transform%3D%22translate(-39.125%2C-9)%22%20class%3D%22label%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20width%3D%2278.25%22%20height%3D%2218%22%3E%3C%2Frect%3E%3CforeignObject%20width%3D%2278.25%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3E%3Cspan%20id%3D%22L-L-result-merge%22%20class%3D%22edgeLabel%20L-LS-result'%20L-LE-merge%22%3Eall%20success%3C%2Fspan%3E%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22nodes%22%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-unitTests-53%22%20transform%3D%22translate(127.9453125%2C310.890625)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-45.5703125%22%20y%3D%22-19%22%20width%3D%2291.140625%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-35.5703125%2C-9)%22%3E%3CforeignObject%20width%3D%2271.140625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ERun%20Tests%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-scan-55%22%20transform%3D%22translate(1105.3734436035156%2C286.890625)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-47.8046875%22%20y%3D%22-19%22%20width%3D%2295.609375%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-37.8046875%2C-9)%22%3E%3CforeignObject%20width%3D%2275.609375%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EScan%20code%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-coverage-57%22%20transform%3D%22translate(1105.3734436035156%2C374.890625)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-69.5859375%22%20y%3D%22-19%22%20width%3D%22139.171875%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-59.5859375%2C-9)%22%3E%3CforeignObject%20width%3D%22119.171875%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ECollect%20coverage%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-more-59%22%20transform%3D%22translate(1105.3734436035156%2C462.890625)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-62.46875%22%20y%3D%22-19%22%20width%3D%22124.9375%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-52.46875%2C-9)%22%3E%3CforeignObject%20width%3D%22104.9375%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3Emore%20actions...%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-change-39%22%20transform%3D%22translate(127.9453125%2C102.9453125)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Ccircle%20x%3D%22-94.9453125%22%20y%3D%22-19%22%20r%3D%2294.9453125%22%20class%3D%22label-container%22%3E%3C%2Fcircle%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-84.9453125%2C-9)%22%3E%3CforeignObject%20width%3D%22169.890625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ENeed%20to%20make%20a%20change%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-branch-40%22%20transform%3D%22translate(343.8078155517578%2C102.9453125)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-62.90625%22%20y%3D%22-19%22%20width%3D%22125.8125%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-52.90625%2C-9)%22%3E%3CforeignObject%20width%3D%22105.8125%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EBranch%20or%20Fork%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-changes-43%22%20transform%3D%22translate(604.5531311035156%2C117.4453125)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-52.6953125%22%20y%3D%22-19%22%20width%3D%22105.390625%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-42.6953125%2C-9)%22%3E%3CforeignObject%20width%3D%2285.390625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EDo%20changes%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-testLocally-46%22%20transform%3D%22translate(765.2562561035156%2C117.4453125)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-49.125%22%20y%3D%22-19%22%20width%3D%2298.25%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-39.125%2C-9)%22%3E%3CforeignObject%20width%3D%2278.25%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ETest%20locally%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-push-49%22%20transform%3D%22translate(925.0843811035156%2C117.4453125)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Crect%20rx%3D%220%22%20ry%3D%220%22%20x%3D%22-60.703125%22%20y%3D%22-19%22%20width%3D%22121.40625%22%20height%3D%2238%22%20class%3D%22label-container%22%3E%3C%2Frect%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-50.703125%2C-9)%22%3E%3CforeignObject%20width%3D%22101.40625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EPush%20changes%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-result-64%22%20transform%3D%22translate(343.8078155517578%2C622.8078155517578)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Cpolygon%20points%3D%2270.9171875%2C0%20141.834375%2C-70.9171875%2070.9171875%2C-141.834375%200%2C-70.9171875%22%20transform%3D%22translate(-70.9171875%2C70.9171875)%22%20class%3D%22label-container%22%3E%3C%2Fpolygon%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-49.796875%2C-9)%22%3E%3CforeignObject%20width%3D%2299.59375%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3ESuccess%2FFail%3F%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22node%20default%22%20id%3D%22flowchart-merge-75%22%20transform%3D%22translate(604.5531311035156%2C618.1382827758789)%22%20style%3D%22opacity%3A%201%3B%22%3E%3Ccircle%20x%3D%22-61.578125%22%20y%3D%22-19%22%20r%3D%2261.578125%22%20class%3D%22label-container%22%3E%3C%2Fcircle%3E%3Cg%20class%3D%22label%22%20transform%3D%22translate(0%2C0)%22%3E%3Cg%20transform%3D%22translate(-51.578125%2C-9)%22%3E%3CforeignObject%20width%3D%22103.15625%22%20height%3D%2218%22%3E%3Cdiv%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%22%20style%3D%22display%3A%20inline-block%3B%20white-space%3A%20nowrap%3B%22%3EMerge%20to%20trunk%3C%2Fdiv%3E%3C%2FforeignObject%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",title:"Diagram generated via mermaid"}),Object(i.b)("p",null,"The diagram is not yet looking too great, sadly there is ",Object(i.b)("a",{parentName:"p",href:"https://github.com/mermaid-js/mermaid/issues/1265"},"no direction support yet")," in sub-graphs \ud83d\ude0a"),Object(i.b)("p",null,"One can see in the yellow subgraph that we do check our new change with various steps if it is indeed ready to be merged to the ",Object(i.b)("inlineCode",{parentName:"p"},"trunk")," (the trunk is the main branch of our work - what gets deployed to production)."),Object(i.b)("p",null,"We use ",Object(i.b)("a",{parentName:"p",href:"/docs/tools/github-actions"},"GitHub Actions")," to transfer this technique into practice."))}C.isMDXComponent=!0}}]);