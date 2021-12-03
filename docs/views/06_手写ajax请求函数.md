# 7.手写ajax请求函数

## 7.1.API 相关

- 语法：
  - axios(options)
    - 参数配置对象：url, method, params与data
    - 返回值为：promise对象
  - axios.get(url, options)
  - axios.post(url, data, options)
  - axios.put(url, data, options)
  - axios.delete(url, options)
- 功能：使用xhr发送ajax请求的工具函数，与axios库功能类似

## 7.2. 实现整体流程

1. 函数的参数为一个配置对象

   {
   	url: '',   // 请求地址
   	method: '',   // 请求方式GET/POST/PUT/DELETE
   	params: {},  // GET/DELETE请求的query参数
   	data: {}, // POST或DELETE请求的请求体参数 
   }

2. 返回值: 函数的返回值为promise, 成功的结果为response, 失败的结果为error

3. 能处理多种类型的请求: GET/POST/PUT/DELETE

4. 响应json数据自动解析为js的对象/数组


## 7.3.测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>手写ajax请求函数</title>
</head>
<body>
  <button onclick="testGet()">发送GET请求</button><br>
  <button onclick="testPost()">发送POST请求</button><br>
  <button onclick="testPut()">发送PUT请求</button><br>
  <button onclick="testDelete()">发送Delete请求</button><br>
    
<script src="http://z.lxandzjy.top/lz_tool.js"></script>
<script>
  const { axios } = lz

  /* 1. GET请求: 从服务器端获取数据*/
  function testGet() {
    axios({
      // url: 'http://localhost:3000/posts',
      url: 'http://localhost:3000/posts2',
      method: 'GET',
      params: {
        id: 1,
        xxx: 'abc'
      }
    })
    // axios.get('http://localhost:3000/posts', {params: {id: 1}})
    .then(
      response => {
        console.log(response)
      },
      error => {
        alert(error.message)
      }
    )
  }

  /* 2. POST请求: 服务器端保存数据*/
  function testPost() {
    axios({
      url: 'http://localhost:3000/posts',
      method: 'POST',
      data: {
        "title": "json-server---", 
        "author": "typicode---"
      }
    })
    // axios.post('http://localhost:3000/posts', {title: 'aaa', author: 'bbb'})
    .then(
      response => {
        console.log(response)
      },
      error => {
        alert(error.message)
      }
    )
  }

  /* 3. PUT请求: 服务器端更新数据*/
  function testPut() {
    axios({
      url: 'http://localhost:3000/posts/1',
      method: 'put',
      data: {
        "title": "json-server+++", 
        "author": "typicode+++"
      }
    })
    // axios.put('http://localhost:3000/posts/1', {title: 'aaa222', author: 'bbb222'})
    .then(
      response => {
        console.log(response)
      },
      error => {
        alert(error.message)
      }
    )
  }

  /* 2. DELETE请求: 服务器端删除数据*/
  function testDelete() {
    axios({
      url: 'http://localhost:3000/posts/2',
      method: 'delete'
    })
    // axios.delete('http://localhost:3000/posts/2')
    .then(
      response => {
        console.log(response)
      },
      error => {
        alert(error.message)
      }
    )
  }
</script>
</body>
</html>
```

