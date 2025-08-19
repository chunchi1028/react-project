//建立子元件
//直接使用props物件
function MyComponent(props) {
    return <>
        <div>hello!</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
         {props.c()}
    </>
}

// 物件解構=>{物件成員}
function MyComponent2({ a, b, c }) {
    return <>
        <div>hello!</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 物件解構=>{物件成員}
function MyComponent3({ a, b = "我是預設值", c }) {
    return <>
        <div>hello!預設屬性值</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}

    </>
}
//建立父元件
const App0819 = () => {
    return (
        <>
            {/* 呼叫元件 */}
            <MyComponent a="我是屬性a" b="我是屬性b" c={() => { console.log('123') }} />
            <MyComponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log('456') }} />
            <MyComponent3 a="我是屬性a" b="我是王曉明" c={() => { console.log('789') }} />
        </>
    )
}

export default App0819