
import {computed, ref} from 'vue'
import {defineStore} from 'pinia'

import axios from 'axios'//引入axios
// Vue.prototype.$axios = axios;//把axios挂载到vue上



export const useBaiduStore = defineStore('baiduStore',()=>{
    const items = ref([])

    // axios.defaults.baseURL = 'https//www.baidu.com/s';
    axios.defaults.baseURL = '/baidu';
    // var instance = axios.create({
    //     // baseURL: 'https://api.example.com'
    //     // baseURL: 'https//www.baidu.com/s'
    //   });
    // 定义action
    function searchItems(key){
      
        // axios
        // .get(`?wd=${key}`)
        // .then(response =>{
        //     console.log(response)
        // }) 
        // .catch(err =>{
        //     console.log(err)
        // })
        axios({
            url: '/baidu/s?wd=axios%20'
        }).then(res => {
            console.log(res)
        })
    }


    return {
        items, searchItems
    }
})

