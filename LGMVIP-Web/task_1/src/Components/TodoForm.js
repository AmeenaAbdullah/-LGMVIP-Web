import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function TodoForm() {
  return (
    <>
    <form className="mt-4" action="SearchNote" method="get">
			<div className="mb-3">
                <nav className='nav'>MY TODO's LIST</nav>
				<div className="row">
					
                    <div className="">
						<input type="text" id="searchID" className="form-control" name="search" placeholder="Search Note" required />
					</div>
					
                    
                    <div className="">
						<button type="submit" id="search-btn" className="btn btn-primary"><FontAwesomeIcon icon={faSearch}> </FontAwesomeIcon>Search</button>
						<a href="ShowNotes" className="btn btn-secondary">Show All Notes</a>
					</div>
				</div>
			
			  
			</div>
			
			
		  </form>
    </>
  )
}
