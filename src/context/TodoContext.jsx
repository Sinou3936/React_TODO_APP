import { createContext, useContext, useRef, useState } from "react";

const TodoContext = createContext()

export function TodoProvider({ children }) {
    const lastId = useRef(4)

     const [todos, setTodos] = useState([
          { id: 3, checked: false, text: '리액트 공부하기' },
          { id: 2, checked: false, text: '점심 먹기' },
          { id: 1, checked: false, text: '운동하기' },
      ])
    
    
      const addTodo = (text) => {
        const todo = {id: lastId.current, checked: false, text}
        setTodos([todo, ...todos])
        lastId.current += 1
      }
    
      const toggleTodo = (todoId) => {
        const updatedTodos = todos.map((todo) => todo.id === todoId ? {...todo, checked: !todo.checked} : todo)
        setTodos(updatedTodos)
      }
      
      const deleteTodo = (selectedid) => {
        const filterTodos = todos.filter((todo, i) => todo.id !== selectedid)
        
        setTodos(filterTodos)
      }

      const value = { todos, addTodo, toggleTodo, deleteTodo }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodos() {
    const context = useContext(TodoContext)
    return context
}