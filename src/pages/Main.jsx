import { useEffect, useState } from "react";
import TodoList from "../componets/TodoList";
import TodoWriteForm from "../componets/TodoWriteForm";


function Main() {
    const [todos, setTodos] = useState([]) 
    
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data.todos))
    }, [])
    return (
       <>
        <TodoWriteForm/>
        <TodoList todos={todos}/>
       </>
    )
}

export default Main