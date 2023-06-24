<script setup>
import { onMounted } from 'vue'

import { useBaiduStore } from '~/modules/pinia-demo/store/baidu_search.js'

// import { foo } from '@/apis/app_test.js'
import { bar } from '@/apis/app_test.js'




import httpInstance from '@/utils/request'

// foo().then((res) => { console.log(res) }).catch((err) => { console.log(err) })

const baiduStore = useBaiduStore()

onMounted(() => {
    baiduStore.searchItems('vue')
})

const handleTestApi = () => {
    
    setTimeout(() => {
        bar().then((res) => { console.log('返回：', res) })
            .catch((err) => { console.log('[error:]', err) })
    }, 1000);
     return
    
        // 下面的请求是好的 👌 但axios 就不行？🙅‍♂️ 
    fetch('http://yiispace.com:7086/index.php?r=quick/test&table_name=user', 
        {
           //  method: 'POST',
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8",
            // },
            // body: 'foo=bar&lorem=ipsum',
        }
    )
        .then((response) => {
            return response.json();
        })
    .then((myJson) => {
        console.log(myJson);
    });


}
</script>

<template>
    <div>
        <button @click="baiduStore.searchItems('vue')">search items</button>
        hi baidu result: ...
        <ul>
            <li v-for="item in baiduStore.items" :key="item.id">
                {{ item.id }} >> {{ item.name }}
            </li>
        </ul>

        <button @click="handleTestApi()">测试api</button>
    </div>
</template>


<style lang="scss" scoped></style>