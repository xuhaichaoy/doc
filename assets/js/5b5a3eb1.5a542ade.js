"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(n),c=a,d=k["".concat(i,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),p=["components"],o={},i=void 0,u={unversionedId:"tutorial-basics/Vue",id:"tutorial-basics/Vue",isDocsHomePage:!1,title:"Vue",description:"\u5982\u4f55\u5f00\u53d1 Vue \u63d2\u4ef6",source:"@site/docs/tutorial-basics/Vue.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Vue",permalink:"/doc/docs/tutorial-basics/Vue",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/Vue.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/doc/docs/tutorial-basics/React"},next:{title:"\u8f93\u51fa",permalink:"/doc/docs/tutorial-basics/\u8f93\u51fa"}},s=[],m={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5f00\u53d1 Vue \u63d2\u4ef6"),"\nVue.use(Plugin)\u6ce8\u518c\u63d2\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5f15\u81ea\u5b98\u65b9api\nVue.use(Plugin);\n\n// \u53c2\u6570: {Object | Function} Plugin\n\n// \u7528\u6cd5:\n// 1. \u5b89\u88c5 Vue.js \u63d2\u4ef6, \u5982\u679c\u63d2\u4ef6\u662f\u4e00\u4e2a\u5bf9\u8c61, \u5fc5\u987b\u63d0\u4f9b install \u65b9\u6cd5.\n// 2. \u5982\u679c\u63d2\u4ef6\u662f\u4e00\u4e2a\u51fd\u6570, \u5b83\u4f1a\u88ab\u89c6\u4e3a install \u65b9\u6cd5.\n// 3. install \u65b9\u6cd5\u8c03\u7528\u65f6, \u4f1a\u5c06 Vue \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165.\n\n// \u8be5\u65b9\u6cd5\u9700\u8981\u5728\u8c03\u7528 new Vue() \u4e4b\u524d\u88ab\u8c03\u7528.\n// \u5f53 install \u65b9\u6cd5\u88ab\u540c\u4e00\u4e2a\u63d2\u4ef6\u591a\u6b21\u8c03\u7528, \u63d2\u4ef6\u5c06\u53ea\u4f1a\u88ab\u5b89\u88c5\u4e00\u6b21.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue",metastring:'title="button.vue"',title:'"button.vue"'},'<template>\n  <button><slot></slot></button>\n</template>\n\n<script>\nexport default {\n  name: "CreateButton",\n};\n<\/script>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="plugins/button/index.js"',title:'"plugins/button/index.js"'},'import CreateButton from "./index";\n\nCreateButton.install = function (Vue) {\n  Vue.component(CreateButton.name, CreateButton);\n};\n\nexport default CreateButton;\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import Vue from "vue";\nimport App from "./App.vue";\nimport CreateButton from "./plugins/button/index.js";\n\nVue.use(CreateButton);\n\nnew Vue({\n  render: (h) => h(App),\n}).$mount("#app");\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <CreateButton>button</CreateButton>\n</template>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vue-router \u6838\u5fc3\u539f\u7406")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ec0\u4e48\u662f\u524d\u7aef\u8def\u7531\n\u5728 Web \u524d\u7aef\u5355\u9875\u5e94\u7528 SPA \u4e2d, \u8def\u7531\u662f URL \u4e0e UI \u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb, \u8fd9\u79cd\u6620\u5c04\u662f\u5355\u5411\u7684, \u5373 URL \u53d8\u5316\u5f15\u8d77 UI \u53d8\u5316.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5b9e\u73b0?\n\u6539\u53d8 URL \u9875\u9762\u4e0d\u5237\u65b0\n\u5982\u4f55\u68c0\u6d4b URL \u53d8\u5316"))),(0,l.kt)("p",null,"hash \u5b9e\u73b0: hash \u662f URL \u4e2d#\u53ca\u540e\u9762\u7684\u90e8\u5206,\u6539\u53d8 URL \u4e2d\u7684 hash \u4e0d\u4f1a\u5f15\u8d77\u9875\u9762\u5237\u65b0"),(0,l.kt)("p",null,"\u901a\u8fc7 hashchange \u76d1\u542c URL \u53d8\u5316, \u6539\u53d8 URL \u65b9\u5f0f\u6709"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u524d\u8fdb\u540e\u9000"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"<a>"),"\u6807\u7b7e\u6539\u53d8 URL"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 window.location \u6539\u53d8 URL")),(0,l.kt)("p",null,"history \u5b9e\u73b0: history \u63d0\u4f9b\u4e86 pushState \u548c replaceState \u4e24\u4e2a\u65b9\u6cd5, \u6539\u53d8 URL path \u4e0d\u4f1a\u5237\u65b0\u9875\u9762\nhistory \u63d0\u4f9b\u7c7b\u4f3c hashchange \u4e8b\u4ef6 popstate \u4e8b\u4ef6,"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6d4f\u89c8\u5668\u524d\u8fdb\u540e\u9000\u6539\u53d8 URL \u4f1a\u89e6\u53d1 popstate"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 pushState \u548c replaceState \u6216",(0,l.kt)("inlineCode",{parentName:"li"},"<a>"),"\u4e0d\u4f1a\u89e6\u53d1 popstate"),(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u53ef\u4ee5\u62e6\u622a\u4e0a\u8ff0\u51fd\u6570\u7684\u8c03\u7528\u548c",(0,l.kt)("inlineCode",{parentName:"li"},"<a>"),"\u7684\u70b9\u51fb\u6765\u68c0\u6d4b url \u53d8\u5316"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 js \u8c03\u7528 history go back forward \u89e6\u53d1\u4e8b\u4ef6")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"EventBus \u5b9e\u73b0\u539f\u7406")),(0,l.kt)("p",null,"EventBus \u5b9e\u9645\u4e0a\u5c31\u662f\u901a\u8fc7\u5b9e\u4f8b\u5316\u4e00\u4e2a Vue \u5b9e\u4f8b, \u7136\u540e\u901a\u8fc7\u8be5\u5b9e\u4f8b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"$emit")," \u65b9\u6cd5\u53d1\u9001\u6570\u636e\u6d88\u606f\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"$on")," \u65b9\u6cd5\u63a5\u6536\u6570\u636e\u6d88\u606f.\n\u9700\u8981\u5728\u751f\u547d\u5468\u671f\u5185\u76d1\u542c, \u5168\u5c40\u6302\u8f7d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"v-model \u5b9e\u73b0")),(0,l.kt)("p",null,"\u53ea\u8981\u5728\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u901a\u8fc7\u8bbe\u7f6e\u4e00\u4e2a\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"prop"),"\uff0c\u5e76\u4e14\u5728\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6 ",(0,l.kt)("inlineCode",{parentName:"p"},"$emit")," \u4e00\u4e2a\u5e26\u65b0\u503c\u7684 input \u4e8b\u4ef6\uff0c\n\u5c31\u53ef\u4ee5\u5728\u8be5\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\u4f7f\u7528 v-model \u8fdb\u884c\u53cc\u5411\u7ed1\u5b9a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Proxy \u548c defineProperty \u533a\u522b,\u6027\u80fd")),(0,l.kt)("p",null,"Proxy \u53ef\u4ee5\u76f4\u63a5\u76d1\u542c\u5bf9\u8c61\u548c\u6570\u7ec4\u7684\u53d8\u5316"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Keep-alive \u539f\u7406")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"keep-alive"),"\u662f Vue \u4e00\u4e2a\u5185\u7f6e\u7ec4\u4ef6. \u5b83\u80fd\u591f\u5c06\u4e0d\u6d3b\u52a8\u7684\u7ec4\u4ef6\u5b9e\u4f8b\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d, \u800c\u4e0d\u662f\u5c06\u5176\u9500\u6bc1,\n\u662f\u4e00\u4e2a\u62bd\u8c61\u7684\u7ec4\u4ef6, \u4e0d\u4f1a\u6e32\u67d3\u5230\u771f\u5b9e\u7684 dom \u4e2d, \u4e5f\u4e0d\u4f1a\u51fa\u73b0\u5728\u7236\u7ec4\u4ef6\u4e2d.\n\u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"include")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"exclude")," \u4e24\u4e2a\u5c5e\u6027, \u5141\u8bb8\u6709\u6761\u4ef6\u8fdb\u884c\u7f13\u5b58."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MVC \u548c MVVM \u533a\u522b")),(0,l.kt)("p",null,"MVC: Model View Controller , Controller \u5c06 model \u6570\u636e\u7528 View \u663e\u793a\u51fa\u6765. \u5728 Controller \u91cc\u9762\u628a Model \u7684\u6570\u636e\u8d4b\u503c\u7ed9 View."),(0,l.kt)("p",null,"MVVM: VM \u5c42, \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," \u8f6c\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"view"),", \u6570\u636e\u7ed1\u5b9a. \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"view")," \u8f6c\u5316\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," DOM \u4e8b\u4ef6\u76d1\u542c."),(0,l.kt)("p",null,"\u533a\u522b\u662f: view \u548c model \u81ea\u52a8\u540c\u6b65."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48 data \u662f\u4e00\u4e2a\u51fd\u6570")),(0,l.kt)("p",null,"\u7ec4\u4ef6\u4e2d\u7684 data \u5199\u6210\u4e00\u4e2a\u51fd\u6570, \u6570\u636e\u4ee5\u51fd\u6570\u8fd4\u56de\u503c\u5f62\u5f0f\u5b9a\u4e49,\u8fd9\u6837\u6bcf\u590d\u7528\u4e00\u6b21\u7ec4\u4ef6,\n\u5c31\u4f1a\u8fd4\u56de\u4e00\u4efd\u65b0\u7684 data,\u7c7b\u4f3c\u4e8e\u7ed9\u6bcf\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u521b\u5efa\u4e00\u4e2a\u79c1\u6709\u7684\u6570\u636e\u7a7a\u95f4,\u8ba9\u5404\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u7ef4\u62a4\u5404\u81ea\u7684\u6570\u636e."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vue \u7ec4\u4ef6\u901a\u4fe1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"props \u548c $emit"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},"$parent \u548c $children"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},"\u7236\u7ec4\u4ef6 provide \u63d0\u4f9b\u53d8\u91cf, \u5b50\u7ec4\u4ef6\u901a\u8fc7 inject \u6ce8\u5165\u53d8\u91cf."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},"$refs \u83b7\u53d6\u7ec4\u4ef6\u5b9e\u4f8b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:5},(0,l.kt)("li",{parentName:"ol"},"$attr \u548c $listeners A->B->C"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:6},(0,l.kt)("li",{parentName:"ol"},"EventBus \u5144\u5f1f\u7ec4\u4ef6"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ol",{parentName:"li",start:7},(0,l.kt)("li",{parentName:"ol"},"Vuex")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"v-if \u548c v-for \u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u4e00\u8d77\u4f7f\u7528")),(0,l.kt)("p",null,"\u56e0\u4e3a\u89e3\u6790\u5148\u89e3\u6790 v-for \u5728\u89e3\u6790 v-if. \u5982\u679c\u8981\u4f7f\u7528\u8003\u8651\u5199\u6210\u8ba1\u7b97\u5c5e\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"v-for \u4e3a\u4ec0\u4e48\u8981\u52a0 key")),(0,l.kt)("p",null,"key \u662f Vue \u4e2d vnode \u4e2d\u552f\u4e00\u6807\u8bb0, \u901a\u8fc7 key, diff \u64cd\u4f5c\u53ef\u4ee5\u66f4\u51c6\u786e, \u5e26 key \u5c31\u4e0d\u662f\u5c31\u5730\u590d\u7528\u4e86"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vue2.0 \u54cd\u5e94\u5f0f\u6570\u636e\u539f\u7406")),(0,l.kt)("p",null,"\u6574\u4f53\u601d\u8def\u5c31\u662f\u6570\u636e\u52ab\u6301\u548c\u89c2\u5bdf\u8005\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5bf9\u8c61\u5185\u90e8\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineReactive")," \u65b9\u6cd5, \u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineProperty")," \u5c06\u5c5e\u6027\u8fdb\u884c\u52ab\u6301(\u53ea\u4f1a\u52ab\u6301\u5df2\u7ecf\u5b58\u5728\u7684\u5c5e\u6027),\n\u6570\u7ec4\u5219\u662f\u901a\u8fc7\u91cd\u5199\u6570\u7ec4\u65b9\u6cd5\u6765\u5b9e\u73b0. \u5f53\u9875\u9762\u4f7f\u7528\u5bf9\u5e94\u5c5e\u6027\u65f6, \u6bcf\u4e2a\u5c5e\u6027\u90fd\u62e5\u6709\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"dep")," \u5c5e\u6027,\n\u5b58\u653e\u5b83\u6240\u4f9d\u8d56\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"watcher")," (\u4f9d\u8d56\u6536\u96c6), \u5f53\u5c5e\u6027\u53d8\u5316\u540e\u4f1a\u901a\u77e5\u81ea\u5df1\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"watcher")," \u4f1a\u66f4\u65b0 (\u6d3e\u53d1\u66f4\u65b0)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vue \u5982\u4f55\u68c0\u6d4b\u6570\u7ec4\u53d8\u5316")),(0,l.kt)("p",null,"\u6570\u7ec4\u8003\u8651\u6027\u80fd\u6ca1\u6709\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"defineProperty")," \u5bf9\u6bcf\u4e00\u9879\u8fdb\u884c\u62e6\u622a, \u800c\u662f\u5bf9\u6570\u7ec4\u7684 7 \u4e2a\u65b9\u6cd5\u91cd\u5199\n(push, shift, pop, splice, unshift, sort, reverse)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vue \u4e8b\u4ef6\u7ed1\u5b9a\u539f\u7406")),(0,l.kt)("p",null,"\u539f\u751f\u4e8b\u4ef6\u7ed1\u5b9a\u662f\u901a\u8fc7 addEventListener \u7ed1\u5b9a\u771f\u5b9e\u5143\u7d20, \u7ec4\u4ef6\u4e8b\u4ef6\u7ed1\u5b9a\u662f\u901a\u8fc7 Vue \u81ea\u5b9a\u4e49 $on \u5b9e\u73b0, \u7ec4\u4ef6\u4e0a\u4f7f\u7528\u539f\u751f\u4e8b\u4ef6 \u9700\u8981\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},".native"),","),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Vuex \u4e2a\u4eba\u7406\u89e3")),(0,l.kt)("p",null,"\u4e13\u95e8\u4e3a vue \u63d0\u4f9b\u7684\u5168\u5c40\u72b6\u6001\u7ba1\u7406\u7cfb\u7edf, \u7528\u4e8e\u591a\u4e2a\u7ec4\u4ef6\u4e2d \u6570\u636e\u5171\u4eab, \u6570\u636e\u7f13\u5b58. (\u65e0\u6cd5\u6301\u4e45\u5316, \u5185\u90e8\u6838\u5fc3\u539f\u7406\u5c31\u662f\u901a\u8fc7\u521b\u9020\u4e00\u4e2a\u5168\u5c40\u5b9e\u4f8b new Vue)"))}k.isMDXComponent=!0}}]);