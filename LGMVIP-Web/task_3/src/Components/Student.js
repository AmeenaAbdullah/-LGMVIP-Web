import React from 'react'

export default function Student({ s_List }) {
  return (
    <>
   { s_List.map((std)=>{
      return(
        <div className="Ecard flex-row mb-3 " key={std.id}>
         <div className="card-body">
         <li className="mb-4"><b>Description</b></li> 
          
          <li className="">{std.name}</li> 
          
          <li className="">  {std.email}</li>
          <li><a href={std.website}>{std.website}</a> </li>
          <li className=" mt-2 "> {std.gender}</li>
          <li className=""> {std.HTML } {std.CSS } {std.JAVASCRIPT  }</li>
        
        </div>
        <div className="card-body">
        <li className=""><b>Image</b></li> 
         
        <img className=" img"  src={std.image} alt=""/>
         
        </div>
        
        </div>
      ); 
   })}
   </>
 )
}
