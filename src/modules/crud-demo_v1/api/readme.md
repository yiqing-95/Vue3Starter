发现有人把api用provide/inject

依赖注入风格来使用了 

在入口文件main中 提供api   这个名字要考虑下 尽量不要冲突 
$api.user_ops , $api.users  $api_users  ... 找一种风格坚持下去


在组件中 直接inject('$api...')   