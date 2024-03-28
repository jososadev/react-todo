import { useState } from 'react'

const useTodo = () => {
    const [todo, setTodo] = useState([])

    const createNewItem = (newItem) => {
        setTodo((currentValue) => ([...currentValue, newItem]))
    }

    const updateItem = (newValue, index) => {
        const newValues = todo.map((value, currentIndex) => {
            return currentIndex === index ? newValue : value
        })

        setTodo(newValues)
    }

    const deleteItem = (index) => {
        const newValues = todo.filter((_, currentIndex) => currentIndex !== index)

        setTodo(newValues)
    }

    return {
        todo,
        updateItem,
        deleteItem,
        createNewItem,
    }
}

export default useTodo