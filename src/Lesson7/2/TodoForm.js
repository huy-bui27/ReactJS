import React, {useState} from 'react';

function TodoForm({onAdd}) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAdd(task);
            setTask(''); // Reset input
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Nhập công việc mới"
            />
            <button type="submit">Thêm</button>
        </form>
    );
}

export default TodoForm;