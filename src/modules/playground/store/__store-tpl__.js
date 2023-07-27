import {defineStore} from 'pinia'

// id 应该全局唯一
export const playStore = defineStore('playStore',{
    state:()=> {
        return {
            count: 1 ,
        }
    },
    getters:{},
    actions:{},
})