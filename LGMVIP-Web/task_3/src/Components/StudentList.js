import React from 'react'
import { useState } from 'react'
import Form from './Form';
import Student from './Student';

export default function StudentList() {
    const [s_List,setS_List]=useState([]);
   
    const addStudent=(NewStudent)=>{

        let updateds_List=[NewStudent, ...s_List];
        setS_List(updateds_List);
    }



  return (
    <>
    <div className="row mt-5">
            <div className="col-md-6 ">
                
        <h1 className='headingStu'></h1>
        <Form addStudent={addStudent} />            
        </div>
        <div className="col-md-6">
        <h1 className='headingStu'>Enrolled Students List</h1>
        <Student  s_List={s_List}/>
        </div>
        </div>

    </>
  )
}
