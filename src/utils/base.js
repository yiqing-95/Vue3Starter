

/**
 * https://www.jianshu.com/p/a615efed434a
 */
function deepClone(target){
    // 判断要处理的目标是数组还是对象
    let newObj = target.constructor === Array ? [] : {};
    // 遍历目标：in运算符会拿到原型上继承到的属性
    for (let attr in target){
        // 判断属性是否在当前对象自身
        if (target.hasOwnProperty(attr)) {
            // 如果值是对象或数组，就递归一下
            if (target[attr] && typeof target[attr] === "object") {
                newObj[attr] = target[attr].constructor === Array ? [] : {};
                newObj[attr] = deepClone(target[attr]);
            }else if(typeof target[attr] === "function"){
                // 如果是函数，就复制一个新函数
                newObj[attr] = target[attr].bind(target);
            }else{
                // 如果不是对象，数组，函数，就直接赋值
                newObj[attr] = target[attr];
            }
        }
    }
    return newObj;
}
