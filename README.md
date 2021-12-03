
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