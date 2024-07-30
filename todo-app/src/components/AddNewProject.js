import React from 'react'
import {Plus} from 'react-bootstrap-icons'
function AddNewProject(){
    return(
        <div className='AddNewTodo'>
           <div className="add-button">
                <span>
                    <Plus size = '20'/>
                </span>
           </div>
        </div>
    )
}

export default AddNewProject