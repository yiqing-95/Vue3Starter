<template>
    <div>
        <div class="model__content--input">
            <div>v-model绑定checkbox，多选时，绑定的是一个数组</div>
            <input value="苹果" v-model="fruit" type="checkbox" />苹果
            <input value="橘子" v-model="fruit" type="checkbox" />橘子
            <input value="西瓜" v-model="fruit" type="checkbox" />西瓜
            <input value="柚子" v-model="fruit" type="checkbox" />柚子
            <input value="荔枝" v-model="fruit" type="checkbox" />荔枝
            <input value="Mango" v-model="fruit" type="checkbox" />芒果
            <input value="香蕉" :model-value="fruit" type="checkbox" @change="(selected)=>console.log(selected)" />香蕉🍌
            <div>你喜欢吃的水果有：{{ fruit }}</div>
        </div>
    </div>
</template>

<script >
import { defineComponent } from 'vue'
const MyChild = defineComponent({
    'name': 'MyChild',
    data() {
        return {
            msg: 'hi MyChild',
            fruit: []
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

export default MyChild
</script>






<style lang="scss" scoped></style>