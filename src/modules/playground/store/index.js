import {defineStore} from 'pinia'

export const playStore = defineStore('playStore',{
    state:()=> {
        let count = ref(1) ;
        let num = ref(1) ;

        // const incCount = ()=>{
        //    return count.value ++ 
        // }
        return {
            count ,
            num,
            // incCount
        }
    },
    getters:{
        sum(){
            // 多次调用只会有一个管用哦
            console.log("[getter is called]!")
            // 😂 一会有value 一会没value 搞得很混乱啊
            // return this.count.value + this.num.value
            return this.count + this.num
        }
    },
    // action 同时支持同步 异步数据更新
    actions:{
        updateNum(num){
            // this.num.value ++
            console.log(this.num) 
            this.num += num
        }
    },
})