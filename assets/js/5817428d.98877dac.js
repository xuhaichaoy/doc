"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[130],{6996:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Nuxt",p={permalink:"/doc/blog/2021/11/22/Nuxt",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-22-Nuxt.mdx",source:"@site/blog/2021-11-22-Nuxt.mdx",title:"Nuxt",description:"\u9879\u76ee\u6280\u672f nuxt, composition-api",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[],readingTime:4.69,truncated:!1,authors:[],prevItem:{title:"Interview",permalink:"/doc/blog/2021/11/22/Interview"},nextItem:{title:"Welcome",permalink:"/doc/blog/welcome"}},m={authorsImageUrls:[]},d=[{value:"\u7ec4\u4ef6\u4f20\u53c2:",id:"\u7ec4\u4ef6\u4f20\u53c2",children:[],level:4},{value:"\u9996\u9875\u52a0\u8f7d\u4f18\u5316:",id:"\u9996\u9875\u52a0\u8f7d\u4f18\u5316",children:[],level:4}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6280\u672f nuxt, composition-api"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://m.66rpg.com/mini"},"M \u7ad9\u5730\u5740")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u524d\u8a00")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e3a\u4ec0\u4e48\u91c7\u7528 composition-api, \u56e0\u4e3a composition-api \u662f Vue \u4e0b\u4e00\u4e2a\u7248\u672c\u6700\u5e38\u7528\u7684\u8bed\u6cd5,\u4e00\u4e2a\u5168\u65b0\u7684\u903b\u8f91\u91cd\u7528\u548c\u4ee3\u7801\u7ec4\u7ec7\u65b9\u6cd5."),(0,r.kt)("p",{parentName:"div"},"\u4ee3\u7801\u66f4\u6613\u8bfb, \u5199\u6cd5\u66f4\u8212\u670d."))),(0,r.kt)("p",null,"\u76ee\u6807\u662f\u4e3a\u4e86\u5f00\u53d1\u65b9\u4fbf\u5e76\u4e14\u4fbf\u4e8e\u751f\u4ea7\u73af\u5883\u6d4b\u8bd5\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730 test debug main \u73af\u5883"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883 test debug main \u73af\u5883")),(0,r.kt)("p",null,"\u9700\u8981\u533a\u5206\u73af\u5883, \u6240\u4ee5\u5f15\u5165 cross-env \u63d2\u4ef6, \u53ef\u4ee5\u5728\u542f\u52a8/\u6784\u5efa\u9879\u76ee\u7684\u65f6\u5019\u8bbe\u7f6e\u73af\u5883"),(0,r.kt)("p",null,"\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u8bbe\u7f6e\u4e0d\u540c prefix,\u4ece\u800c\u8d70\u4e0d\u540c\u7684\u53cd\u4ee3"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5751\u70b9")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u53cd\u4ee3 target \u5730\u5740\u9700\u8981\u81ea\u5b9a\u4e49, \u7531\u4e8e\u5730\u5740\u9700\u8981\u6839\u636e\u5f53\u524d\u5206\u652f,\u4e3b\u57df\u540d\u53bb\u8bbe\u7f6e, \u6240\u4ee5\u7528\u5230\u4e86 router \u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u51fd\u6570, \u91cc\u9762\u53ef\u4ee5\u62ff\u5230 headers"),(0,r.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883\u7684 build start \u90fd\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53c2\u6570")),(0,r.kt)("p",{parentName:"div"},"\u89e3\u51b3\u65b9\u6848:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'},"\n axios: {\n    proxy: true,\n    prefix:\n      process.env.NODE_ENV === 'dev'\n        ? '/test'\n        : '',\n    credentials: true,\n  },\n\n  proxy: {\n    '/test': {\n      target: 'http://test-www.66rpg.com',\n      ws: true,\n      pathRewrite: {\n        '^/test': '/',\n        changeOrigin: true,\n      },\n      router({ headers }) {\n        return (\n          'http://' +\n          branch +\n          (headers.domain ? headers.domain : 'www') +\n          '.66rpg.com/'\n        )\n      },\n    },\n  },\n\n// package.json\n\"dev\": \"cross-env NODE_ENV=dev nuxt\",\n\"build:test\": \"cross-env NODE_ENV=dev nuxt build\",\n\"start:test\": \"cross-env NODE_ENV=dev nuxt start\",\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7531\u4e8e\u540e\u7aef\u539f\u56e0\u9700\u8981\u8ddf\u76ee\u524d\u7ad9\u4e0a\u533a\u5206\u5f00 \u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a \u524d\u7f00\u53c2\u6570 /mini \u76ee\u6807\u662f host + 'xxx' + \u8def\u7531")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5751\u70b9")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u7406\u60f3\u60c5\u51b5\u662f\u8bbe\u7f6e\u4e86 base \u4ee5\u540e, \u8bbf\u95ee / \u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230 /mini, \u4e0d\u8fc7\u8fd9\u4e00\u6b65 nuxt \u5b98\u65b9\u5e76\u6ca1\u6709\u505a, \u800c\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a hook \u65b9\u6848, \u62ff\u5230 response \u7136\u540e\u91cd\u5b9a\u5411"),(0,r.kt)("li",{parentName:"ul"},"hook \u65b9\u6848\u4f1a\u548c proxy \u51b2\u7a81,\u9700\u8981\u624b\u52a8\u4fee\u6539")),(0,r.kt)("p",{parentName:"div"},"\u89e3\u51b3\u65b9\u6848:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'},'router: {\n  base: "/mini";\n}\n\nhooks: hooks(this); // \u5b98\u7f51\u5199\u6cd5 \u8fd9\u6837\u5199\u6709\u95ee\u9898\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="hook/route-redirec-portal.js"',title:'"hook/route-redirec-portal.js"'},'function projectHooksRouteRedirectPortal(req, res, next) {\n  if (pathname === "/") {\n    res.writeHead(302, {\n      Location,\n    });\n    res.end();\n  }\n  next();\n}\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="nuxt.config.js"',title:'"nuxt.config.js"'},'// \u89e3\u51b3\u65b9\u6848\nconst config = {\n  router: {\n    base: "/mini",\n  },\n};\nconfig.hooks = hooks(config);\n\nexport default config;\n')))),(0,r.kt)("h4",{id:"\u7ec4\u4ef6\u4f20\u53c2"},"\u7ec4\u4ef6\u4f20\u53c2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"props/emit"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"props: {\n    detail: {\n      type: Object,\n      required: true,\n    },\n    activedata: {\n      type: Object,\n      required: true,\n    },\n  },\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"provide/inject \u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u4f20\u7ed9 provide \u5c31\u662f\u54cd\u5e94\u5f0f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"vuex"))),(0,r.kt)("h4",{id:"\u9996\u9875\u52a0\u8f7d\u4f18\u5316"},"\u9996\u9875\u52a0\u8f7d\u4f18\u5316:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"plugins \u614e\u91cd\u5199, \u63d2\u4ef6\u6309\u9700\u52a0\u8f7d, \u4e00\u4e9b\u6a21\u5757\u5982: swiper \u53ef\u4ee5\u5728 client \u52a0\u8f7d,element-ui \u8bbe\u7f6e\u6309\u9700\u52a0\u8f7d"),(0,r.kt)("li",{parentName:"ul"},"\u9996\u5c4f\u6570\u636e,\u5982\u679c\u662f\u670d\u52a1\u5668\u7aef\u6e32\u67d3,\u9700\u8981 \u5f02\u6b65\u5e76\u884c\u53d1\u9001\u63a5\u53e3,\u540c\u65f6\u8bf7\u6c42\u6570\u636e Promise.all"),(0,r.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u61d2\u52a0\u8f7d(\u7528\u4e86\u8fc5\u96f7\u56e2\u961f\u7684\u63d2\u4ef6 vue-lazy-component)"),(0,r.kt)("li",{parentName:"ul"},"swiper \u56fe\u7247\u61d2\u52a0\u8f7d,\u56fe\u7247\u8bbe\u7f6e webp \u538b\u7f29"),(0,r.kt)("li",{parentName:"ul"},"v-if \u4e00\u4e9b\u9996\u5c4f\u672a\u5c55\u793a\u6a21\u5757\u8bbe\u7f6e v-if"),(0,r.kt)("li",{parentName:"ul"},"build \u8bbe\u7f6e gzip")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u5751\u70b9/\u89e3\u51b3\u65b9\u6848:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u7531\u4e8e element-ui \u9700\u8981\u8bbe\u7f6e\u4e3b\u9898\u8272, \u9700\u8981\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u5355\u72ec\u5f15\u5165"),(0,r.kt)("li",{parentName:"ul"},"ios webp \u652f\u6301\u4e0d\u597d, \u9700\u8981\u5224\u65ad\u5e73\u53f0\u8d70\u4e0d\u540c\u7684\u538b\u7f29")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7531\u4e8e\u4f7f\u7528\u4e86 composition-api \u5199\u6cd5 nuxt \u4f7f\u7528\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u53c2\u6570 \u53ef\u4ee5\u901a\u8fc7 useContext"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7aef\u8bf7\u6c42 \u4f7f\u7528 useFetch")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9700\u8981\u5728\u5168\u5c40\u4efb\u4e00\u4f4d\u7f6e\u8bf7\u6c42\u7528\u6237\u4fe1\u606f\u63a5\u53e3,\u5e76\u4e14\u5b58\u50a8\u5230 store \u4e2d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="middleware/redirect.js"',title:'"middleware/redirect.js"'},"\nrouter: {\n  middleware: 'redirect',\n},\n\nexport default async ({ isHMR, store }) => {\n  if (isHMR) return\n  if (!store.state.userInfos.uid) {\n    const { status, data } = await getUserInfo()\n    if (status === 1) {\n      getBasketflower()\n      store.commit('setUserInfo', data.userInfos)\n    } else {\n      store.commit('delUserInfo')\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8def\u7531\u8bbf\u95ee\u7684\u65f6\u5019, \u5f53\u8bbf\u95ee\u9519\u8bef\u8def\u7531\u9700\u8981\u8df3\u8f6c\u5230\u9996\u9875\u8def\u7531")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"router: {\n    extendRoutes(routes, resolve) {\n        routes.push({\n            name: 'default',\n            path: '*',\n            component: resolve(__dirname, 'pages/home'),\n        })\n    },\n},\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u9700\u8981\u6ce8\u610f\u7684\u70b9:")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"ios safari \u6d4f\u89c8\u5668 \u9ed8\u8ba4\u5c4f\u853d window.open \u5199\u4e00\u4e2a a \u6807\u7b7e\u89e6\u53d1 a"),(0,r.kt)("li",{parentName:"ol"},"swiper \u5728 nuxt \u4f7f\u7528\u7684\u65f6\u5019 \u9700\u8981\u5c06 swiper \u8bbe\u7f6e\u4e3a client, ssr:false, \u5e76\u4e14 swiper \u9700\u8981\u7528 client-only \u5305\u88f9"),(0,r.kt)("li",{parentName:"ol"},"props \u4f20\u53c2\u4e0d\u80fd\u7528\u89e3\u6784\u8d4b\u503c, \u9700\u8981\u7528 watch \u76d1\u542c props.xxx ,\u5426\u5219\u6570\u636e\u4e0d\u4f1a\u53d8\u5316")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u517c\u5bb9\u6027\u5904\u7406 browserslist")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8282\u6d41\u9632\u6296")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u542f\u52a8\u7aef\u53e3(\u914d\u5408\u8fd0\u7ef4\u505a\u5e73\u6ed1\u542f\u52a8)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},' // package.json\n "config": {\n    "nuxt": {\n      "host": "0.0.0.0",\n      "port": "3000"\n    }\n  },\n')))}c.isMDXComponent=!0}}]);