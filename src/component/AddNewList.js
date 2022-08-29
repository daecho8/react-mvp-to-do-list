import React, { useState } from 'react';

const AddNewList = () => {
    const [newTask, setNewTask] = useState("");

    const putNewTask = (event) => {
        setNewTask(event.target.value);
    }

    const clickAdd = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/api/list", {
            mode: 'cors',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ description: newTask })
        })
        .then((res) => res.json())
        .then(task => {
            console.log(task)
            setNewTask([...newTask, task])
        })
    }

    return (
        <div className='new-list-container'>
            <form className='new-list'>
                <input className="new-list-input" type="text" placeholder='Enter New Task' onChange={putNewTask}/>
                <input className="add-btn" type="submit" value="ADD" onClick={clickAdd}/>
            </form>
        </div>
    )
}

export default AddNewList