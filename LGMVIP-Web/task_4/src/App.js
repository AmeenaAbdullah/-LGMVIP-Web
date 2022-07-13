
import './App.css';
import Keys from './Components/Keys';
import React,{useState} from 'react';
function App() {
  const [input,setInput]=useState('');
  const handleChange=(e)=>{
      setInput(e.target.value);
  }
  const Resultinput=(result)=>{
   setInput(input.concat(result));
  }

  const clear=()=>{
    setInput('');
  }
  const backspace=()=>{
    setInput(input.slice(0,input.length-1));  //setInput(input.slice(0,-1));
  }
  const evaluate=()=>{
    try {
      setInput(eval(input).toString());

      
    } catch (error) {
      setInput('error');
    }
  
  }
  return (
    <>
    <h1>Calculator</h1>
    <div className="App">
      
      <div className='inputfield'>
    
        <input className='input' value={input} onChange={handleChange} />
      <button id='clearbtn' name='clear' onClick={backspace}>AC</button>
     </div>


    <div className='keypad'>
     
     <Keys Resultinput={Resultinput} evaluate={evaluate} clear={clear} />


    </div>
   
    </div></>
    
  );
}

export default App;
