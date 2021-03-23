import {createContext, useState} from "react";

export const TaskContext= createContext();

export const TaskProvider=(props)=>{

const [tasks,setTasks] = new useState([
        {
          id:1,
         name:"Anime",
         description:"Sword Art Online"
        },

    {
     id:1,
     name:"Step",
     description:"To do my homework"
     }

    ])  

    return(
        <TaskContext.Provider value={[tasks,setTasks]}>
            {props.children}
        </TaskContext.Provider>
    );



}


 