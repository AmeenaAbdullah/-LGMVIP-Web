import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function TodoForm(props) {
    const [input, setInput] = useState('');
    const onhandlechange = e => {
        setInput(e.target.value);
    }
    const handle = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        setInput('');

    }
    return (

        <form>
            <div className="">
                <nav className='nav'>MY TODO's LIST</nav>
                {/*<h2 className='heading'>Add Todo</h2>
                       */}
                <div className="row">
                    <input type="text" onChange={onhandlechange} id="searchID" placeholder="Add Note" value={input} />
                    <button type="submit" onClick={handle} id="search-btn" className="btn"><FontAwesomeIcon icon={faAdd}> </FontAwesomeIcon></button>
                </div>
            </div>
            



        </form>

    )
}
