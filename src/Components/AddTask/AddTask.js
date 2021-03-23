import {TaskContext} from "../TaskContext/TaskContext"; 
import {useContext, useState} from "react";

const AddTask =()=>{

    const [tasks,setTasks] =useContext(TaskContext);
    const[name,setName] =useState('');
    const[description,setDescription] =useState('');

    const updateName =(e)=>{
        setName(e.target.value);
    }
    const updateDescription =(e)=>{
        setDescription(e.target.value);
    }

    const addItem=(e)=>{
     e.preventDefault();
      setTasks(prevTasks=>[...prevTasks,{name:name,description:description}])
    }

    return (
        <div>
        <form onSubmit={addItem}>
                <input type={Text} name="name" onChange={updateName}></input>
                <input type={Text} name="description" onChange={updateDescription}></input>
                <button type="submit">Add</button>
        </form>
        </div>
    )

}
export default AddTask;