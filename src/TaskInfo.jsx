import './TaskInfo.css'
function TaskInfo(props) {
  function completeTask(){
    let aaa = JSON.parse(localStorage.getItem('myTasks')) || [];
    let idxx = aaa.findIndex( task => task.name === props.item.name && task.active===props.item.active);
    aaa[idxx].active = !aaa[idxx].active;
    localStorage.setItem('myTasks', JSON.stringify(aaa));
    props.clickInput();
  }
  function deleteTask(){
    let aaa = JSON.parse(localStorage.getItem('myTasks')) || [];
    let idxx = aaa.findIndex( task => task.name === props.item.name && task.active===props.item.active);
    
    aaa.splice(idxx,1);
    localStorage.setItem('myTasks', JSON.stringify(aaa));
    props.clickInput();
  }
    return (
      <>
      <div className='taskInfo'>
       <input type="checkbox" checked={props.item.active} onChange={completeTask} />
       <p style={{ textDecoration: props.item.active ? 'line-through' : '' }}>{props.item.name}</p>
       <span className="material-symbols-outlined" onClick={deleteTask}>delete</span>
       </div>
      </>
    )
  }
  
  export default TaskInfo