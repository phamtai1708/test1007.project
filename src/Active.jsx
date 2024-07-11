import { useState } from 'react'
import AddTask from './AddTask'
import TaskInfo from './TaskInfo';
function Active() {
  let allTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  let xxx = allTasks.filter(item => !item.active)
  let [allDataActive, setAllDataActive]=useState(xxx)
  function clickInput(){
    let aaa = JSON.parse(localStorage.getItem('myTasks')) || [];
    let yyy = aaa.filter(ggg=> !ggg.active)
    setAllDataActive(yyy);
  }
  return (
    <>
     <AddTask  clickInput={clickInput} />
     <div>
      {allDataActive.map((item, idx)=> (
        <TaskInfo item={item} index={idx} key= {idx} clickInput={clickInput} />
      ))}
     </div>
    </>
  )
}

export default Active