import { useState } from "react"
import CreateForm from "./CreateForm"
import Todo from "./Todo"

const TodoWrapper = () => {
    // 因為有n個TODO，所以要用陣列存取
    // const [todos, setTodos] = useState(['繳停車費', '對發票']);
    // 由於陣列內容若有增減時，索引值會異動，
    // 所以避免異動資料時造成索引值混亂，將陣列改成陣列物件
    // 而key值用亂數來產生

    const [todos, setTodos] = useState([
        { content: '停車費', id: Math.random(), isCompleted: false },
        { content: '對發票', id: Math.random(), isCompleted: false },
    ]);

    // 建立刪除todo
    // 傳入被刪除時的todo.id
    const delTodo = (id) => {
        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不是被刪除的id
            return todo.id !== id
        }))
    }

    //建立切換isCompleted屬性函式
    const toggleCompleted = (id) => {
        //  isCompleted => false
        //  isCompleted =>true
        //  檢查被點擊的項目的id 是否跟陣列的id一樣
        //  yes => 1.取出todo 2.將isCompleted屬性值反向(NOT)
        //  no =>todo不變
        setTodos(todos.map((todo) => {
            return todo.id === id
                ? { ...todo, isCompleted: !todo.isCompleted }
                : todo
        }))
    }

    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            {/* 方法1：傳送todos陣列資料與setTodos方法到Todo元件 */}
            <CreateForm todos={todos} setTodos={setTodos} />

            {/* 方法2:將setTods方法包裝成一個方法 */}
            {/* <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 使用...其餘運算值來保留原陣列內容
                // 再加上新的物件內容
                setTodos([...todos,{ content: newContent, id: Math.random(), isCompleted:false }])
            }} /> */}
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} delTodo={delTodo} toggleCompleted={toggleCompleted} />
                })
            }
            {/* <Todo /> */}
        </div>
    )
}

export default TodoWrapper