import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

export default function Todos({todo,deleteTask,completeTask}) {
  
  function todoClassname(todos){
    const prefix = 'todo'
  
    switch (todos.isComplete) {
      case 0:      return prefix
      case 1:      return prefix + ' complete '
    }
    switch (todos.Del) {
      case 0:      return prefix 
      case 1:      return prefix + ' fall '
    }
  }
  return (todo.map((todos,index)=>(
    
     
      <div  className={ todoClassname(todos) }>
      

        <li className='todo-item'>{todos.text}</li>
        <button className ={todo.isComplete ? "hide":"tick check-btn"} onClick={()=>{completeTask(todos.id)}} ><FontAwesomeIcon icon={faCheck}> </FontAwesomeIcon></button>
        <button  onClick={()=>{deleteTask(todos.id)}} className='trash-btn'><FontAwesomeIcon icon={faDeleteLeft}> </FontAwesomeIcon></button>
      </div> 
   )))
}


