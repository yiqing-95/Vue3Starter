// 函数式写法
function MainPage(props, { slots, emit, attrs }) {
    return <p>child {props.name}</p>;
}

export default MainPage;