import { defineComponent, ref } from 'vue';

// 选项式写法
export default defineComponent({
    name: 'MainPage',
    // 传入组件配置
    props: { name: { type: String, default: '66' } },
    emits: ['update:modelValue'],
    setup(props, { slots, emit, attrs })) {

    const handleClick = (value) => {
        emit('update:modelValue', value)
    }
    const render = () => {
        return <p>child {props.name}</p>;
    };
    return render;
},
});