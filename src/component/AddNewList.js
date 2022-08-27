import React, { useState } from 'react';
// import { useState, useEffect } from "react";

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
        <form>
            <input type="text" placeholder='TYPE NEW TASK' onChange={putNewTask}/>
            <input type="submit" value="ADD" onClick={clickAdd}/>
        </form>
    )
}

export default AddNewList