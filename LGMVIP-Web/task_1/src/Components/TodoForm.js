import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
export default function TodoForm(props) {
    const [input, setInput] = useState('');
    const onhandlechange = e => {
        setInput(e.target.value);
    }

    const handle = (e) => {
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random()*1000000),
            text: input,
            isComplete: 0,
            Del:0
        })
        setInput('');

    }
    return (
       <form>
            <div className="">
                <nav className='nav'>MY TODO's LIST</nav>
                <div className="row">
                    <input type="text" onChange={onhandlechange} id="searchID" placeholder="Add Note" value={input} />
                    <button type="submit" onClick={handle} id="search-btn" className="btn"><FontAwesomeIcon icon={faAdd}> </FontAwesomeIcon></button>
                </div>
            </div>
        </form>

    )
}
