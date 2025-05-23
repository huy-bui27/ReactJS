import React, {useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, task]);
    };

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <TodoForm onAdd={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default Todo;