/**
 * @see https://www.cnblogs.com/zdsdididi/p/17332204.html
 * 函数式组件,因为函数式组件里没有 this 引用，所以 Vue 把 props 当作第一个参数传入,
 * 第二个参数 ctx 包含三个属性：attrs、emit 和 slots。
 * 它们分别相当于组件实例的 attrs、attrs、attrs、emit 和 $slots 这几个属性。
 */
import { defineComponent, ref, withModifiers } from "vue";

const Hi = (props, ctx) => <div>Hello World</div>;

const Component1 = () => <div>Component1</div>;
const Component2 = () => <div>Component2</div>;

export default () => (
    <div>
        <Component1 />
        <Component2 />
    </div>
);

/**
 * 插值
 */

export const Foo2 = defineComponent({
    name: "Foo2",
    setup(props, ctx) {
        const text = ref("Hello World");
        // SFC 模板中是不需要加.value的,但是 JSX 模板中则需要加.value
        return () => <div>{text.value}</div>;
    },
});
export const FooCond = defineComponent({
    name: "FooCond",
    setup(props, ctx) {

        const showyes = ref(true);

        return () => <div>
            {showyes.value ? <div>yes</div> : <div>no</div>}
        </div>;
    },
});
// jsx 支持v-show
export const FooCond2 = defineComponent({
    name: "FooCond2",
    setup(props, ctx) {

        const showyes = ref(true);

        return () => (
            <div>
                <div v-show={showyes.value}>yes</div>
                <div v-show={!showyes.value}>no</div>
            </div>
        );
    },
});
/**
 * 列表 循环
 */
export const FooList = defineComponent({
    name: "FooList",
    setup(props, ctx) {

        const list = ref(["one", "two", "three"]);

        return () => (
            <div>
                {list.value.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        );
    },
});
export const FooEventBind = defineComponent({
    name: "FooEventBind",
    setup(props, ctx) {

        return () => (
            <div
                onClick={() => {
                    console.log("我被点击");
                }}
            >
                点击
            </div>
        );
    },
});
export const FooWithModifiers = defineComponent({
    name: "FooWithModifiers",
    setup(props, ctx) {

        return () => (
            <div
                onClick={withModifiers(() => {
                    console.log("我被点击");
                }, ["self"])}
            >
                点击
            </div>
        );
    },
});