import { defineComponent, ref } from "vue";

const Child = (props, { slots }) => {
  return <div>{slots.default()}</div>;
};

export default defineComponent({
  name: "FooSlots",
  setup(props, ctx) {
    const num = ref(0);
    return () => <Child>默认插槽</Child>;
  },
});