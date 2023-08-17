
关于表单共享问题


create跟update 页面会共用一个form组件

在做表单重置时 
- 针对 create 表单重置 到最初绑定的那个form_model上去 大都为空值
- 针对 update 功能 重置到刚加载的那个model去 可以借助store 或者 api重新根据id拉下相应的模型数据

如果表单是个复合组件 比如引入了editor 上传等组件 那么状态恢复会多一些步骤 需要一一恢复
可能涉及 nextTick 问题

### toRaw

响应式对象脱壳为原始对象 

@see https://www.5axxw.com/questions/content/ndzbnq
>>> 
    reactive返回JavaScriptProxy，该JavaScript不公开原始对象，除非代理是可撤销的。

    原始对象可以通过reactive代理上的__v_raw属性访问，它不是公共API的一部分，不应该依赖。公共API是toRaw：

    const token = reactive(rawToken);
    const rawToken = toRaw(token);

    如果需要原始对象，则不应放弃引用：

    const rawToken = new Token();
    const token = reactive(rawToken);

