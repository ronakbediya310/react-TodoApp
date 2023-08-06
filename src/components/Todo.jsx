import React, { useState } from 'react';
import './Todo.css';

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = () => {
        const trimmedTask = newTask.trim();
        if (trimmedTask) {
            setTaskList((prevTaskList) => [...prevTaskList, trimmedTask]);
            setNewTask('');
        }
    };

    const removeTask = (taskToRemove) => {
        setTaskList((prevTaskList) =>
            prevTaskList.filter((task) => task !== taskToRemove)
        );
    };

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };
    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
          addTask();
        }
      };
    
    return (
        <>
            <div className="header">
                <h1>TODO APP</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter New Task..."
                        value={newTask}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
            </div>
            <h1 className="title">Here is your Tasklist!!</h1>
            {taskList.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No tasks added yet.</p>
            ) : (
                <div className="taskbody">
                    {taskList.map((task) => (
                        <div className="tasks" key={task}>
                            <div className="task-title">
                                <p>{task}</p>
                            </div>
                            <button className="remove" onClick={() => removeTask(task)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
