// 次元件
function SecondComponent({ c }) {
    // console.log(props);
    return <>
        <h1>我是secondcomponent元件</h1>
        <p>SecondComponent接收的屬性是:{c}</p>
    </>
}

// 子元件接收主元件傳遞過來的元件
function MyComponent2({ b }) {
    return (
        <>
            <h2>呼叫外部元件，接收來自主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla hic, fugit sequi, omnis qui assumenda, id dolore quas amet impedit at nihil porro sit ut. Atque nulla itaque in?</p>
            <SecondComponent c={b} />
            我是:{b}
        </>
    )
}

// 子元件接收主元件傳遞過來的元件
function MyComponent({ a, children }) {
    return (
        <>
            <h2>呼叫外部元件，接收來自主元件的傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla hic, fugit sequi, omnis qui assumenda, id dolore quas amet impedit at nihil porro sit ut. Atque nulla itaque in?</p>
            {children}
            我是:{a}
        </>
    )
}

// 主元件
const App0819_2 = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1><hr />
            {/* 此方法是比較進階的寫法，現階段理解即可 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性c" />
            </MyComponent>
            <hr />
            {/* 現階段使用此法(逐層各自呼叫元件) */}
            <MyComponent2 b="屬性b" />
        </div>
    )
}

export default App0819_2