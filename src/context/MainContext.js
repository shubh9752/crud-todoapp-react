import { createContext, useState } from "react";



const toDoContaxt=createContext();



export const MainContextProvider=({children})=>{
    const [tasks,setTasks]=useState([]);
    return(
        <toDoContaxt.Provider value={{tasks,setTasks}}>
               {children}
        </toDoContaxt.Provider>
    )
}

export default toDoContaxt;