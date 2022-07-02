import React, { useEffect, useState } from 'react'
import TodoForm from './/TodoForm';
import Todos from './/Todos';

export default function TodoList() {
    const [todo, setTodo] = useState([]);

    const addTask = task => {
        if (!task.text) {
            return;
        }
       
        const newtodo = [task, ...todo];
        setTodo(newtodo);
        
    }
    const deleteTask=id=>{
        let updatetodo=[...todo].filter(task=>task.id!==id);
        setTodo(updatetodo);
    }


    const completeTask=(id)=>{
        
        let updateT=todo.map(todos=>{
            if(todos.id===id){
                todos.isComplete=true;
                
            }
            return todo;
        })
        setTodo(updateT);
    }

    return (
        <>
       <TodoForm addTask={addTask} ></TodoForm>
       <div className="todo-container">
       <ul  className='todo-list'>
        <Todos todo={todo} deleteTask={deleteTask} completeTask={completeTask}/>
        </ul>
        </div>
        </>
        
    )
}
