"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[342],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),c=s(t),m=i,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return t?r.createElement(f,o(o({ref:e},p),{},{components:t})):r.createElement(f,o({ref:e},p))}));function m(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6677:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},u=void 0,s={unversionedId:"tutorial-basics/leetcode",id:"tutorial-basics/leetcode",title:"leetcode",description:"997. Find the Town Judge Easy",source:"@site/docs/tutorial-basics/leetcode.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/leetcode",permalink:"/doc/docs/tutorial-basics/leetcode",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/tutorial-basics/leetcode.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/doc/docs/tutorial-basics/JavaScript"},next:{title:"Nuxt",permalink:"/doc/docs/tutorial-basics/Nuxt"}},p=[{value:"997. Find the Town Judge Easy",id:"997-find-the-town-judge-easy",children:[],level:3},{value:"1010. Pairs of Songs With Total Durations Divisible by 60 Medium",id:"1010-pairs-of-songs-with-total-durations-divisible-by-60-medium",children:[],level:3},{value:"1026. Maximum Difference Between Node and Ancestor Medium",id:"1026-maximum-difference-between-node-and-ancestor-medium",children:[],level:3},{value:"1009. Complement of Base 10 Integer Easy",id:"1009-complement-of-base-10-integer-easy",children:[],level:3},{value:"131. Palindrome Partitioning Medium",id:"131-palindrome-partitioning-medium",children:[],level:3},{value:"1094. Car Pooling Medium",id:"1094-car-pooling-medium",children:[],level:3},{value:"382. Linked List Random Node Medium",id:"382-linked-list-random-node-medium",children:[],level:3},{value:"1041. Robot Bounded In Circle Medium",id:"1041-robot-bounded-in-circle-medium",children:[],level:3},{value:"701. Insert into a Binary Search Tree  Medium",id:"701-insert-into-a-binary-search-tree--medium",children:[],level:3}],d={toc:p};function c(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"997-find-the-town-judge-easy"},"997. Find the Town Judge Easy"),(0,a.kt)("p",null,"time: 2022-01-03"),(0,a.kt)("p",null,"You are given an array trust where trust","[i]"," = ","[ai, bi]"," representing that the person labeled ai trusts the person labeled bi."),(0,a.kt)("p",null,"Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: n = 3, trust = [[1,3],[2,3]]\nOutput: 3\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number} n\n * @param {number[][]} trust\n * @return {number}\n */\nvar findJudge = function (n, trust) {\n  // \u83b7\u53d6 \u7f3a\u5c11\u7684\u90a3\u4e2a \u8282\u70b9\n  let arr = new Array(n).fill(0);\n  // \u83b7\u53d6 \u90fd\u4fe1\u4efb\u7684\u90a3\u4e2a \u8282\u70b9\n  let trusterArr = new Array(n).fill(0);\n\n  for (const [iterator, truster] of trust) {\n    arr[iterator - 1]++;\n    trusterArr[truster - 1]++;\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (arr[i] === 0 && trusterArr[i] === n - 1) {\n      return i + 1;\n    }\n  }\n\n  return -1;\n};\n")),(0,a.kt)("h3",{id:"1010-pairs-of-songs-with-total-durations-divisible-by-60-medium"},"1010. Pairs of Songs With Total Durations Divisible by 60 Medium"),(0,a.kt)("p",null,"time: 2022-01-02"),(0,a.kt)("p",null,"You are given a list of songs where the ith song has a duration of time","[i]"," seconds."),(0,a.kt)("p",null,"Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time","[i]"," + time","[j]",") % 60 == 0."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: time = [30,20,150,100,40]\nOutput: 3\nExplanation: Three pairs have a total duration divisible by 60:\n(time[0] = 30, time[2] = 150): total duration 180\n(time[1] = 20, time[3] = 100): total duration 120\n(time[1] = 20, time[4] = 40): total duration 60\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} time\n * @return {number}\n */\nvar numPairsDivisibleBy60 = function (time) {\n  let result = 0;\n  const arr = new Array(60).fill(0);\n\n  for (const iterator of time) {\n    arr[iterator % 60]++;\n  }\n\n  for (let i = 0; i <= 30; i++) {\n    if (i !== 0 && i !== 30) {\n      result += arr[i] * arr[60 - i];\n    } else {\n      result += (arr[i] * (arr[i] - 1)) / 2;\n    }\n  }\n\n  return result;\n};\n")),(0,a.kt)("h3",{id:"1026-maximum-difference-between-node-and-ancestor-medium"},"1026. Maximum Difference Between Node and Ancestor Medium"),(0,a.kt)("p",null,"time: 2022-01-03"),(0,a.kt)("p",null,"Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b."),(0,a.kt)("p",null,"A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [8,3,10,1,6,null,14,null,null,4,7,13]\nOutput: 7\nExplanation: We have various ancestor-node differences, some of which are given below :\n|8 - 3| = 5\n|3 - 7| = 4\n|8 - 1| = 7\n|10 - 13| = 3\nAmong all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxAncestorDiff = function (root) {\n  if (root === null) return 0;\n  return fn(root, root.val, root.val);\n};\n\nconst fn = (node, curMax, curMin) => {\n  if (node === null) return curMax - curMin;\n\n  curMax = Math.max(curMax, node.val);\n  curMin = Math.min(curMin, node.val);\n\n  const left = fn(node.left, curMax, curMin);\n  const right = fn(node.right, curMax, curMin);\n\n  return Math.max(left, right);\n};\n")),(0,a.kt)("h3",{id:"1009-complement-of-base-10-integer-easy"},"1009. Complement of Base 10 Integer Easy"),(0,a.kt)("p",null,"time: 2022-01-04"),(0,a.kt)("p",null,"The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation."),(0,a.kt)("p",null,'For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.\nGiven an integer n, return its complement.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: n = 5\nOutput: 2\nExplanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {number} n\n * @return {number}\n */\nvar bitwiseComplement = function (n) {\n  return Number.parseInt(\n    n\n      .toString(2)\n      .split("")\n      .map((item) => (item === "1" ? 0 : 1))\n      .join(""),\n    2\n  );\n};\n')),(0,a.kt)("h3",{id:"131-palindrome-partitioning-medium"},"131. Palindrome Partitioning Medium"),(0,a.kt)("p",null,"2022-01-05"),(0,a.kt)("p",null,"Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s."),(0,a.kt)("p",null,"A palindrome string is a string that reads the same backward as forward."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: s = "aab"\nOutput: [["a","a","b"],["aa","b"]]\n\nInput: s = "a"\nOutput: [["a"]]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {string} s\n * @return {string[][]}\n */\nvar partition = function (s) {\n  if (s.length === 1) return [[s]];\n  let resultArr = new Array();\n\n  function helper(s, partitionedArr, index) {\n    if (index === s.length) {\n      resultArr.push([...partitionedArr]);\n      return;\n    }\n    for (let i = index; i < s.length; i++) {\n      if (isPalindrome(s, index, i)) {\n        // passing in index as 'left' and i as 'right', as i tends to move faster because of loop increment\n        //choose\n        partitionedArr.push(s.slice(index, i + 1));\n        //explore\n        helper(s, partitionedArr, i + 1); // keeping index = i + 1, as it will help in moving one step forward in the 's'\n        //unchoose\n        partitionedArr.pop();\n      }\n    }\n  }\n\n  helper(s, new Array(), 0);\n  return resultArr;\n};\n\nfunction isPalindrome(s, left, right) {\n  while (left < right) {\n    if (s[left] != s[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n")),(0,a.kt)("h3",{id:"1094-car-pooling-medium"},"1094. Car Pooling Medium"),(0,a.kt)("p",null,"2022-01-06"),(0,a.kt)("p",null,"There is a car with capacity empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west)."),(0,a.kt)("p",null,"You are given the integer capacity and an array trips where trip","[i]"," = ","[numPassengersi, fromi, toi]"," indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively. The locations are given as the number of kilometers due east from the car's initial location."),(0,a.kt)("p",null,"Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: trips = [[2,1,5],[3,3,7]], capacity = 4\nOutput: false\n\nInput: trips = [[2,1,5],[3,3,7]], capacity = 5\nOutput: true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @param {number[][]} trips\n * @param {number} capacity\n * @return {boolean}\n */\nvar carPooling = function (trips, capacity) {\n  if (trips.length === 1) {\n    return capacity >= trips[0][0];\n  }\n  let arr = new Array(1000).fill(0);\n  for (var i = 0; i < trips.length; i++) {\n    for (var j = trips[i][1]; j < trips[i][2]; j++) {\n      arr[j] += trips[i][0];\n      if (arr[j] > capacity) {\n        return false;\n      }\n    }\n  }\n  return true;\n};\n")),(0,a.kt)("h3",{id:"382-linked-list-random-node-medium"},"382. Linked List Random Node Medium"),(0,a.kt)("p",null,"2022-01-07"),(0,a.kt)("p",null,"Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen."),(0,a.kt)("p",null,"Implement the Solution class:"),(0,a.kt)("p",null,"Solution(ListNode head) Initializes the object with the integer array nums.\nint getRandom() Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be choosen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input\n["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]\n[[[1, 2, 3]], [], [], [], [], []]\nOutput\n[null, 1, 3, 2, 2, 3]\n\nExplanation\nSolution solution = new Solution([1, 2, 3]);\nsolution.getRandom(); // return 1\nsolution.getRandom(); // return 3\nsolution.getRandom(); // return 2\nsolution.getRandom(); // return 2\nsolution.getRandom(); // return 3\n// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n */\nvar Solution = function (head) {\n  this.head = head;\n  this.count = 0;\n  let cur = head;\n  while (cur) (cur = cur.next), this.count++;\n};\n\n/**\n * @return {number}\n */\nSolution.prototype.getRandom = function (head = this.head, N = this.count) {\n  let cur = head;\n  let hops = Math.floor(Math.random() * N);\n  while (hops--) cur = cur.next;\n  return cur.val;\n};\n\n/**\n * Your Solution object will be instantiated and called as such:\n * var obj = new Solution(head)\n * var param_1 = obj.getRandom()\n */\n")),(0,a.kt)("h3",{id:"1041-robot-bounded-in-circle-medium"},"1041. Robot Bounded In Circle Medium"),(0,a.kt)("p",null,"2022-01-09"),(0,a.kt)("p",null,"On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"G": go straight 1 unit;'),(0,a.kt)("li",{parentName:"ul"},'"L": turn 90 degrees to the left;'),(0,a.kt)("li",{parentName:"ul"},'"R": turn 90 degrees to the right.\nThe robot performs the instructions given in order, and repeats them forever.')),(0,a.kt)("p",null,"Return true if and only if there exists a circle in the plane such that the robot never leaves the circle."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Input: instructions = "GGLLGG"\nOutput: true\nExplanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).\nWhen repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.\n\nInput: instructions = "GG"\nOutput: false\nExplanation: The robot moves north indefinitely.\n\nInput: instructions = "GL"\nOutput: true\nExplanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * @param {string} instructions\n * @return {boolean}\n */\nvar isRobotBounded = function (instructions) {\n  const arr = instructions.split("");\n  let currentX = 0;\n  let currentY = 0;\n  let direction = 1;\n  arr.map((item) => {\n    if (item === "G") {\n      if (direction === 1) {\n        currentX += 1;\n      } else if (direction === 2) {\n        currentY += 1;\n      } else if (direction === 3) {\n        currentX -= 1;\n      } else if (direction === 4) {\n        currentY -= 1;\n      }\n    } else if (item === "L") {\n      if (direction === 1) {\n        direction = 4;\n      } else {\n        direction -= 1;\n      }\n    } else if (item === "R") {\n      if (direction === 4) {\n        direction = 1;\n      } else {\n        direction += 1;\n      }\n    }\n    return item;\n  });\n  return (currentX === 0 && currentY === 0) || direction !== 1;\n};\n')),(0,a.kt)("h3",{id:"701-insert-into-a-binary-search-tree--medium"},"701. Insert into a Binary Search Tree  Medium"),(0,a.kt)("p",null,"2022-01-12"),(0,a.kt)("p",null,"You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST."),(0,a.kt)("p",null,"Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: root = [4,2,7,1,3], val = 5\nOutput: [4,2,7,1,3,5]\nExplanation: Another accepted tree is:\n\nInput: root = [40,20,60,10,30,50,70], val = 25\nOutput: [40,20,60,10,30,50,70,null,null,25]\n\nInput: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5\nOutput: [4,2,7,1,3,5]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} val\n * @return {TreeNode}\n */\nvar insertIntoBST = function(root, val) {\n    if(!root) {\n        return root = new TreeNode(val)\n    }\n    fn(root, val)\n    return root\n    function fn(root, val) {\n        if(!root) {\n            return ''\n        }\n        if(val > root.val) {\n            if(root.right) {\n                fn(root.right, val)\n            }else {\n                root.right = new TreeNode(val)\n            }\n        }else {\n            if(root.left) {\n                fn(root.left, val)\n            }else {\n                root.left = new TreeNode(val)\n            }\n        }\n    }\n};\n")))}c.isMDXComponent=!0}}]);