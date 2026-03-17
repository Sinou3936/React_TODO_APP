import TodoItem from "./TodoItem";

function TodoList({todos}) {
    
    return (
        <ul>
            {todos.map((todo, index) => ( 
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList