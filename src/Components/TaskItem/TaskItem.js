import { useContext } from "react";
import { TaskContext } from "../TaskContext/TaskContext";
import {Link} from "react-router-dom";

const TaskItem = ({id, name, description}) => {

    const [tasks,setTasks]=useContext(TaskContext);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Description: {description}</h3>
            <hr/>
            <button onClick={()=>{setTasks(tasks.filter(task=>(task.id!=id)))}}>Delete</button>
            <Link to={{pathname:`/updateTask/${id}`}}>Update</Link>

        </div>
    );
}

export default TaskItem;


