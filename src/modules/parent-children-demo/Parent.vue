<template>
    <div class="parent">
        {{ msg }}

        <Children ref="childrenRef"></Children>

        <slot></slot>
    </div>
</template>
  
<script >
import { defineComponent, getCurrentInstance } from "vue";
import { onMounted, ref } from "vue";
import Children from "./Children.vue";

export default defineComponent({
    components: {
        Children,
    },
    setup(props, context) {
        console.log(context);
        const defaults = context.slots.default()
        console.log(defaults);
        defaults.forEach((item) => {
            console.log(item.type === Children);
        });

        const instance = getCurrentInstance();
        console.log(instance);
        let msg = "我是父组件";
        // return { msg };

        const childrenRef = ref(null);

        onMounted(() => {
            console.log(childrenRef);
            console.log(childrenRef.value);
            // 还可以调用子组件的方法
            childrenRef.value.setCounter(2);
        });

        return { childrenRef, msg };

    },
});
</script>
  
<style scoped>
.parent {
    color: rgb(233, 35, 0);
    position: relative;
    font-size: 30px;
}
</style>
  