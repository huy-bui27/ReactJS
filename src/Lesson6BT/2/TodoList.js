import React from 'react';

function TodoList({todos}) {
    return (
        <ul>
            {todos.length > 0 ? (
                todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
            ) : (
                <li>Chưa có công việc</li>
            )}
        </ul>
    );
}

export default TodoList;