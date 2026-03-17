
function TodoWriteForm() {
    // const {addTodo} = useTodos()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target        

        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: form.todo.value,
                completed: false,
                userId: 5   
            })
        })
        // addTodo(form.todo.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" placeholder="할 일을 입력하세요" />
            <button type="submit">추가</button>
        </form>
    )
}

export default TodoWriteForm