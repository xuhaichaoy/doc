"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[444],{240:function(n,e,o){o.r(e),o.d(e,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return i},assets:function(){return m},toc:function(){return p},default:function(){return g}});var s=o(7462),t=o(3366),c=(o(7294),o(3905)),l=["components"],r={},a=void 0,i={permalink:"/doc/blog/2021/11/28/EventLoop",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-28-EventLoop.mdx",source:"@site/blog/2021-11-28-EventLoop.mdx",title:"EventLoop",description:"\u5e38\u89c1\u9898 \u4e00",date:"2021-11-28T00:00:00.000Z",formattedDate:"November 28, 2021",tags:[],readingTime:3.05,truncated:!1,authors:[],prevItem:{title:"\u8f93\u51fa",permalink:"/doc/blog/2021/11/29/\u8f93\u51fa"},nextItem:{title:"Algorithm",permalink:"/doc/blog/2021/11/22/Algorithm"}},m={authorsImageUrls:[]},p=[],u={toc:p};function g(n){var e=n.components,o=(0,t.Z)(n,l);return(0,c.kt)("wrapper",(0,s.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(function () {\n  // \u5b9a\u65f6\u5668 \u5b8f\u4efb\u52a1\n  console.log(1);\n}, 0);\n\nnew Promise(function executor(resolve) {\n  console.log(2);\n  for (var i = 0; i < 10000; i++) {\n    resolve(); // \u5fae\u4efb\u52a1\n  }\n  console.log(3);\n}).then(function () {\n  console.log(4);\n});\n\nconsole.log(5);\n\n// \u7b54\u6848: 2 3 5 4 1\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const promise = new Promise((resolve, reject) => {\n  console.log(1);\n  resolve(5); // \u5fae\u4efb\u52a1\n  console.log(2);\n}).then((res) => {\n  console.log(res); // 1.1\n});\n\npromise.then(() => {\n  console.log(3); // 1.2 \u5fae\u4efb\u52a1\n});\n\nconsole.log(4);\n\nsetTimeout(() => {\n  console.log(6); // \u5b8f\u4efb\u52a1\n});\n\n// \u7b54\u6848: 1 2 4 5 3 6\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u5e38\u89c1\u9898 \u4e00")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1  1.1\n}\n\nasync function async2() {\n  console.log("async2 start");\n}\n\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1\n}, 0);\n\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n})\n  .then(function () {\n    console.log("promise2"); // \u5fae\u4efb\u52a1\n  })\n  .then(function () {\n    console.log("promise3"); // \u5fae\u4efb\u52a1\n  });\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start   async1 start  async2 start  promise1\n// script end  async1 end  promise2  promise3  setTimeout\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e00")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1 1.2\n}\nasync function async2() {\n  //async2\u505a\u51fa\u5982\u4e0b\u66f4\u6539\uff1a\n  new Promise(function (resolve) {\n    console.log("promise1");\n    resolve();\n  }).then(function () {\n    console.log("promise2"); // \u5fae\u4efb\u52a1 1.1\n  });\n}\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise3");\n  resolve();\n}).then(function () {\n  console.log("promise4"); // \u5fae\u4efb\u52a1 1.3\n});\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start  async1 start  promise1 promise3  script end\n// promise2  async1 end  promise4  setTimeout\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e8c")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'async function async1() {\n  console.log("async1 start");\n  await async2();\n  //\u66f4\u6539\u5982\u4e0b\uff1a\n  setTimeout(function () {\n    console.log("setTimeout1"); // \u5b8f\u4efb\u52a1 2.3\n  }, 0);\n}\nasync function async2() {\n  //\u66f4\u6539\u5982\u4e0b\uff1a\n  setTimeout(function () {\n    console.log("setTimeout2"); // \u5b8f\u4efb\u52a1 2.2\n  }, 0);\n}\nconsole.log("script start"); //\n\nsetTimeout(function () {\n  console.log("setTimeout3"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n}).then(function () {\n  console.log("promise2"); //\u5fae\u4efb\u52a1\n});\nconsole.log("script end");\n\n// \u7b54\u6848: script start  async1 start promise1  script end promise2\n// setTimeout3  setTimeout2  setTimeout1\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53d8\u5f0f\u4e09")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'async function a1() {\n  console.log("a1 start");\n  await a2();\n  console.log("a1 end"); // \u5fae\u4efb\u52a1 1.2\n}\nasync function a2() {\n  console.log("a2");\n}\n\nconsole.log("script start");\n\nsetTimeout(() => {\n  console.log("setTimeout"); // \u5b8f\u4efb\u52a1 2.1\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("promise1"); // \u5fae\u4efb\u52a1 1.1\n});\n\na1();\n\nlet promise2 = new Promise((resolve) => {\n  resolve("promise2.then"); // \u5fae\u4efb\u52a1  1.3\n  console.log("promise2");\n});\n\npromise2.then((res) => {\n  console.log(res);\n  Promise.resolve().then(() => {\n    console.log("promise3");\n  });\n});\nconsole.log("script end");\n\n// \u7b54\u6848: script start  a1 start a2 promise2  script end\n// promise1  a1 end promise2.then promise3  setTimeout\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},'// \u5934\u6761 \u9762\u8bd5\u9898\nasync function async1() {\n  console.log("async1 start");\n  await async2();\n  console.log("async1 end"); // \u5fae\u4efb\u52a1 1.1\n}\n\nasync function async2() {\n  console.log("async2");\n}\n\nconsole.log("script start");\n\nsetTimeout(function () {\n  console.log("settimeout");\n});\n\nasync1();\n\nnew Promise(function (resolve) {\n  console.log("promise1");\n  resolve();\n}).then(function () {\n  console.log("promise2"); // \u5fae\u4efb\u52a1 1.2\n});\n\nconsole.log("script end");\n\n// \u7b54\u6848: script start   async1 start  async2 promise1 script end\n// async1 end  promise2 settimeout\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"setImmediate(() => {\n  console.log(1);\n  setTimeout(() => {\n    console.log(2);\n  }, 100);\n  setImmediate(() => {\n    console.log(3);\n  });\n  process.nextTick(() => {\n    console.log(4);\n  });\n});\nprocess.nextTick(() => {\n  console.log(5);\n  setTimeout(() => {\n    console.log(6);\n  }, 100);\n  setImmediate(() => {\n    console.log(7);\n  });\n  process.nextTick(() => {\n    console.log(8);\n  });\n});\nconsole.log(9); // 1\n\n// \u7b54\u6848: 9 5 8 1 7 4 3 6 2\n")))}g.isMDXComponent=!0}}]);