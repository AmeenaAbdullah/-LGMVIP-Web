import React, { useState } from 'react'

export default function (props) {
    const [result,setResult]=useState("");
    const handlechange=(e)=>{
        setResult(e.target.name);
   props.Resultinput(e.target.name
   )
    }

    const equal=(e)=>{
    props.evaluate(e.target.name)
    }


  return (
    <div className='keys'>
     <button name='c' value={result} onClick={props.clear} className='key ' id='clear'>C</button>
     <button name='(' value={result} onClick={handlechange} className='key'>(</button>
     <button name=')' value={result} onClick={handlechange} className='key'>)</button>
     <button name='*' value={result}  onClick={handlechange} className='key'>*</button>

    <button name='1' value={result} onClick={handlechange} className='key'>1</button>
    <button name='2' value={result}  onClick={handlechange} className='key'>2</button>
    <button name='3' value={result}  onClick={handlechange} className='key'>3</button>
    <button name='.' value={result}  onClick={handlechange} className='key'>.</button>
    
  
    <button name='4'  value={result} onClick={handlechange} className='key'>4</button>
    <button name='5' value={result}  onClick={handlechange}className='key'>5</button>
    <button name='6' value={result}  onClick={handlechange} className='key'>6</button>
    <button name='/' value={result}  onClick={handlechange} className='key'>/</button>
    
    <button name='7' value={result}  onClick={handlechange} className='key'>7</button>
    <button name='8' value={result}  onClick={handlechange} className='key'>8</button>
    <button name='9' value={result}  onClick={handlechange} className='key'>9</button>
    <button name='-' value={result}  onClick={handlechange} className='key'>-</button>
    <button name=''  onClick={equal} className='key' id='result'>=</button>
    <button name='0'  value={result}  onClick={handlechange} className='key'>0</button>

   
    <button name='+'value={result}   onClick={handlechange} className='key'>+</button>
   

    </div>
  )
}
