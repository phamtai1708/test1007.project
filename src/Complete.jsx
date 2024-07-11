import { useState } from 'react'
import TaskInfo from './TaskInfo'
import "./Complete.css"
function Complete() {
  let allTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
  let xxx = allTasks.filter(item => item.active)
  let [dataComplete, setDataComplete] = useState(xxx)
  function clickDeleteAll(){
    let aaa = allTasks.filter(item => !item.active);
    localStorage.setItem('myTasks', JSON.stringify(aaa));
    setDataComplete([]);
  }
  function clickInput(){
    let aaab = JSON.parse(localStorage.getItem('myTasks')) || [];
    let yyy = aaab.filter(item => item.active)
    setDataComplete(yyy);
  }
  return (
    <>
    <div>
    <div>
      {dataComplete.map((item, idx)=> (
        <TaskInfo item={item} index={idx} key= {idx} clickInput={clickInput} />
      ))}
     </div>
    <button className='btnDelete' onClick={clickDeleteAll}>
        <span className="material-symbols-outlined">delete</span>
        Delete all
    </button>
    </div>
    </>
  )
}

export default Complete