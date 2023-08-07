// Children.vue
<template>
  <div class="children">
    <h2>我是子组件</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { expose }) {
    let counter = ref(0);
    const setCounter = (count: number) => {
      counter.value = count;
    };

    expose({
      setCounter,
    });
    return { counter };
  },
});

// 作者：踏莎行
// 链接：https://www.jianshu.com/p/a777d61ce10d
// 来源：简书
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</script>
