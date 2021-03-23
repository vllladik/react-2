import { useContext, useState } from "react";
import { TaskContext } from "../TaskContext/TaskContext";


const TaskUpdate =()=>{

const [tasks,setTasks] = useContext(TaskContext);
const [name,setName]=useState('');
const [description,setDescription]=useState('');

const updateName =(e)=>{
    setName(e.target.value);
}
const updateDescription =(e)=>{
    setDescription(e.target.value);
}

const updateTask=(e)=>{
e.preventDefault();

}

return(
    <div>
        <form onSubmit={updateTask}> 
    <input name="Name" onChange={updateName}></input>
    <input name="Description" onChange={updateDescription}></input>
    <button type="Submit">Save</button>
        </form>
    </div>
)

}
export default TaskUpdate;