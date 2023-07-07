import { defineComponent, ref } from "vue";
// 使用render 选项
export default const Foo = defineComponent({
    name: "Foo",
    render() {
        // 可以访问到this 
        return <div class="my-foo">我是一个 Foo </div>;
    },
});
// 子组件
export  const FooBar = defineComponent({
    name: "FooBar",
    props: ['title',],
    setup(props) {
        const count = ref(0);
        const { title } = props; // 解构出属性title 属性一般通过父组件传入
        const reactiveCount = reactive({ value, 0});

        return {
            count,
            title,
            reactiveCount,
        }
    },
    render() {
        // 可以访问到this 
        const {
            count,
            title,
            reactiveCount,
        } = this ;
        return <div class="my-foo">我是一个 Foo </div>;
    },
});


// setup中返回
// 在setup 里面返回渲染函数 那么Vue官方调试工具就看不到定义在setup里面 的数据了
export const Foo2 = defineComponent({
    name: "Foo2",
    setup(props, { }) {
        // props 可以访问到父组件传递的属性
        // 访问不到this
        return () => <div style={{ color: "red" }}>
            Foo2

            <Foo></Foo>

        </div>;
    },
});
export const Foo3 = defineComponent({
    name: "Foo3",
    setup(props, { }) {

        const handleClick = () => {
            console.log('click');
        };

        return () => <div style={{ color: "red" }}>
            Foo2

            <button onClick={handleClick}>click me</button>

        </div>;
    },
});

export const Foo4 = defineComponent({
    name: "Foo4",
    emits: ["event"],
    setup(props, { emit }) {
        function sendData() {
            emit("event", "子组件传递的数据");
        }
        return () => (
            <div>
                <span>自定义事件</span>
                <button onClick={sendData}>传递数据</button>
            </div>
        );
    },
});

export const Foo5 = defineComponent({
    name: "Foo5",
    setup() {
        function handleChildEvent(msg: string) {
            console.log(msg);
        }
        // 也可以这样处理事件 <ComponentX {...{ onEvent: handleChildEvent }} />
        return () => (
            <div>
                <Foo4 onEvent={handleChildEvent} />
            </div>
        );
    },
});

export const FooWithSlots = defineComponent({
    name: "FooWithSlots",
    setup(props, { slots }) {

        // 子组件
        return () => (
            <div>
                <span>插槽</span>
                {slots.default?.()}
                {slots.test?.()}
            </div>
        );

    },
});
export const FooUsingSlots = defineComponent({
    name: "FooUsingSlots",
    setup(props, { slots }) {
        const slots = {
            test: () => <div>具名插槽</div>,
            default: () => <div>默认插槽</div>,
        };

        return () => (
            <div>
                <span>插槽</span>
                <FooWithSlots v-slots={slots}></FooWithSlots>
            </div>
        );

    },
});
/**
 * 很多指令不能用了 只支持 v-show, v-model
 */
export const FooWithDeractive = defineComponent({
    name: "FooWithDeractive",
    setup(props, { slots }) {
        const inputData = ref("");
        return () => (
            <div>
                <span v-show={true}>显示</span>
                <span v-show={false}>隐藏</span>
                <input type="text" v-model={inputData.value} />
                <span>{inputData.value}</span>
            </div>
        );
    },
});