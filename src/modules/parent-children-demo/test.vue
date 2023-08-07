// test.vue
<template>
  <div>
    <Parent> 
      <Children></Children>
      <Children></Children>
      <Children></Children>
      <Children></Children>
      <Children></Children>
      <Children></Children>
      <Children></Children>
      <Children></Children>
    </Parent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Parent from "./Parent.vue";
import Children from "./Children.vue";

export default defineComponent({
  components: {
    Parent,
    Children,
  },
  setup() {
    return {};
  },
});
</script>
