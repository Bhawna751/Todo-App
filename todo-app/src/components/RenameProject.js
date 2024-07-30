import React,{useState} from 'react'
import ProjectForm from './ProjectForm'

function RenameProject({project,setShowModal}){
    const [newProjectName,setNewProjectName] = useState(project.name)
    function handleSubmit(e){

    }
    return(
        <div className='RenameProject'>
            <ProjectForm
                    handleSubmit={handleSubmit}
                    heading='Edit Project Name'
                    value={newProjectName}
                    setValue={setNewProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText='confirm'
                />
        </div>
    )
}

export default RenameProject