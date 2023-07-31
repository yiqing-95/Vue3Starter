
关于表单共享问题


create跟update 页面会共用一个form组件

在做表单重置时 
- 针对 create 表单重置 到最初绑定的那个form_model上去 大都为空值
- 针对 update 功能 重置到刚加载的那个model去 可以借助store 或者 api重新根据id拉下相应的模型数据

如果表单是个复合组件 比如引入了editor 上传等组件 那么状态恢复会多一些步骤 需要一一恢复
可能涉及 nextTick 问题