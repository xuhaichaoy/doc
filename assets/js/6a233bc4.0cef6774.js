"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[910],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?t.createElement(g,c(c({ref:n},u),{},{components:r})):t.createElement(g,c({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2540:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},assets:function(){return u},toc:function(){return p},default:function(){return f}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],s={},l=void 0,i={permalink:"/doc/blog/2021/11/29/\u8f93\u51fa",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-29-\u8f93\u51fa.mdx",source:"@site/blog\\2021-11-29-\u8f93\u51fa.mdx",title:"\u8f93\u51fa",description:"",date:"2021-11-29T00:00:00.000Z",formattedDate:"November 29, 2021",tags:[],readingTime:1.145,truncated:!1,authors:[],prevItem:{title:"React",permalink:"/doc/blog/2021/12/08/React"},nextItem:{title:"EventLoop",permalink:"/doc/blog/2021/11/28/EventLoop"}},u={authorsImageUrls:[]},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var a = 20;\n\nfunction bar() {\n  console.log(a);\n}\n\nfunction foo(fn) {\n  var a = 10;\n  fn();\n}\n\nfoo(bar);\n\n// \u7b54\u6848: 20\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function bar() {\n  var a = 20;\n  return function () {\n    console.log(a); // 20\n  };\n}\n\nvar foo = bar();\nvar a = 10;\nfoo();\n\n// \u7b54\u6848: 20\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var a = 20;\n\nfunction bar() {\n  console.log(a);\n  var a = 10;\n  console.log(a);\n}\nbar();\n\n// \u7b54\u6848: undefined 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var a = { name: "Sam" };\nvar b = { name: "Tom" };\nvar o = {};\no[a] = 1;\no[b] = 2;\nconsole.log(o[a]);\n// 2\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const promise1 = Promise.resolve("First");\nconst promise2 = Promise.resolve("Second");\nconst promise3 = Promise.reject("Third");\nconst promise4 = Promise.resolve("Fourth");\nconst runPromises = async () => {\n  const res1 = await Promise.all([promise1, promise2]);\n  const res2 = await Promise.all([promise3, promise4]);\n  return [res1, res2];\n};\nrunPromises()\n  .then((res) => console.log(res))\n  .catch((err) => console.log(err));\n\n// Third\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class A {\n  static a = 1; // \u9759\u6001\u5c5e\u6027\n  b = 2; // \u81ea\u6709\u5c5e\u6027\n  fn() {} // \u539f\u578b\u94fe\u65b9\u6cd5\n  f = () => {}; // \u81ea\u6709\u65b9\u6cd5\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'class A {\n  constructor() {\n    console.log(this)\n    console.log(this.name);\n  }\n}\nclass B extends A {\n  constructor() {\n    super();\n    console.log(this)\n    this.name = "B";\n  }\n}\nconst b = new B();\n\n// undefined  B{}\n')))}f.isMDXComponent=!0}}]);