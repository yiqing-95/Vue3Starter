import { defineComponent, ref } from "vue";
//@ts-ignore
const Child = (props, { slots }) => {
  return (
    <div>
      <div>{slots.slotOne()}</div>
      <div>{slots.slotTwo()}</div>
      <div>{slots.slotThree()}</div>
    </div>
  );
};

export default defineComponent({
  name: "FooSlots2",
  
  setup(props, ctx) {
    const num = ref(0);
    return () => (
      <Child>
        {{
          slotOne: () => <div>插槽1</div>,
          slotTwo: () => <div>插槽2</div>,
          slotThree: () => <div>插槽3</div>,
        }}
      </Child>
    );
  },
});