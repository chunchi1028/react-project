import React, { useState } from 'react'
// 方法1
const CreateForm = ({ todos, setTodos }) => {

    const [txt, setTxt] = useState('');
    // 建立一個函式處理新增的todo資料
    const addData=()=> {
        let myInput = document.getElementById('myInput');
        myInput.focus(); //指定游標
        // console.log(content.length)
        if (txt.length === 0) {
            alert("沒有輸入待辦內容!請重新輸入");
        } else {
            setTodos([...todos, { content: txt, id: Math.random(),isCompleted:false }])
            setTxt(''); //清除內容框的內容
        }
    }
    return (
        <form className='create-form'>
            <input
                id='myInput'
                type="text"
                placeholder='輸入待辦事項'
                value={txt}
                onChange={(e) => {
                    // 去除資料前後的空白=>trim()
                    setTxt(e.target.value.trim());
                }}
            />
            <button type='button' onClick={addData}>加入</button>

        </form>
    )
}

// 方法2
// const CreateForm = ({addTodo}) => {
//     console.log(addTodo)
//     const[txt,setTxt]=useState('');
//     return (
//         <form className='create-form'>
//             <input 
//             id='myInput'
//             type="text" 
//             placeholder='輸入待辦事項'
//             value={txt}
//             onChange={(e)=>{
//             setTxt(e.target.value);
//             }}
//             />
//             <button type='button' onClick={()=>{
//               addTodo(txt);
//               setTxt(''); //清除內容框的內容
//               let myInput=document.getElementById('myInput');
//               myInput.focus(); //指定游標
//             }}>加入</button>
//             {/* {txt} =>查看內容用 */}
//         </form>
//     )
// }

export default CreateForm