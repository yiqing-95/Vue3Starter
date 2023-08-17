@see  https://blog.csdn.net/weixin_58032613/article/details/122607730

js 类型检测：

各有利弊 jquery里面也有类型检测方法 ，不过业界好像都普遍使用的3 toString方法

1️⃣ 使用typeof运算符
    这个只是做基本归类
    console.log(
    typeof 100, //"number"
    typeof 'abc', //"string"
    typeof false, //"boolean"
    typeof undefined, //"undefined"
    typeof null, //"object"
    typeof [1,2,3], //"object"
    typeof {a:1,b:2,c:3}, //"object"
    typeof function(){console.log('aaa');}, //"function"
    typeof new Date(), //"object"
    typeof /^[a-zA-Z]{5,20}$/, //"object"
    typeof new Error() //"object"
    typeof new Number(100), //'object'
    typeof new String('abc'),// 'string'
    typeof new Boolean(true),//'boolean'
);


2️⃣ 使用instanceof运算符
    console.log(
    100 instanceof Number, //false
    'dsfsf' instanceof String, //false
    false instanceof Boolean, //false
    undefined instanceof Object, //false
    null instanceof Object, //false
    [1,2,3] instanceof Array, //true
    {a:1,b:2,c:3} instanceof Object, //true
    function(){console.log('aaa');} instanceof Function, //true
    new Date() instanceof Date, //true
    /^[a-zA-Z]{5,20}$/ instanceof RegExp, //true
    new Error() instanceof Error //true
)

3️⃣ 使用Object.prototype.toString方法
    var toString = Object.prototype.toString;

toString.call(123); //"[object Number]"
toString.call('abcdef'); //"[object String]"
toString.call(true); //"[object Boolean]"
toString.call([1, 2, 3, 4]); //"[object Array]"
toString.call({name:'wenzi', age:25}); //"[object Object]"
toString.call(function(){ console.log('this is function'); }); //"[object Function]"
toString.call(undefined); //"[object Undefined]"
toString.call(null); //"[object Null]"
toString.call(new Date()); //"[object Date]"
toString.call(/^[a-zA-Z]{5,20}$/); //"[object RegExp]"
toString.call(new Error()); //"[object Error]"


4️⃣ 使用Array.isArray方法
5️⃣ 使用instanceof和构造函数
6️⃣ 使用Object.getPrototypeOf方法
7️⃣ 使用constructor属性
    undefined和null没有constructor属性 所以可以先做排除
    typeof undefined == 'undefined'
    typeof null == 'object'

    var num  = 123;
var str  = 'abcdef';
var bool = true;
var arr  = [1, 2, 3, 4];
var json = {name:'wenzi', age:25};
var func = function(){ console.log('this is function'); }
var und  = undefined;
var nul  = null;
var date = new Date();
var reg  = /^[a-zA-Z]{5,20}$/;
var error= new Error();

function Person(){
  
}
var tom = new Person();

// undefined和null没有constructor属性
console.log(
    tom.constructor==Person,
    num.constructor==Number,
    str.constructor==String,
    bool.constructor==Boolean,
    arr.constructor==Array,
    json.constructor==Object,
    func.constructor==Function,
    date.constructor==Date,
    reg.constructor==RegExp,
    error.constructor==Error
);
//所有结果均为true

8️⃣ 使用Symbol.toStringTag属性


## 自己封装：

~~~js
function gettype(obj) {
  var type = typeof obj;

  if (type !== 'object') {
    return type;
  }
  //如果不是object类型的数据，直接用typeof就能判断出来

  //如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}

~~~