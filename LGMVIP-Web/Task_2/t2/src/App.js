
import React, {useState} from 'react';
import './App.css'
import NavBar from './Components/NavBar';
function App() {
  const [user,setUser]=useState([]);
  const getUser=async()=>{
    const response=await fetch('https://reqres.in/api/users?page=1');
    const getResponse=await response.json();
    setUser(getResponse.data);
  }
  return (
    <div className="App">
      <NavBar />
      <h2 onClick={getUser} className='getuser'>Get User</h2>
      <ul className='cards'>
        {user.map(({id,email,first_name,last_name,avatar})=>(
          <li key={id}  className='col card'>
            <img  src={avatar} ></img>
            <div>{id}</div>
            <h1>{first_name} {last_name}</h1>
            <h3>{email}</h3>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
