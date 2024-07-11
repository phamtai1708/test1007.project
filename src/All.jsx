import { useState } from 'react'
import AddTask from './AddTask'
import TaskInfo from './TaskInfo';
function All() {
  let allTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  let [allData, setAllData]=useState(allTasks)
  function clickInput(){
    let aaa = JSON.parse(localStorage.getItem('myTasks')) || [];
    setAllData(aaa);
  }
  return (
    <>
     <AddTask  clickInput={clickInput} />
     <div>
      {allData.map((item, idx)=> (
        <TaskInfo item={item} clickInput={clickInput} index={idx} key= {idx}/>
      ))}
     </div>
    </>
  )
}

export default All