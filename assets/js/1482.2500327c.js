(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1482],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(n),d=o,m=y["".concat(c,".").concat(d)]||y[d]||p[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9649:function(e,t,n){"use strict";n.d(t,{N:function(){return y},Z:function(){return d}});var r=n(3366),o=n(7462),a=n(7294),l=n(6010),i=n(5999),c=n(2822),s="anchorWithStickyNavbar_y2LR",u="anchorWithHideOnScrollNavbar_3ly5",p=["id"],y=function(e){var t=Object.assign({},e);return a.createElement("header",null,a.createElement("h1",(0,o.Z)({},t,{id:void 0}),t.children))},d=function(e){return"h1"===e?y:(t=e,function(e){var n,y=e.id,d=(0,r.Z)(e,p),m=(0,c.LU)().navbar.hideOnScroll;return y?a.createElement(t,(0,o.Z)({},d,{className:(0,l.Z)("anchor",(n={},n[u]=m,n[s]=!m,n)),id:y}),d.children,a.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+y,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,d)});var t}},1914:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(7462),o=n(3366),a=n(7294),l=n(2859),i=n(9960),c=n(6010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(7410).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=y({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=y({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=y({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?y({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(i))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=y({},g(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?y({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,i=[],c=[i];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=f(u,p.type),p.alias&&(u=f(u,p.alias)),s=p.content),"string"==typeof s){var y=s.split(d),h=y.length;i.push({types:u,content:y[0]});for(var g=1;g<h;g++)m(i),c.push(i=[]),i.push({types:u,content:y[g]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return m(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=v;var k=n(7594),j=n.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(5350),T=n(2822),x=function(){var e=(0,T.LU)().prism,t=(0,O.Z)().isDarkTheme,n=e.theme||E,r=e.darkTheme||n;return t?r:n},Z=n(5999),N="codeBlockContainer_J+bg",P="codeBlockContent_csEI",w="codeBlockTitle_oQzk",C="codeBlock_rtdJ",S="copyButton_M3SB",L="codeBlockLines_1zSZ",B=/{([\d,-]+)}/,D=["js","jsBlock","jsx","python","html"],_={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},A=["highlight-next-line","highlight-start","highlight-end"],I=function(e){void 0===e&&(e=D);var t=e.map((function(e){var t=_[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+A.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function z(e){var t=e.children,n=e.className,o=e.metastring,l=e.title,i=(0,T.LU)().prism,s=(0,a.useState)(!1),p=s[0],y=s[1],d=(0,a.useState)(!1),m=d[0],f=d[1];(0,a.useEffect)((function(){f(!0)}),[]);var h=(0,T.bc)(o)||l,g=(0,a.useRef)(null),v=[],k=x(),E=Array.isArray(t)?t.join(""):t;if(o&&B.test(o)){var O=o.match(B)[1];v=j()(O).filter((function(e){return e>0}))}var D=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),_=null==D?void 0:D.replace(/language-/,"");!_&&i.defaultLanguage&&(_=i.defaultLanguage);var A=E.replace(/\n$/,"");if(0===v.length&&void 0!==_){for(var z,R="",F=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return I(["js","jsBlock"]);case"jsx":case"tsx":return I(["js","jsBlock","jsx"]);case"html":return I(["js","jsBlock","html"]);case"python":case"py":return I(["python"]);default:return I()}}(_),$=E.replace(/\n$/,"").split("\n"),V=0;V<$.length;){var W=V+1,U=$[V].match(F);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=W+",";break;case"highlight-start":z=W;break;case"highlight-end":R+=z+"-"+(W-1)+","}$.splice(V,1)}else V+=1}v=j()(R),A=$.join("\n")}var J=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(A),y(!0),setTimeout((function(){return y(!1)}),2e3)};return a.createElement(b,(0,r.Z)({},u,{key:String(m),theme:k,code:A,language:_}),(function(e){var t=e.className,o=e.style,l=e.tokens,i=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,c.Z)(N,null==n?void 0:n.replace(/language-[^ ]+/,""))},h&&a.createElement("div",{style:o,className:w},h),a.createElement("div",{className:(0,c.Z)(P,_)},a.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,C,"thin-scrollbar"),style:o},a.createElement("code",{className:L},l.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{ref:g,type:"button","aria-label":(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(S,"clean-btn"),onClick:J},p?a.createElement(Z.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(Z.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var R=n(9649),F="details_h+cY";function $(e){var t=Object.assign({},e);return a.createElement(T.PO,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",F,t.className)}))}var V=["mdxType","originalType"];var W={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,V));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(z,e):a.createElement("code",e)},a:function(e){return a.createElement(i.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(n)&&(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:a.createElement(z,(0,a.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement($,(0,r.Z)({},e,{summary:n}),o)},h1:(0,R.Z)("h1"),h2:(0,R.Z)("h2"),h3:(0,R.Z)("h3"),h4:(0,R.Z)("h4"),h5:(0,R.Z)("h5"),h6:(0,R.Z)("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);