import { useEffect } from "react";
import TodoList from "../componets/TodoList";

function List() {

    const {id} = useParams();
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodos(data.todos))
    }, [])

    return <TodoList todos={todos} />
}

export default List 