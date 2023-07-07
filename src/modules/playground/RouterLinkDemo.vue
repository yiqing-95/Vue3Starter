<script setup>
import {useRouter, useRoute} from 'vue-router'

let router = useRouter() // 等同vue2 this.$router
let route = useRoute()   // <==> this.$route

const goAbout = ()=>{
    alert('hia') ;
    router.push('/about')
}


</script>

<template>
    <!-- https://www.mianshigee.com/note/detail/55548bay/ -->
    <div>
        <el-button type="success" @click="goAbout">跳转</el-button>
        <button @click="goAbout">跳转</button>

        <router-link to="https://router.vuejs.org/zh/">vue-router官网</router-link>

        <!-- 字符串 -->
        <router-link to="home">Home</router-link>

        <!-- 使用 v-bind 的 JS 表达式 -->
        <router-link v-bind:to="'home'">Home</router-link>

        <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
        <router-link :to="'home'">Home</router-link>

        <!-- 同上 -->
        <router-link :to="{ path: 'home' }">Home</router-link>

        <!-- 命名的路由 -->
        <!-- <router-link :to="{ name: 'user', params: { userId: 123 } }">User</router-link> -->

        <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <!-- <router-link :to="{ path: 'register', query: { plan: 'private' } }">Register</router-link> -->



    </div>
    <div>
        <!-- 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，导航后不会留下 history 记录 -->
        <router-link :to="{ path: '/hello' }" replace></router-link>

        <!-- 设置 append 属性后，则在当前 (相对) 路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b -->
        <router-link :to="{ path: 'relative/path' }" append></router-link>

        有时候想要 渲染成某种标签，例如

        <!-- 于是我们使用 tag prop 类指定何种标签，同样它还是会监听点击，触发导航。 FIXME：已失效 -->
        <router-link to="/foo" tag="li">foo</router-link>

        <p>
            <!-- 设置 链接激活时使用的 CSS 类名 -->
            <router-link v-bind:to="{ path: '/route1' }" active-class="_active">Router Link 1</router-link>
            <router-link v-bind:to="{ path: '/route2' }" tag="span">Router Link 2</router-link>
        </p>

        <p>
            exact-active-class

            <!-- 配置当链接被精确匹配的时候应该激活的 class。可以通过以下代码来替代。 -->
            <router-link v-bind:to="{ path: '/route1' }" exact-active-class="_active">Router Link 1</router-link>
            <router-link v-bind:to="{ path: '/route2' }" tag="span">Router Link 2</router-link>
        </p>
        <p>
            <!-- 声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。 -->
            <router-link v-bind:to = "{ path: '/route1'}" event = "mouseover">Router Link 1</router-link>
            <!-- event 为 mouseover ，及在鼠标移动到 Router Link 1 上时导航的 HTML 内容会发生改变。 -->
        </p>
    </div>
</template>


<style lang="scss" scoped>
._active {
    background-color: red;
}
</style>