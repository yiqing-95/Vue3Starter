有些api适合做状态缓存 比如动态菜单   动态商品分类 并且很多页面或者组件需要用到相同的数据 重复请求就
浪费了 可以引入 vuex| pinia 状态管理方案


## api 调用是Promise

Promise的调用 js中有两种方法 

- 使用 then 
    这种方案 一般可以自己处理 错误情况 

- 使用 async/await 方案
    这种方案 一般只处理成功情况 错误情况在axios中做了统一的拦截处理 目前是主流做法 比较省事 统一 
    直接拿请求成功的结果

⚠️注意 平常的方法 加async修饰也是没问题的 就是里面可以不出现await 对promise的调用

[可以看看这里👀 有简单描述](https://www.eggjs.org/zh-CN/intro/egg-and-koa)