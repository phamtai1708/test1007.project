import { useState } from 'react'
import './AddTask.css'

function AddTask(props) {
  const [valueInput, setValueInput]= useState("");
  let handleInput = (e) =>{
    setValueInput(e.target.value)
  }
  function addTaskToLocal(){
    let newTask={name: valueInput, active:false};

    let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    tasks.push(newTask);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    props.clickInput();
    setValueInput("");
  }
  return (
    <>
     <div className='addTaskBox'>
        <input type="text" value={valueInput} onChange={handleInput} placeholder='Add task details' />
        <button onClick={addTaskToLocal}>Add</button>
     </div>
    </>
  )
}

export default AddTask