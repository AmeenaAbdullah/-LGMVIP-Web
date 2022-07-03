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
         todo.map(tod => {
            if (tod.id === id) {
                tod.Del = 1;
            }
        });
        let updatetodo=[...todo].filter(task=>task.id!==id);
       
        setTodo(updatetodo);
    }


    function completeTask(id) {
        let updatedTasks = todo.map(tod => {
            if (tod.id === id) {
                tod.isComplete = 1;
            }
            return tod;
        });
        setTodo(updatedTasks);
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
