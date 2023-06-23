
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'//引入axios
// Vue.prototype.$axios = axios;//把axios挂载到vue上



export const useBaiduStore = defineStore('baiduStore', () => {
    const items = ref([])

    // axios.defaults.baseURL = 'https//www.baidu.com/s';
    axios.defaults.baseURL = '/api';
    // var instance = axios.create({
    //     // baseURL: 'https://api.example.com'
    //     // baseURL: 'https//www.baidu.com/s'
    //   });
    // 定义action
    function searchItems(key) {
        items.value = {}

       
        // axios
        // .get(`?wd=${key}`)
        // .then(response =>{
        //     console.log(response)
        // }) 
        // .catch(err =>{
        //     console.log(err)
        // })

        // axios({
        //     url: 's?wd=axios%20'
        // }).then(res => {
        //     console.log(res)
        // })
        const tableData = [
            {
                id: 1,
                date: '2016-05-03',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 2,
                date: '2016-05-02',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
            {
                id: 3,
                date: '2016-05-04',
                name: 'Tom',
                address: 'No. 189, Grove St, Los Angeles',
            },
        ]

        setTimeout(()=> {
            
            items.value = tableData

        }, 3000)
    }


    return {
        items, searchItems
    }
})

