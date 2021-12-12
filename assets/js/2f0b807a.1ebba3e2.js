"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[856],{3905:function(n,e,o){o.d(e,{Zo:function(){return p},kt:function(){return g}});var t=o(7294);function s(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function c(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){s(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function l(n,e){if(null==n)return{};var o,t,s=function(n,e){if(null==n)return{};var o,t,s={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(s[o]=n[o]);return s}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(s[o]=n[o])}return s}var a=t.createContext({}),i=function(n){var e=t.useContext(a),o=e;return n&&(o="function"==typeof n?n(e):c(c({},e),n)),o},p=function(n){var e=i(n.components);return t.createElement(a.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var o=n.components,s=n.mdxType,r=n.originalType,a=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=i(o),g=s,f=m["".concat(a,".").concat(g)]||m[g]||u[g]||r;return o?t.createElement(f,c(c({ref:e},p),{},{components:o})):t.createElement(f,c({ref:e},p))}));function g(n,e){var o=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var r=o.length,c=new Array(r);c[0]=m;var l={};for(var a in e)hasOwnProperty.call(e,a)&&(l[a]=e[a]);l.originalType=n,l.mdxType="string"==typeof n?n:s,c[1]=l;for(var i=2;i<r;i++)c[i]=o[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},496:function(n,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var t=o(7462),s=o(3366),r=(o(7294),o(3905)),c=["components"],l={},a=void 0,i={unversionedId:"tutorial-basics/EventLoop",id:"tutorial-basics/EventLoop",isDocsHomePage:!1,title:"EventLoop",description:"\u5e38\u89c1\u9898 \u4e00",source:"@site/docs/tutorial-basics/EventLoop.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/EventLoop",permalink:"/doc/docs/tutorial-basics/EventLoop",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/EventLoop.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Electron",permalink:"/doc/docs/tutorial-basics/Electron"},next:{title:"Interview",permalink:"/doc/docs/tutorial-basics/Interview"}},p=[],u={toc:p};function m(n){var e=n.components,o=(0,s.Z)(n,c);return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(function () {\n  // \u5b9a\u65f6\u5668 \u5b8f\u4efb\u52a1\n  console.log(1);\n}, 0);\n\nnew Promise(function executor(resolve) {\n  console.log(2);\n  for (var i = 0; i < 10000; i++) {\n    resolve(); // \u5fae\u4efb\u52a1\n  }\n  console.log(3);\n}).then(function () {\n  console.log(4);\n});\n\nconsole.log(5);\n\n// \u7b54\u6848: 2 3 5 4 1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n  console.log(1);\n  resolve(5); // \u5fae\u4efb\u52a1\n  console.log(2);\n}).then((res) => {\n  console.log(res); // 1.1\n});\n\npromise.then(() => {\n  console.log(3); // 1.2 \u5fae\u4efb\u52a1\n});\n\nconsole.log(4);\n\nsetTimeout(() => {\n  console.log(6); // \u5b8f\u4efb\u52a1\n});\n\n// \u7b54\u6848: 1 2 4 5 3 6\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u9898 \u4e00")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1  1.1\n}\n\nasync function async2() {\n  console.log("async2 start");\n}\n\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1\n}, 0);\n\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n})\n  .then(function () {\n    console.log("promise2"); // \u5fae\u4efb\u52a1\n  })\n  .then(function () {\n    console.log("promise3"); // \u5fae\u4efb\u52a1\n  });\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start   async1 start  async2 start  promise1\n// script end  async1 end  promise2  promise3  setTimeout\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e00")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1 1.2\n}\nasync function async2() {\n  //async2\u505a\u51fa\u5982\u4e0b\u66f4\u6539\uff1a\n  new Promise(function (resolve) {\n    console.log("promise1");\n    resolve();\n  }).then(function () {\n    console.log("promise2"); // \u5fae\u4efb\u52a1 1.1\n  });\n}\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise3");\n  resolve();\n}).then(function () {\n  console.log("promise4"); // \u5fae\u4efb\u52a1 1.3\n});\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start  async1 start  promise1 promise3  script end\n// promise2  async1 end  promise4  setTimeout\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e8c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  //\u66f4\u6539\u5982\u4e0b\uff1a\n  setTimeout(function () {\n    console.log("setTimeout1"); // \u5b8f\u4efb\u52a1 2.3\n  }, 0);\n}\nasync function async2() {\n  //\u66f4\u6539\u5982\u4e0b\uff1a\n  setTimeout(function () {\n    console.log("setTimeout2"); // \u5b8f\u4efb\u52a1 2.2\n  }, 0);\n}\nconsole.log("script start"); //\n\nsetTimeout(function () {\n  console.log("setTimeout3"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n}).then(function () {\n  console.log("promise2"); //\u5fae\u4efb\u52a1\n});\nconsole.log("script end");\n\n// \u7b54\u6848: script start  async1 start promise1  script end promise2\n// setTimeout3  setTimeout2  setTimeout1\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function a1() {\n  console.log("a1 start");\n  await a2();\n  console.log("a1 end"); // \u5fae\u4efb\u52a1 1.2\n}\nasync function a2() {\n  console.log("a2");\n}\n\nconsole.log("script start");\n\nsetTimeout(() => {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("promise1"); // \u5fae\u4efb\u52a1 1.1\n});\n\na1();\n\nlet promise2 = new Promise((resolve) => {\n  resolve("promise2.then"); // \u5fae\u4efb\u52a1  1.3\n  console.log("promise2");\n});\n\npromise2.then((res) => {\n  console.log(res);\n  Promise.resolve().then(() => {\n    console.log("promise3");\n  });\n});\nconsole.log("script end");\n\n// \u7b54\u6848: script start  a1 start a2 promise2  script end\n// promise1  a1 end promise2.then promise3  setTimeout\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u5934\u6761 \u9762\u8bd5\u9898\nasync function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1 1.1\n}\n\nasync function async2() {\n  console.log("async2");\n}\n\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("settimeout");\n});\n\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n}).then(function () {\n  console.log("promise2"); // \u5fae\u4efb\u52a1 1.2\n});\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start   async1 start  async2 promise1 script end\n// async1 end  promise2 settimeout\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setImmediate(() => {\n  console.log(1);\n  setTimeout(() => {\n    console.log(2);\n  }, 100);\n  setImmediate(() => {\n    console.log(3);\n  });\n  process.nextTick(() => {\n    console.log(4);\n  });\n});\nprocess.nextTick(() => {\n  console.log(5);\n  setTimeout(() => {\n    console.log(6);\n  }, 100);\n  setImmediate(() => {\n    console.log(7);\n  });\n  process.nextTick(() => {\n    console.log(8);\n  });\n});\nconsole.log(9); // 1\n\n// \u7b54\u6848: 9 5 8 1 7 4 3 6 2\n")))}m.isMDXComponent=!0}}]);