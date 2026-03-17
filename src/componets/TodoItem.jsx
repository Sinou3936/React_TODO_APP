import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {

    const { removeTodo, toggleTodo } = useTodos();

    return (
        <li key={todo.id}>  
            <input type="checkbox" checked={todo.completed || false} onChange={() => {toggleTodo(todo.id) }} />
            {todo.id} / {todo.todo} <button onClick={() => removeTodo(todo.id)}>삭제</button>
        </li>
    )
}

export default TodoItem