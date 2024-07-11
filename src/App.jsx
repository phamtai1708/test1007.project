import { useState } from 'react'
import './App.css'
import All from './All'
import Active from './Active'
import Complete from './Complete'

function App() {
  const [xxx, setxxx]= useState(1);
  function renderBox (index){
    if (index === 1){return <All/>}
    if (index === 2){return <Active/>}
    if (index === 3){return <Complete/>}
  }
  return (
    <>
     <div className='container'>
        <h1>#Todo</h1>
        <div className='btnBox'>
          <button>         </button>
          <button 
          onClick={()=>setxxx(1)}
          style={{ borderBottom: xxx === 1 ? '3px solid #5e5efc' : '3px solid #c9c9c9' }}
          >All</button>
          <button 
            onClick={()=>setxxx(2)}
            style={{ borderBottom: xxx === 2 ? '3px solid #5e5efc' : '3px solid #c9c9c9' }}
          >Active</button>
          <button 
          onClick={()=>setxxx(3)}
          style={{ borderBottom: xxx === 3 ? '3px solid #5e5efc' : '3px solid #c9c9c9' }}
          >Completed</button>
          <button>         </button>
        </div>
        <div className='contentTask'>
            {renderBox(xxx)}
        </div>
     </div>
    </>
  )
}

export default App
