"use client"

import { useState, useEffect } from "react";

const Todo = () => {
    const [todo, setTodo] = useState('Harm')

    useEffect(() => {
        console.log('Hello Sir')
    }, [todo])

    return (
        <div className="Todo text-center">
            <h3>{todo}</h3>
            <h4 className="mb-3">Todo Section</h4>
            <button className="btn btn-danger" onClick={() => setTodo('Glitch')}>Change</button>
        </div>
    )
}

export default Todo;