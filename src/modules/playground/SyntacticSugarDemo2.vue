<script setup>
import { ref , defineComponent } from 'vue'

const test = ref('hi this is syntactic sugar demo')

const checked = ref(true)
const agree = ref(true)
const value = ref('some text')

const MyChild =  defineComponent({
    'name': 'MyChild',
    data() {
        return {
            msg: 'hi MyChild'
        }
    }
    , template: `
          <div>
            djfjasdjfjj
                 {{ msg }}
                <!-- 2. 监听 input 事件的出发 -->
                <input type="text" :value="value" @input="input" />
          </div>
    `
    // 1. 接受父级传递的值
    , props: {
        value: {
            type: String,
            default: ""
        }
    },
    methods: {
        input(event) {
            this.$emit("input", event.target.value);
        }
    }
})

 

</script>

<template>
    <div>
        <!-- <component:is="MyChild"/>  -->
        <ul>
            <li>
                参考：https://www.jianshu.com/p/f8b7bf92d3dd
            </li>
        </ul>
        <p>
            v-model的本质是属性绑定和事件绑定的结合，可以在标签上使用也可以在组件上使用
        </p>
        <p>
            vue3 中 v-model的本质是 :modelValue 和 @update:modelValue 两者的绑定

            所以在 子组件 中响应定义modelValue属性

            可以绑定多个v-model:
        </p>

        <div>
            <h4>单向数据绑定</h4>
            <p>

                v-bind实现单项的数据绑定，即通过父组件向子组件传入数据 ，
                但反之，子组件却不可以修改父组件传递过来的数据 ，此即谓单向数据绑定。
            </p>

            <h4>双向数据绑定</h4>
            <p>
                v-bind和v-on实现了双向绑定实现了双向数据绑定。
            <pre>
                    <input type="text" v-bind:value="value" v-on:input="value = $event.target.value" />
                    或
                    <input type="text" :value="value" @input="value = $event.target.value" />

                </pre>
            v-model是v-bind和v-on的语法糖，即，v-model算是v-band和v-on的简洁写法。
            <input type="text" v-model="value" />
            本质上是Vue内部的v-model是完成事件绑定 和事件监听 的语法糖
            </p>
        </div>

        <input v-model="test">
        <input :value="test" @input="test = $event.target.value">

        <input type="checkbox" name="vehicle" value="Car" checked="checked" /> I have a car
        <input type="checkbox" name="vehicle" v-model="agree" /> I agree
        <input type="checkbox" name="vehicle" v-model="agree" /> I agree


        <div>
            在组件中使用v-model
            <!-- <MyChild></MyChild> -->
            孩子之后
        </div>
    </div>
</template>



<style lang="scss" scoped></style>