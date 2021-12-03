---
home: true
# heroImage: /hero.png
heroText: lz-tool
tagline: 自定义工具函数库
actionText: 快速上手 →
actionLink: views/01_函数相关.md
features:
- title: 模块化
  details: 自定义实现函数，数组，对象，字符串，axios相关的函数。
- title: 高效极简
  details: 通过script标签引入的文件，仅有6.33kb。同时支持多种方式导入。
- title: 未来期望
  details: 希望实现像Lodash一样的工具库,Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。
---

:tada: :tada: :tada: :100: :100: :100: :yellow_heart: :heart: :blue_heart: 
```js
  npm i --save lz-tool
  // Load the full build.
  var lz = require('lz-tool');

  // example
  const arr = [1,3,4,3,4,5];
  lz.chunk(arr,2);    // => [[1,3],[4,3],[4,5]]
  
  // 目前也支持cdn引入, 暴露对象为    lz
  <script src="http://z.lxandzjy.top/lz_tool.js"></script>
```
  