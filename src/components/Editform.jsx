import { useState } from 'react'
// 方法1
const EditForm = ({ todo, editTodo }) => {

    const [txt, setTxt] = useState(todo.txt);
    // 建立一個函式處理新增的todo資料
    const editData = () => {
        let myInput = document.getElementById('myInput');
        myInput.focus(); //指定游標
        // console.log(content.length)
        if (txt.length === 0) {
            alert("沒有輸入待辦內容!請重新輸入");
        } else {
            editTodo(todo.id, txt);
        }
    }

    // 送單送時
    const handleSubmit = (e) => {
        // 取消送出的預設行為
        e.preventDefault();
        editTodo(todo.id, txt);
    }
    return (
        <form className='create-form' /*onSubmit={handleSubmit}*/>
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
            <button type='button' onClick={editData}>完成</button>

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

export default EditForm