import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

export default function Todos({todo,deleteTask,completeTask}) {
  
  return (todo.map((todos,index)=>(
    
     
      <div className={todo.isComplete?  'todo completed'  : 'todo'}>
        <li className='todo-item'>{todos.text}</li>
        <button className='check-btn' onClick={()=>{completeTask(todos.id)}} key={index}><FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon></button>
        <button  onClick={()=>{deleteTask(todos.id)}} className='trash-btn'><FontAwesomeIcon icon={faDeleteLeft}> </FontAwesomeIcon></button>
      </div> 
   )))
}


