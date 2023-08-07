import httpInstance from '@/utils/request'

export function foo() {
    return httpInstance({
        url:'foo'
    })
}

export function bar() {
    return httpInstance({
        
        // url:'?r=quick/test&table_name=user',
        params:{
            r:'quick/test'
            ,table_name:'user'
        },
            // withCredentials: true,
            // put the rest of your config here
            // 🤭 好像不管用
            headers:{
                'Content-Type': 'text/plain',
                'some-thing':'some-value'
            }
    })
}

// ## 接口地址

const userIndex = ''


export function getUsers(){
    return httpInstance({
        url: ''
    })
}

/**
 * export  default {
 *      getUsers, //
 *      items(){
 * 
 *      },
 *      delete(){
 *      },
 *      update(){
 *      }
 * 
 * }
 * 
 */