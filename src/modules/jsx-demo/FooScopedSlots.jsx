import { defineComponent, ref } from "vue";
//@ts-ignore
const Child = (props, { slots }) => {
  const prama1 = "data from child component";
  return (
    <div>
      <div>{slots.slotOne(prama1)}</div>
      <div>{slots.slotTwo()}</div>
      <div>{slots.slotThree()}</div>
    </div>
  );
};

export default defineComponent({
  name: "FooScopedSlots",
  setup(props, ctx) {
    return () => (
      // ts: slotOne: (pramas: string) => <div>{pramas}</div>,

      <Child>
        {{
          slotOne: (pramas) => <div>{pramas}</div>,
          slotTwo: <div>插槽2</div>,
          slotThree: <div>插槽3</div>,
        }}
      </Child>
    );
  },
});
