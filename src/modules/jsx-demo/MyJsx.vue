<script lang="jsx">
import { ref } from "vue";

export default {
  setup() {
    const count = ref(100);
    return () => <div>count is: {count.value}</div>;
  },
};
</script>

<style lang="scss" scoped>

</style>