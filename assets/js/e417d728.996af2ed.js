"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8748],{4683:function(r){r.exports=JSON.parse('{"blogPosts":[{"id":"Algorithm","metadata":{"permalink":"/doc/blog/2021/11/22/Algorithm","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-22-Algorithm.mdx","source":"@site/blog/2021-11-22-Algorithm.mdx","title":"Algorithm","description":"","date":"2021-11-22T00:00:00.000Z","formattedDate":"November 22, 2021","tags":[],"readingTime":1.935,"truncated":false,"authors":[],"nextItem":{"title":"Interview","permalink":"/doc/blog/2021/11/22/Interview"}},"content":"```js title=\\"\u8282\u6d41\\"\\r\\nfunction throttle(fn, time = 300) {\\r\\n  // \u5148\u70b9\u51fb\u751f\u6548\\r\\n  let flag = false;\\r\\n  return function () {\\r\\n    if (flag) {\\r\\n      return;\\r\\n    }\\r\\n    flag = true;\\r\\n    setTimeout(() => {\\r\\n      fn.call(this, arguments);\\r\\n      flag = false;\\r\\n    }, time);\\r\\n  };\\r\\n}\\r\\n```\\r\\n\\r\\n```js title=\\"\u9632\u6296\\"\\r\\nfunction debounce(fn, time = 300) {\\r\\n  // \u540e\u6267\u884c\\r\\n  let timer;\\r\\n  return function () {\\r\\n    timer && clearTimeout(timer);\\r\\n    timer = setTimeout(() => {\\r\\n      fn.call(this, arguments);\\r\\n    }, time);\\r\\n  };\\r\\n}\\r\\n```\\r\\n\\r\\n```js title=\\"\u6df1\u62f7\u8d1d\\"\\r\\nfunction clone(target, map = new Map()) {\\r\\n  if (typeof target === \\"object\\") {\\r\\n    let obj = Array.isArray(target) ? [] : {};\\r\\n\\r\\n    if (map.get(target)) {\\r\\n      return map.get(target);\\r\\n    }\\r\\n\\r\\n    map.set(target, obj);\\r\\n\\r\\n    for (const key in target) {\\r\\n      obj[key] = clone(target[key], map);\\r\\n    }\\r\\n    return obj;\\r\\n  } else {\\r\\n    return target;\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n```js title=\\"\u4e09\u6570\u4e4b\u548c\\"\\r\\nfunction threeSum(nums) {\\r\\n  nums = [-1, 0, 1, 2, -1, -4];\\r\\n  let res = [];\\r\\n  nums.sort((a, b) => a - b);\\r\\n  for (let i = 0; i < nums.length; i++) {\\r\\n    if (nums[i] === nums[i - 1]) continue;\\r\\n\\r\\n    let left = i + 1;\\r\\n    let right = nums.length - 1;\\r\\n    let target = -nums[i];\\r\\n\\r\\n    while (left < right) {\\r\\n      if (nums[left] + nums[right] === target) {\\r\\n        res.push([nums[left], -target, nums[right]]);\\r\\n        while (nums[left] === nums[left + 1]) {\\r\\n          left++;\\r\\n        }\\r\\n        while (nums[right] === nums[right - 1]) {\\r\\n          right--;\\r\\n        }\\r\\n        left++;\\r\\n        right--;\\r\\n      } else if (nums[left] + nums[right] > target) {\\r\\n        right--;\\r\\n      } else {\\r\\n        left++;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n\\r\\n  return res;\\r\\n}\\r\\n```\\r\\n\\r\\n```js title=\\"\u4e09\u6570\u4e4b\u548c closest\\"\\r\\nfunction threeSumClosest(nums, target) {\\r\\n  let res = 0;\\r\\n  let min = Number.MAX_VALUE;\\r\\n  nums.sort((a, b) => a - b);\\r\\n  for (let i = 0; i < nums.length; i++) {\\r\\n    if (nums[i] === nums[i - 1]) continue;\\r\\n\\r\\n    let left = i + 1;\\r\\n    let right = nums.length - 1;\\r\\n    let current = nums[i];\\r\\n    let dist = 0;\\r\\n\\r\\n    while (left < right) {\\r\\n      let sum = nums[left] + nums[right] + current;\\r\\n      dist = Math.abs(sum - target);\\r\\n\\r\\n      if (dist === 0) {\\r\\n        return target;\\r\\n      } else if (sum > target) {\\r\\n        while (nums[right] === nums[right - 1]) {\\r\\n          right--;\\r\\n        }\\r\\n        right--;\\r\\n      } else {\\r\\n        while (nums[left] === nums[left + 1]) {\\r\\n          left++;\\r\\n        }\\r\\n        left++;\\r\\n      }\\r\\n\\r\\n      if (min > dist) {\\r\\n        min = dist;\\r\\n        res = sum;\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n  return res;\\r\\n}\\r\\n```"},{"id":"Interview","metadata":{"permalink":"/doc/blog/2021/11/22/Interview","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-22-Interview.mdx","source":"@site/blog/2021-11-22-Interview.mdx","title":"Interview","description":"\u6d4f\u89c8\u5668\u4ece\u8f93\u5165 url \u5230\u6e32\u67d3\u9875\u9762\uff0c\u53d1\u751f\u4e86\u4ec0\u4e48","date":"2021-11-22T00:00:00.000Z","formattedDate":"November 22, 2021","tags":[],"readingTime":11.135,"truncated":false,"authors":[],"prevItem":{"title":"Algorithm","permalink":"/doc/blog/2021/11/22/Algorithm"},"nextItem":{"title":"Nuxt","permalink":"/doc/blog/2021/11/22/Nuxt"}},"content":"## \u6d4f\u89c8\u5668\u4ece\u8f93\u5165 url \u5230\u6e32\u67d3\u9875\u9762\uff0c\u53d1\u751f\u4e86\u4ec0\u4e48\\r\\n\\r\\n1. \u9996\u5148\u89e3\u6790\u57df\u540d\uff0c\u5229\u7528 dns \u670d\u52a1\u5668\u89e3\u6790\u57df\u540d\u6210 ip\\r\\n\\r\\n   - \u57df\u540d\u4e3a\u4ec0\u4e48\u8981\u89e3\u6790\uff1f\\r\\n\\r\\n     - \u9996\u5148\u57df\u540d\u53ea\u80fd\u662f \u5b57\u6bcd+\u6570\u5b57+\u4e00\u4e9b\u7279\u6b8a\u7b26\u53f7\uff08\u5c31\u662f\u4e0d\u5305\u542b\u767e\u5206\u53f7\u3001\u53cc\u5f15\u53f7\uff09\u4e0d\u8f6c\u4e49\u4f1a\u51fa\u6b67\u4e49 ke=y=1\\r\\n\\r\\n     - Utf-8 \u7f16\u7801\\r\\n     - encodeURL encodeURLComponent \u7f16\u7801\\r\\n\\r\\n   - dns \u5982\u4f55\u5de5\u4f5c\uff1f\\r\\n\\r\\n     - \u9996\u5148\u4f1a\u4ece\u672c\u673a\u7684 hosts \u6587\u4ef6\u67e5\u627e\uff0c\u67e5\u627e\u5230\u8fd4\u56de\uff0c\\r\\n     - \u7136\u540e\u4ece\u672c\u673a\u914d\u7f6e\u7684 dns \u670d\u52a1\u5668\u7f13\u5b58\u67e5\u627e\\r\\n     - \u7136\u540e\u4ece\u6839 DNS \u670d\u52a1\u5668\u67e5\u627e\uff08\u5168\u7403 13 \u53f0\uff09\\r\\n     - \u7136\u540e\u8bd5\u56fe\u89e3\u6790.baidu.com \u76f4\u5230\u80fd\u89e3\u6790\\r\\n\\r\\n   - \u524d\u7aef dns \u4f18\u5316\\r\\n\\r\\n     - html \u9875\u9762\u5934\u90e8\u5199\u5165 dns \u7f13\u5b58\u5730\u5740\\r\\n\\r\\n2. \u62ff\u5230 ip \u4ee5\u540e\uff0c\u5efa\u7acb TCP \u94fe\u63a5\uff08\u4e09\u6b21\u63e1\u624b\u4ee5\u53ca\u540e\u9762\u7684\u56db\u6b21\u5206\u624b\uff09\\r\\n\\r\\n   - \u4e3a\u4ec0\u4e48\u662f\u4e09\u6b21\u4e24\u6b21\u4e0d\u884c\uff1f\\r\\n     - \u4e24\u6b21\u53ef\u80fd\u4f1a\u51fa\u73b0 A => B\uff0cB \u672a\u6536\u5230\uff0cA \u53c8\u53d1\u9001\u7ed9 B\\r\\n     - A=>B\uff0cA \u672a\u6536\u5230\\r\\n   - \u7b2c\u4e00\u6b21\u63e1\u624b\uff1aA \u53d1\u9001\u4f4d\u7801 SYN=1TCP \u5305\u7ed9\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u968f\u673a\u4ea7\u751f\u4e00\u4e2a\u786e\u8ba4\u53f7\uff0c\u4e3b\u673a B \u6536\u5230 SYN \u7801\u77e5\u9053 A \u8981\u5efa\u7acb\u8fde\u63a5\\r\\n   - \u7b2c\u4e8c\u6b21\u63e1\u624b\uff1aB \u6536\u5230\u8bf7\u6c42\u4ee5\u540e\uff0c\u5411 A \u53d1\u9001\u786e\u8ba4\u53f7\uff08\u4e3b\u673a A \u7684\u786e\u8ba4\u7801+1\uff09\uff0cSYN=1\uff0cSEQ=\u968f\u673a\u6570\u7684\u5305\\r\\n   - \u7b2c\u4e09\u6b21\u63e1\u624b\uff1aA \u6536\u5230\u786e\u8ba4\u53f7\u68c0\u67e5\u662f\u5426\u6b63\u786e\uff0c\u662f\u5426\u662f\u7b2c\u4e00\u6b21\u53d1\u9001\u503c+1\uff0c\u4ee5\u53ca\u4f4d\u7801\u662f\u5426\u4e3a 1\uff0c\u5982\u679c\u6b63\u786e\uff0cA \u4f1a\u518d\u6b21\u53d1\u9001\u4e3b\u673a B SEQ+1\uff0cack=1 \u7ed9 B\uff0c\u4e3b\u673a B \u6536\u5230\u4ee5\u540e\u5efa\u7acb\u6210\u529f\\r\\n\\r\\n3. \u7136\u540e\u662f\u5f3a\u7f13\u5b58\uff0c\u534f\u5546\u7f13\u5b58\\r\\n\\r\\n   - \u5f3a\u7f13\u5b58\uff0ccache-control\uff1ano-cache \u76f4\u63a5\u8fdb\u5165\u534f\u5546\u7f13\u5b58\uff0c\u5982\u679c\u5728\u65f6\u95f4\u5185\u547d\u4e2d\u5f3a\u7f13\u5b58\uff0c\u4e0d\u53d1\u9001\u8bf7\u6c42\u76f4\u63a5\u672c\u5730\u7f13\u5b58\u8bfb\u53d6\u6587\u4ef6\uff0c \u5982\u679c\u6ca1\u6709 cache-control \u4f1a\u8bfb\u53d6 expires \u5bf9\u6bd4\u662f\u5426\u8fc7\u671f\\r\\n   - \u534f\u5546\u7f13\u5b58\uff0c\u5411\u670d\u52a1\u5668\u53d1\u9001 if-None-match \u548c if-modify-since \u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u4f1a\u6bd4\u8f83 etag\uff0c\u76f8\u540c\uff0c\u534f\u5546\u7f13\u5b58\uff0c304\uff1b\u4e0d\u4e00\u81f4\uff0c\u65b0\u8d44\u6e90+200+\u65b0\u7684 etag\\r\\n\\r\\n4. \u62ff\u5230 html css js\\r\\n   1. \u6784\u5efa DOM \u6811\\r\\n   2. \u6784\u5efa CSSOM \u6811\\r\\n   3. \u6267\u884c JS\\r\\n   4. \u6784\u5efa\u6e32\u67d3\u6811\\r\\n   5. \u6e32\u67d3\u6811\\r\\n   6. \u5e03\u5c40\\r\\n   7. \u7ed8\u5236\\r\\n5. \u9875\u9762\u6e32\u67d3\u4f18\u5316\\r\\n\\r\\n## Vue \u548c React \u5bf9\u6bd4\\r\\n\\r\\n**Vue** \u7684\u601d\u60f3\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u4e5f\u5c31\u662f\u57fa\u4e8e\u6570\u636e\u53ef\u53d8\uff0c\u901a\u8fc7\u5bf9\u6bcf\u4e00\u4e2a\u5c5e\u6027\u5efa\u7acb Watcher \u6765\u76d1\u542c\uff0c\u5f53\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u7684\u65f6\u5019\uff0c\u54cd\u5e94\u5f0f\u7684\u66f4\u65b0\u5bf9\u5e94\u7684\u865a\u62df DOM\\r\\n\\r\\n**React** \u4e3b\u5f20\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u6240\u4ee5\u63a8\u5d07\u7eaf\u7ec4\u4ef6\uff0c\u6570\u636e\u4e0d\u53ef\u53d8\uff0c\u5355\u5411\u6570\u636e\u6d41\\r\\n\\r\\n\u76d1\u542c\u6570\u636e\u53d8\u5316\u5b9e\u73b0\u539f\u7406\uff1a\\r\\n\\r\\n- Vue \u901a\u8fc7 getter/setter \u4ee5\u53ca\u4e00\u4e9b\u51fd\u6570\u7684\u52ab\u6301\uff0c\u80fd\u7cbe\u786e\u77e5\u9053\u6570\u636e\u53d8\u5316\uff0c\u4e0d\u9700\u8981\u7279\u522b\u7684\u4f18\u5316\u5c31\u80fd\u8fbe\u5230\u5f88\u597d\u7684\u6027\u80fd\\r\\n- React \u901a\u8fc7\u6bd4\u8f83\u5f15\u7528\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u5982\u679c\u4e0d\u4f18\u5316\uff08PureCompont/shouldComponentUpdate\uff09\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5927\u91cf\u4e0d\u5fc5\u8981\u7684 VDOM \u91cd\u65b0\u6e32\u67d3\\r\\n\\r\\n\u7ec4\u4ef6\u901a\u4fe1\u533a\u522b\uff1a jsx \u548c.vue \u6a21\u7248\\r\\n\\r\\n- HOC \u548c Mixins\uff08Vue \u4e2d\u7ec4\u5408\u4e0d\u7528\u529f\u80fd\u901a\u8fc7 mixin\uff09\uff0cReact \u901a\u8fc7\u9ad8\u9636\u7ec4\u4ef6\\r\\n\\r\\n\u6027\u80fd\u4f18\u5316\uff1a\\r\\n\\r\\n- React\uff1ashouldComponentUpdate\\r\\n- Vue\uff1a\u5185\u90e8\u5b9e\u73b0 shouldComponentUpdate \u4f18\u5316\uff0c\u7531\u4e8e\u4f9d\u8d56\u8ffd\u8e2a\u7cfb\u7edf\uff0c\u901a\u8fc7 watcher \u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\uff08\u9875\u9762\u6570\u636e\u91cf\u5927\u65f6\uff0c\u6027\u80fd\u8f83\u5dee\uff09\\r\\n\\r\\n## Vuex \u548c Redux \u533a\u522b\\r\\n\\r\\n**Redux** \u4f7f\u7528\u7684\u662f\u4e0d\u53ef\u53d8\u6570\u636e\uff0c**Vuex** \u662f\u53ef\u53d8\u7684\uff0c\u6bcf\u6b21\u90fd\u7528\u65b0\u7684 state \u66ff\u6362\u65e7\u7684\uff0cvuex \u662f\u76f4\u63a5\u4fee\u6539\\r\\n\\r\\nRedux \u76d1\u6d4b\u6570\u636e\u53d8\u5316\u662f\u901a\u8fc7 diff \u6bd4\u8f83\u5dee\u5f02\uff0cVuex \u539f\u7406\u4e0e vue \u76f8\u540c\uff0c\u901a\u8fc7 getter/setter \u6bd4\u8f83\\r\\n\\r\\n## webpack\\r\\n\\r\\n**Plugin/Loader \u533a\u522b**\\r\\n\\r\\n:::note \u533a\u522b\\r\\n\\r\\n- Loader \u662f\u52a0\u8f7d\u5668 Webpack \u5c06\u2f00\u5207\u2f42\u4ef6\u89c6\u4e3a\u6a21\u5757\uff0c\u4f46\u662f Webpack \u539f\u2f63\u662f\u53ea\u80fd\u89e3\u6790 JavaScript \u2f42\u4ef6\uff0c\u5982\u679c\u60f3\u5c06\u5176\u4ed6\u2f42\u4ef6\u4e5f\u6253\u5305\u7684\u8bdd\uff0c\u5c31\u4f1a\u2f64\u5230 Loader\u3002 \u6240\u4ee5 Loader \u7684\u4f5c\u2f64\u662f\u8ba9 Webpack \u62e5\u6709\u4e86\u52a0\u8f7d\u548c\u89e3\u6790\u975e JavaScript \u6587\u4ef6\u7684\u80fd\u529b;\\r\\n- Plugin \u662f\u63d2\u4ef6 Plugin \u53ef\u4ee5\u6269\u5c55 Webpack \u7684\u529f\u80fd,\u8ba9 Webpack \u5177\u6709\u7075\u6d3b\u6027\u3002\u5728 Webpack \u8fd0\u2f8f\u7684\u2f63\u547d\u5468\u671f\u4e2d\u4f1a\u2f34\u64ad\u51fa\u8bb8\u591a\u4e8b\u4ef6\uff0cPlugin \u53ef\u4ee5\u76d1\u542c\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u5728\u5408\u9002\u7684\u65f6\u673a\u901a\u8fc7 Webpack \u63d0\u4f9b\u7684 API \u6539\u53d8\u8f93\u51fa\u7ed3\u679c\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n**WebPack \u4e2d bundle,chunk,module \u7684\u4f5c\u7528\u662f\u4ec0\u4e48**\\r\\n:::note \u533a\u522b\\r\\n\\r\\n- bundle \u662f\u7531 Webpack \u6253\u5305\u51fa\u6765\u7684\u6587\u4ef6;\\r\\n- chunk \u4ee3\u7801\u5757,\u4e00\u4e2a chunk \u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u5408\u2f7d\u6210\uff0c\u2f64\u4e8e\u4ee3\u7801\u7684\u5408\u5e76\u548c\u5206\u5272;\\r\\n- module \u662f\u5f00\u53d1\u4e2d\u7684\u5355\u4e2a\u6a21\u5757\uff0c\u5728 Webpack \u4e2d\u2f00\u4e2a\u6a21\u5757\u5bf9\u5e94\u2f00\u4e2a\u2f42\u4ef6\uff0cWebpack \u4f1a\u4ece\u914d\u7f6e\u7684 entry \u4e2d\u9012\u5f52\u5f00\u59cb\u627e\u51fa\u6240\u6709\u4f9d\u8d56\u7684\u6a21\u5757\u3002\\r\\n\\r\\n:::\\r\\n\\r\\n**setState \u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684**\\r\\n\\r\\n- \u5982\u679c\u662f\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u4e5f\u5c31\u662f\u6ca1\u6709\u4f7f\u7528 Concurrent \u7ec4\u4ef6\uff0c\u662f\u540c\u6b65\u66f4\u65b0\u7684\uff0c\u4f46\u662f\u4e0d\u4f1a\u7acb\u5373\u83b7\u5f97\u6700\u65b0\u7684 state \u503c\u3002\u56e0\u4e3a\u8c03\u7528 setState \u53ea\u662f\u5355\u7eaf\u7684\u5c06\u6700\u65b0\u7684\u72b6\u6001\u653e\u5230 updateQueue \u94fe\u8868\u4e0a\uff0c\u7b49\u8fd9\u4e2a\u70b9\u51fb\u4e8b\u4ef6\uff08\u5408\u6210\u4e8b\u4ef6\uff09\u7ed3\u675f\u540e\u4f1a\u89e6\u53d1\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5728\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4e2d\u624d\u4f1a\u66f4\u65b0 state\uff0c\u4ee5\u53ca\u91cd\u65b0\u6e32\u67d3\u3002\\r\\n- \u5f53\u4f7f\u7528\u4e86 Concurrent \u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u624d\u662f\u771f\u6b63\u7684\u5f02\u6b65\u66f4\u65b0\u6a21\u5f0f\u3002\u540c\u6837\u6ca1\u6cd5\u7acb\u5373\u83b7\u5f97\u6700\u65b0\u72b6\u6001\uff0c\u5e76\u4e14\u5728\u6267\u884c React \u66f4\u65b0\u548c\u6e32\u67d3\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528\u4e86\u771f\u6b63\u7684\u5f02\u6b65\u65b9\u5f0f\uff08postMessage\uff09\u4f1a\u653e\u5230 eventloop \u4e2d\\r\\n- \u5f53\u4f7f\u7528\u4e86 flushSync \u8fd9\u4e2a api \u7684\u65f6\u5019\uff0cReact \u66f4\u65b0\u6e32\u67d3\u662f\u5b8c\u5168\u540c\u6b65\u7684\uff0c\u4f1a\u7acb\u5373\u89e6\u53d1\u66f4\u65b0\u548c\u6e32\u67d3\u64cd\u4f5c\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u6700\u65b0\u7684\u72b6\u6001\\r\\n\\r\\n```jsx\\r\\n flushSync(() => {\\r\\n   this.setState({\\r\\n     data: \'xxx\'\\r\\n   })\\r\\n })\\r\\n\\r\\n <Concurrent>\\r\\n   <h1>xxx</h1>\\r\\n </Concurrent>\\r\\n```\\r\\n\\r\\n**\u60f3\u7acb\u5373\u83b7\u53d6 state \u503c**\\r\\n\\r\\n- flushSync\\r\\n- addEventListener\\r\\n- serRimeout(() => {})\\r\\n\\r\\n## ES moudle \u548c CommonJS \u533a\u522b todo\\r\\n\\r\\n- CommonJS \u662f\u5bf9\u6a21\u5757\u7684\u6d45\u62f7\u8d1d\uff0cES6 Moundle \u662f\u5bf9\u6a21\u5757\u7684\u5f15\u7528\uff0c\u5373 ES6 Moudle \u53ea\u5b58\u4e0d\u8bfb\uff0c\u4e0d\u80fd\u6539\u53d8\u5176\u503c\uff0c\u4e5f\u5c31\u662f\u6307\u9488\u6307\u5411\u4e0d\u53d8\uff0c\u7c7b\u4f3c const\\r\\n- import \u7684\u63a5\u53e3\u662f read-only\uff08\u53ea\u8bfb\u72b6\u6001\uff09\uff0c\u4e0d\u80fd\u4fee\u6539\u53d8\u91cf\u503c\uff0c\u4e0d\u80fd\u6539\u53d8\u6307\u9488\u6307\\r\\n\\r\\n  \u5411\\r\\n\\r\\n## useCallback UseMemo Memo \u533a\u522b\\r\\n\\r\\n- React.memo \u5305\u88f9\u4ee5\u540e\uff0c\u5b50\u7ec4\u4ef6\u53ea\u5728 props \u53d1\u751f\u53d8\u5316\u4ee5\u540e\u624d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002\\r\\n- useCallback \u53ef\u4ee5\u5bf9\u51fd\u6570\u7f13\u5b58\uff0c\u7236\u7ec4\u4ef6\u7ed9\u5b50\u7ec4\u4ef6\u4f20\u503c\uff08\u503c\u4e3a\u51fd\u6570 handleClick\uff09\uff0c\u7531\u4e8e handleClick \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u751f\u6210\u7684 handleClick \u90fd\u662f\u65b0\u7684\uff0c\u6240\u4ee5\u5b50\u7ec4\u4ef6\u4f9d\u65e7\u4f1a\u6e32\u67d3\uff0c\u8fd9\u65f6\u5019\u53ea\u80fd\u901a\u8fc7 useCallback \u5305\u88f9\\r\\n- \u5982\u679c\u4f20\u9012\u7ed9\u81ea\u7ec4\u5efa\u4e00\u4e2a\u5bf9\u8c61{a:1,b:2} \u8fd9\u65f6\u5019\u9700\u8981\u4f7f\u7528 useMemo\\r\\n\\r\\n## HTTP \u534f\u8bae\\r\\n\\r\\n**Get \u548c Post \u8bf7\u6c42\u7684\u533a\u522b**\\r\\n\\r\\n- \u5e94\u7528\u573a\u666f: Get \u8bf7\u6c42\u4e00\u822c\u7528\u6765\u83b7\u53d6\u6570\u636e, \u4e00\u822c Get \u8bf7\u6c42\u7528\u4e8e\u5bf9\u670d\u52a1\u5668\u8d44\u6e90\u4e0d\u4f1a\u4ea7\u751f\u5f71\u54cd; Post \u8bf7\u6c42\u4e00\u822c\u7528\u4e8e\u5bf9\u670d\u52a1\u5668\u4ea7\u751f\u5f71\u54cd\u7684\u60c5\u666f.\\r\\n- \u662f\u5426\u7f13\u5b58: \u6d4f\u89c8\u5668\u4e00\u822c\u4f1a\u5bf9 Get \u8bf7\u6c42\u7f13\u5b58, \u4f46\u5f88\u5c11\u5bf9 Post \u7f13\u5b58\\r\\n- \u53d1\u9001\u7684\u62a5\u6587\u683c\u5f0f: get \u8bf7\u6c42\u5b9e\u4f53\u90e8\u5206\u4e3a\u7a7a, post \u4e3a\u6570\u636e\\r\\n- \u5b89\u5168\u6027: get \u8bf7\u6c42\u4f1a\u5c06\u53c2\u6570\u62fc\u63a5\u5230 url \u4e0a, \u76f8\u5bf9\u4e8e post \u4e0d\u5b89\u5168, \u4f1a\u88ab\u5386\u53f2\u8bb0\u5f55\u4fdd\u7559\\r\\n- \u8bf7\u6c42\u957f\u5ea6: url \u957f\u5ea6\u4f1a\u88ab\u9650\u5236\\r\\n- \u53c2\u6570\u7c7b\u578b: post \u8bf7\u6c42\u652f\u6301\u66f4\u591a\u6570\u636e\u7c7b\u578b\\r\\n\\r\\n**HTTP1.0 \u548c HTTP1.1 \u533a\u522b**\\r\\n\\r\\n- \u8fde\u63a5\u65b9\u9762: http1.0 \u9ed8\u8ba4\u975e\u6301\u4e45\u8fde\u63a5, http1.1 \u6301\u4e45\u8fde\u63a5. http1.1 \u901a\u8fc7\u6301\u4e45\u8fde\u63a5\u4f7f\u591a\u4e2a http \u590d\u7528\u540c\u4e00\u4e2a TCP \u8fde\u63a5, \u907f\u514d\u5efa\u7acb\u8fde\u63a5\u65f6\u5ef6.\\r\\n- \u8d44\u6e90\u8bf7\u6c42\u65b9\u9762: 1.0 \u4e0d\u652f\u6301\u65ad\u70b9\u7eed\u4f20, \u670d\u52a1\u7aef\u53d1\u9001\u5b8c\u6574\u5bf9\u8c61. 1.1 \u52a0\u5165\u4e86 range, \u5141\u8bb8\u53ea\u8bf7\u6c42\u90e8\u5206\u8d44\u6e90,\u8fd4\u56de\u7801 206\\r\\n- \u7f13\u5b58\u65b9\u9762: 1.0 \u4f7f\u7528 header if_modified-since\u3001Expires \u505a\u4e3a\u7f13\u5b58\u6807\u51c6. 1.1 \u4f7f\u7528 Etag\u3001if-Match\u3001if-None-Match \u7f13\u5b58\u5934\u63a7\u5236\\r\\n- 1.1 \u65b0\u589e host \u5b57\u6bb5, \u6307\u5b9a\u670d\u52a1\u5668\u57df\u540d. 1.0 \u8ba4\u4e3a\u6bcf\u53f0\u670d\u52a1\u5668\u90fd\u7ed1\u5b9a\u552f\u4e00 ip, \u56e0\u6b64\u5e76\u6ca1\u6709\u4f20\u9012\u4e3b\u673a\u540d.\\r\\n- 1.1 \u65b0\u589e\u8bb8\u591a\u8bf7\u6c42\u65b9\u6cd5, put head options\\r\\n\\r\\n**Http1.1 \u548c Http2.0 \u533a\u522b**\\r\\n\\r\\n- \u4e8c\u8fdb\u5236\u534f\u8bae 1.1 \u6587\u672c + \u4e8c\u8fdb\u5236; 2.0 \u7eaf\u4e8c\u8fdb\u5236\\r\\n- \u591a\u8def\u590d\u7528 \u4ecd\u590d\u7528 TCP \u8fde\u63a5, \u5728\u540c\u4e00\u4e2a\u8fde\u63a5\u5185, \u5ba2\u6237\u7aef\u670d\u52a1\u5668\u90fd\u53ef\u4ee5\u540c\u65f6\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u6216\u56de\u5e94, \u4e0d\u7528\u6309\u7167\u987a\u5e8f, \u907f\u514d\u4e86\u961f\u5934\u963b\u585e\\r\\n- \u6570\u636e\u6d41 2.0 \u91c7\u7528\u6570\u636e\u6d41, \u6570\u636e\u5305\u4e0d\u6309\u987a\u5e8f\u53d1\u9001, \u6570\u636e\u5305\u53d1\u9001\u7684\u65f6\u5019\u5fc5\u987b\u6807\u8bb0\u6570\u636e\u6d41 ID\\r\\n- \u5934\u4fe1\u606f\u538b\u7f29 1.1 \u534f\u8bae\u4e0d\u5e26\u72b6\u6001, \u6bcf\u6b21\u8bf7\u6c42\u5fc5\u987b\u643a\u5e26\u6240\u6709\u4fe1\u606f, 2.0 \u5934\u4fe1\u606f\u538b\u7f29 gzip/compress \u538b\u7f29\u540e\u53d1\u9001; \u53e6\u4e00\u65b9\u9762\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7ef4\u62a4\u4e00\u4e2a\u5934\u4fe1\u606f\u8868,\u6240\u6709\u5b57\u6bb5\u5b58\u5165,\u751f\u6210\u7d22\u5f15\u53f7,\u4e0d\u53d1\u9001\u76f8\u540c\u5b57\u6bb5\\r\\n- \u670d\u52a1\u5668\u63a8\u9001 2.0 \u5141\u8bb8\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u8d44\u6e90. \u63d0\u524d\u7ed9\u5ba2\u6237\u7aef\u63a8\u9001\u5fc5\u8981\u8d44\u6e90.\\r\\n\\r\\n:::tip \u961f\u5934\u963b\u585e\\r\\n\u961f\u5934\u963b\u585e\u662f\u7531 http \u89c4\u5b9a\u62a5\u6587\u5fc5\u987b\u662f\u4e00\u53d1\u4e00\u6536,\u8fd9\u5c31\u662f\u4e00\u4e2a\u4e32\u884c\u961f\u5217, \u8bf7\u6c42\u6ca1\u6709\u4f18\u5148\u7ea7, \u53ea\u6709\u5165\u961f\u987a\u5e8f.\\r\\n:::\\r\\n\\r\\n**Https \u548c Http \u533a\u522b**\\r\\n\\r\\n- https \u9700\u8981 CA \u8bc1\u4e66, \u8d39\u7528\u8f83\u9ad8\\r\\n- http \u662f\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae, \u660e\u6587\u4f20\u8f93, https \u662f SSL \u52a0\u5bc6\u4f20\u8f93\u534f\u8bae\\r\\n- http 80 \u7aef\u53e3 https 443\\r\\n- http \u8fde\u63a5\u65e0\u72b6\u6001; https \u6709 SSL \u52a0\u5bc6\u4f20\u8f93, \u8eab\u4efd\u9a8c\u8bc1 \u66f4\u5b89\u5168\\r\\n\\r\\n**\u591a\u5f20\u56fe\u7247, \u52a0\u8f7d**\\r\\n\\r\\n- 1 \u4e0b, \u6d4f\u89c8\u5668\u5bf9\u4e00\u4e2a\u57df\u540d\u4e0b\u6700\u5927 TCP \u8fde\u63a5\u4e3a 6, \u4f1a\u8bf7\u6c42\u591a\u6b21. \u53ef\u4ee5\u901a\u8fc7\u591a\u57df\u540d\u90e8\u7f72\u89e3\u51b3.\u52a0\u5feb\u901f\u5ea6\\r\\n- 2 \u4e0b, \u77ac\u95f4\u52a0\u8f7d\u591a\u4e2a\u8d44\u6e90, \u591a\u8def\u590d\u7528, \u53ef\u4ee5\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\\r\\n\\r\\n**HTTP \u534f\u8bae\u7684\u4f18\u70b9\u548c\u7f3a\u70b9**\\r\\n\\r\\n- \u7b80\u5355\u5feb\u901f\\r\\n- \u65e0\u8fde\u63a5\\r\\n- \u65e0\u72b6\u6001\\r\\n- \u7075\u6d3b"},{"id":"Nuxt","metadata":{"permalink":"/doc/blog/2021/11/22/Nuxt","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-11-22-Nuxt.mdx","source":"@site/blog/2021-11-22-Nuxt.mdx","title":"Nuxt","description":"\u9879\u76ee\u6280\u672f nuxt, composition-api","date":"2021-11-22T00:00:00.000Z","formattedDate":"November 22, 2021","tags":[],"readingTime":4.69,"truncated":false,"authors":[],"prevItem":{"title":"Interview","permalink":"/doc/blog/2021/11/22/Interview"},"nextItem":{"title":"Welcome","permalink":"/doc/blog/welcome"}},"content":"**\u9879\u76ee\u6280\u672f nuxt, composition-api**\\r\\n[M \u7ad9\u5730\u5740](https://m.66rpg.com/mini)\\r\\n\\r\\n:::tip \u524d\u8a00\\r\\n\u4e3a\u4ec0\u4e48\u91c7\u7528 composition-api, \u56e0\u4e3a composition-api \u662f Vue \u4e0b\u4e00\u4e2a\u7248\u672c\u6700\u5e38\u7528\u7684\u8bed\u6cd5,\u4e00\u4e2a\u5168\u65b0\u7684\u903b\u8f91\u91cd\u7528\u548c\u4ee3\u7801\u7ec4\u7ec7\u65b9\u6cd5.\\r\\n\\r\\n\u4ee3\u7801\u66f4\u6613\u8bfb, \u5199\u6cd5\u66f4\u8212\u670d.\\r\\n:::\\r\\n\\r\\n\u76ee\u6807\u662f\u4e3a\u4e86\u5f00\u53d1\u65b9\u4fbf\u5e76\u4e14\u4fbf\u4e8e\u751f\u4ea7\u73af\u5883\u6d4b\u8bd5\u7528\\r\\n\\r\\n- \u672c\u5730 test debug main \u73af\u5883\\r\\n- \u751f\u4ea7\u73af\u5883 test debug main \u73af\u5883\\r\\n\\r\\n\u9700\u8981\u533a\u5206\u73af\u5883, \u6240\u4ee5\u5f15\u5165 cross-env \u63d2\u4ef6, \u53ef\u4ee5\u5728\u542f\u52a8/\u6784\u5efa\u9879\u76ee\u7684\u65f6\u5019\u8bbe\u7f6e\u73af\u5883\\r\\n\\r\\n\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u8bbe\u7f6e\u4e0d\u540c prefix,\u4ece\u800c\u8d70\u4e0d\u540c\u7684\u53cd\u4ee3\\r\\n\\r\\n:::caution \u5751\u70b9\\r\\n\\r\\n- \u53cd\u4ee3 target \u5730\u5740\u9700\u8981\u81ea\u5b9a\u4e49, \u7531\u4e8e\u5730\u5740\u9700\u8981\u6839\u636e\u5f53\u524d\u5206\u652f,\u4e3b\u57df\u540d\u53bb\u8bbe\u7f6e, \u6240\u4ee5\u7528\u5230\u4e86 router \u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u51fd\u6570, \u91cc\u9762\u53ef\u4ee5\u62ff\u5230 headers\\r\\n- \u751f\u4ea7\u73af\u5883\u7684 build start \u90fd\u9700\u8981\u8bbe\u7f6e\u73af\u5883\u53c2\u6570\\r\\n\\r\\n\u89e3\u51b3\u65b9\u6848:\\r\\n\\r\\n```js title=\\"nuxt.config.js\\"\\r\\n\\r\\n axios: {\\r\\n    proxy: true,\\r\\n    prefix:\\r\\n      process.env.NODE_ENV === \'dev\'\\r\\n        ? \'/test\'\\r\\n        : \'\',\\r\\n    credentials: true,\\r\\n  },\\r\\n\\r\\n  proxy: {\\r\\n    \'/test\': {\\r\\n      target: \'http://test-www.66rpg.com\',\\r\\n      ws: true,\\r\\n      pathRewrite: {\\r\\n        \'^/test\': \'/\',\\r\\n        changeOrigin: true,\\r\\n      },\\r\\n      router({ headers }) {\\r\\n        return (\\r\\n          \'http://\' +\\r\\n          branch +\\r\\n          (headers.domain ? headers.domain : \'www\') +\\r\\n          \'.66rpg.com/\'\\r\\n        )\\r\\n      },\\r\\n    },\\r\\n  },\\r\\n\\r\\n// package.json\\r\\n\\"dev\\": \\"cross-env NODE_ENV=dev nuxt\\",\\r\\n\\"build:test\\": \\"cross-env NODE_ENV=dev nuxt build\\",\\r\\n\\"start:test\\": \\"cross-env NODE_ENV=dev nuxt start\\",\\r\\n```\\r\\n\\r\\n:::\\r\\n**\u7531\u4e8e\u540e\u7aef\u539f\u56e0\u9700\u8981\u8ddf\u76ee\u524d\u7ad9\u4e0a\u533a\u5206\u5f00 \u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a \u524d\u7f00\u53c2\u6570 /mini \u76ee\u6807\u662f host + \'xxx\' + \u8def\u7531**\\r\\n\\r\\n:::caution \u5751\u70b9\\r\\n\\r\\n- \u7406\u60f3\u60c5\u51b5\u662f\u8bbe\u7f6e\u4e86 base \u4ee5\u540e, \u8bbf\u95ee / \u4f1a\u81ea\u52a8\u91cd\u5b9a\u5411\u5230 /mini, \u4e0d\u8fc7\u8fd9\u4e00\u6b65 nuxt \u5b98\u65b9\u5e76\u6ca1\u6709\u505a, \u800c\u662f\u63d0\u4f9b\u4e86\u4e00\u4e2a hook \u65b9\u6848, \u62ff\u5230 response \u7136\u540e\u91cd\u5b9a\u5411\\r\\n- hook \u65b9\u6848\u4f1a\u548c proxy \u51b2\u7a81,\u9700\u8981\u624b\u52a8\u4fee\u6539\\r\\n\\r\\n\u89e3\u51b3\u65b9\u6848:\\r\\n\\r\\n```js title=\\"nuxt.config.js\\"\\r\\nrouter: {\\r\\n  base: \\"/mini\\";\\r\\n}\\r\\n\\r\\nhooks: hooks(this); // \u5b98\u7f51\u5199\u6cd5 \u8fd9\u6837\u5199\u6709\u95ee\u9898\\r\\n```\\r\\n\\r\\n```js title=\\"hook/route-redirec-portal.js\\"\\r\\nfunction projectHooksRouteRedirectPortal(req, res, next) {\\r\\n  if (pathname === \\"/\\") {\\r\\n    res.writeHead(302, {\\r\\n      Location,\\r\\n    });\\r\\n    res.end();\\r\\n  }\\r\\n  next();\\r\\n}\\r\\n```\\r\\n\\r\\n```js title=\\"nuxt.config.js\\"\\r\\n// \u89e3\u51b3\u65b9\u6848\\r\\nconst config = {\\r\\n  router: {\\r\\n    base: \\"/mini\\",\\r\\n  },\\r\\n};\\r\\nconfig.hooks = hooks(config);\\r\\n\\r\\nexport default config;\\r\\n```\\r\\n\\r\\n:::\\r\\n\\r\\n#### \u7ec4\u4ef6\u4f20\u53c2:\\r\\n\\r\\n- props/emit\\r\\n\\r\\n  ```javascript\\r\\n  props: {\\r\\n      detail: {\\r\\n        type: Object,\\r\\n        required: true,\\r\\n      },\\r\\n      activedata: {\\r\\n        type: Object,\\r\\n        required: true,\\r\\n      },\\r\\n    },\\r\\n  ```\\r\\n\\r\\n- provide/inject \u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u4f20\u7ed9 provide \u5c31\u662f\u54cd\u5e94\u5f0f\\r\\n\\r\\n- vuex\\r\\n\\r\\n#### \u9996\u9875\u52a0\u8f7d\u4f18\u5316:\\r\\n\\r\\n- plugins \u614e\u91cd\u5199, \u63d2\u4ef6\u6309\u9700\u52a0\u8f7d, \u4e00\u4e9b\u6a21\u5757\u5982: swiper \u53ef\u4ee5\u5728 client \u52a0\u8f7d,element-ui \u8bbe\u7f6e\u6309\u9700\u52a0\u8f7d\\r\\n- \u9996\u5c4f\u6570\u636e,\u5982\u679c\u662f\u670d\u52a1\u5668\u7aef\u6e32\u67d3,\u9700\u8981 \u5f02\u6b65\u5e76\u884c\u53d1\u9001\u63a5\u53e3,\u540c\u65f6\u8bf7\u6c42\u6570\u636e Promise.all\\r\\n- \u7ec4\u4ef6\u61d2\u52a0\u8f7d(\u7528\u4e86\u8fc5\u96f7\u56e2\u961f\u7684\u63d2\u4ef6 vue-lazy-component)\\r\\n- swiper \u56fe\u7247\u61d2\u52a0\u8f7d,\u56fe\u7247\u8bbe\u7f6e webp \u538b\u7f29\\r\\n- v-if \u4e00\u4e9b\u9996\u5c4f\u672a\u5c55\u793a\u6a21\u5757\u8bbe\u7f6e v-if\\r\\n- build \u8bbe\u7f6e gzip\\r\\n\\r\\n:::caution \u5751\u70b9/\u89e3\u51b3\u65b9\u6848:\\r\\n\\r\\n- \u7531\u4e8e element-ui \u9700\u8981\u8bbe\u7f6e\u4e3b\u9898\u8272, \u9700\u8981\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u5355\u72ec\u5f15\u5165\\r\\n- ios webp \u652f\u6301\u4e0d\u597d, \u9700\u8981\u5224\u65ad\u5e73\u53f0\u8d70\u4e0d\u540c\u7684\u538b\u7f29\\r\\n\\r\\n:::\\r\\n\\r\\n**\u7531\u4e8e\u4f7f\u7528\u4e86 composition-api \u5199\u6cd5 nuxt \u4f7f\u7528\u95ee\u9898**\\r\\n\\r\\n- \u83b7\u53d6\u53c2\u6570 \u53ef\u4ee5\u901a\u8fc7 useContext\\r\\n- \u670d\u52a1\u5668\u7aef\u8bf7\u6c42 \u4f7f\u7528 useFetch\\r\\n\\r\\n**\u9700\u8981\u5728\u5168\u5c40\u4efb\u4e00\u4f4d\u7f6e\u8bf7\u6c42\u7528\u6237\u4fe1\u606f\u63a5\u53e3,\u5e76\u4e14\u5b58\u50a8\u5230 store \u4e2d**\\r\\n\\r\\n```js title=\\"middleware/redirect.js\\"\\r\\n\\r\\nrouter: {\\r\\n  middleware: \'redirect\',\\r\\n},\\r\\n\\r\\nexport default async ({ isHMR, store }) => {\\r\\n  if (isHMR) return\\r\\n  if (!store.state.userInfos.uid) {\\r\\n    const { status, data } = await getUserInfo()\\r\\n    if (status === 1) {\\r\\n      getBasketflower()\\r\\n      store.commit(\'setUserInfo\', data.userInfos)\\r\\n    } else {\\r\\n      store.commit(\'delUserInfo\')\\r\\n    }\\r\\n  }\\r\\n}\\r\\n```\\r\\n\\r\\n**\u8def\u7531\u8bbf\u95ee\u7684\u65f6\u5019, \u5f53\u8bbf\u95ee\u9519\u8bef\u8def\u7531\u9700\u8981\u8df3\u8f6c\u5230\u9996\u9875\u8def\u7531**\\r\\n\\r\\n```javascript\\r\\nrouter: {\\r\\n    extendRoutes(routes, resolve) {\\r\\n        routes.push({\\r\\n            name: \'default\',\\r\\n            path: \'*\',\\r\\n            component: resolve(__dirname, \'pages/home\'),\\r\\n        })\\r\\n    },\\r\\n},\\r\\n```\\r\\n\\r\\n:::caution \u9700\u8981\u6ce8\u610f\u7684\u70b9:\\r\\n\\r\\n1. ios safari \u6d4f\u89c8\u5668 \u9ed8\u8ba4\u5c4f\u853d window.open \u5199\u4e00\u4e2a a \u6807\u7b7e\u89e6\u53d1 a\\r\\n2. swiper \u5728 nuxt \u4f7f\u7528\u7684\u65f6\u5019 \u9700\u8981\u5c06 swiper \u8bbe\u7f6e\u4e3a client, ssr:false, \u5e76\u4e14 swiper \u9700\u8981\u7528 client-only \u5305\u88f9\\r\\n3. props \u4f20\u53c2\u4e0d\u80fd\u7528\u89e3\u6784\u8d4b\u503c, \u9700\u8981\u7528 watch \u76d1\u542c props.xxx ,\u5426\u5219\u6570\u636e\u4e0d\u4f1a\u53d8\u5316\\r\\n\\r\\n:::\\r\\n**\u517c\u5bb9\u6027\u5904\u7406 browserslist**\\r\\n\\r\\n**\u8282\u6d41\u9632\u6296**\\r\\n\\r\\n**\u8bbe\u7f6e\u542f\u52a8\u7aef\u53e3(\u914d\u5408\u8fd0\u7ef4\u505a\u5e73\u6ed1\u542f\u52a8)**\\r\\n\\r\\n```javascript\\r\\n // package.json\\r\\n \\"config\\": {\\r\\n    \\"nuxt\\": {\\r\\n      \\"host\\": \\"0.0.0.0\\",\\r\\n      \\"port\\": \\"3000\\"\\r\\n    }\\r\\n  },\\r\\n```"},{"id":"welcome","metadata":{"permalink":"/doc/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/doc/blog/tags/facebook"},{"label":"hello","permalink":"/doc/blog/tags/hello"},{"label":"docusaurus","permalink":"/doc/blog/tags/docusaurus"}],"readingTime":0.405,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"prevItem":{"title":"Nuxt","permalink":"/doc/blog/2021/11/22/Nuxt"},"nextItem":{"title":"MDX Blog Post","permalink":"/doc/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\r\\n\\r\\nSimply add Markdown files (or folders) to the `blog` directory.\\r\\n\\r\\nRegular blog authors can be added to `authors.yml`.\\r\\n\\r\\nThe blog post date can be extracted from filenames, such as:\\r\\n\\r\\n- `2019-05-30-welcome.md`\\r\\n- `2019-05-30-welcome/index.md`\\r\\n\\r\\nA blog post folder can be convenient to co-locate blog post images:\\r\\n\\r\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\r\\n\\r\\nThe blog supports tags as well!\\r\\n\\r\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/doc/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/doc/blog/tags/docusaurus"}],"readingTime":0.175,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"prevItem":{"title":"Welcome","permalink":"/doc/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/doc/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\r\\n\\r\\n:::tip\\r\\n\\r\\nUse the power of React to create interactive blog posts.\\r\\n\\r\\n```js\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\r\\n```\\r\\n\\r\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\r\\n\\r\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/doc/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/doc/blog/tags/hello"},{"label":"docusaurus","permalink":"/doc/blog/tags/docusaurus"}],"readingTime":2.05,"truncated":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"prevItem":{"title":"MDX Blog Post","permalink":"/doc/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/doc/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\r\\n\\r\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\r\\n\\r\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/doc/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/edit/main/website/blog/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/doc/blog/tags/hola"},{"label":"docusaurus","permalink":"/doc/blog/tags/docusaurus"}],"readingTime":0.12,"truncated":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"prevItem":{"title":"Long Blog Post","permalink":"/doc/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);