import { useState } from 'react'

// 建立元件ㄤ法1
function MyComponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        // 呼叫自訂函式，不用加上小括號
        <button id="btn1" onClick={ handleClick }>點擊次數:{counts}</button>
    )
}

// 建立元件方法2
// function MyComponent() {
//     return (

//     )
// }


const App0818 = () => {
    // let counts=0
    // const[counts,setCounts]=useState(0);
    return (
        <div>
            {/* <button id="btn1" onClick={() => {
                // counts++;  //counts=>counts=counts+1
                setCounts(counts+1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
        {/* < MyComponent /> */}
        </div>
    )
}

export default App0818