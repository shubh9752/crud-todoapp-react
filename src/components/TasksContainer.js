import React, { useState } from 'react';
import './TasksContainer.css'

//import AddTaskForm , UpdateForm , ToDo Component 
import AddTask from './AddTasks';
import Tasks from './Tasks';
import UpdateTasks from './UpdateTasks';


//importting BootStrap Module
import 'bootstrap/dist/css/bootstrap.min.css';


//TaskContainer Component
function TasksContainer(props) {

    // Task Todo List State 
    const [task, setTask] = useState(props.jsonTasks);
    //Temporary State
    const [newTask, setNewTask] = useState('');
    const [updateTaskData, setUpdateTaskData] = useState('');


    // Adding task
    const addTask = () => {
        if (newTask) {
            let newData = {
                id: Date.now(),
                title: newTask,
                completed:false
            }
            setTask([newData, ...task])
            setNewTask('');
        }
    }

    //--------------Delete Task -----------------//
    const deleteTask = (id) => {
        let newTasks = task.filter(task => task.id !== id);
        setTask(newTasks)
    }

    //-------New Task as Done and Complete--------//
    const markTrue = (id) => {
        let completeTask = task.map(task => {
            if (task.id === id) {
                return ({ ...task, completed: !task.completed });
            }
            return task;
        })
        setTask(completeTask)
    }
    //for canceling the task
    const cancelUpdate = () => {
        setUpdateTaskData('');
    }

    //changing a task for update
    const changeTask = (e) => {
        let newEntry = {
            id: updateTaskData.id,
            title:e.target.value,
            completed: updateTaskData.completed ? true : false
        }
        setUpdateTaskData(newEntry);
    }

    //Update Task
    const updateTask = () => {
        let filterRecord = [...task].filter(task => task.id !== updateTaskData.id)
        let UpdatedObject = [updateTaskData, ...filterRecord];
        setTask(UpdatedObject);
        setUpdateTaskData('')
    }

    return (
        <>
        
            
            
        <div className="container main-container">


            {/*Rendering Two Components updating Task  && Adding a New Task  */}
            {
                updateTaskData && updateTaskData ? (
                      <UpdateTasks
                         changeTask={changeTask}
                          updateTask={updateTask}
                          updateTaskData={updateTaskData}
                          
                          cancelUpdate={cancelUpdate}

                    />
                ) : (
                        <AddTask
                            setNewTask={setNewTask}
                            addTask = {addTask}
                            newTask={newTask}
                            
                        />
            )
            }
            
            {/* we display tasks here   */}
            <Tasks
                task={task}
                deleteTask = {deleteTask}
                markTrue={markTrue}
                setUpdateTaskData={setUpdateTaskData}
            />
           
            </div>
            
        </>
    );
}



export default TasksContainer;