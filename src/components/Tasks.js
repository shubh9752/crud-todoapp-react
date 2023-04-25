import React from 'react';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// this section is for task component
const Tasks = (props) => {
    return (
    // Here We Get props object as task , markTruue deletingTask
      <>
          {
              props.task.map((task, index) => {
                  return (
                    
                      <div key={task.id}>

                          <div className="col tasksBg">
                              {/* setting class name on Complete Condition  */}
                              <div className={task.completed ? 'true' : ''}>
                                  <span className="task-Count">{index+1}</span>
                                  <span className="taskText">{task.title}</span>
                              </div>
                              <div className="icon-Wrap">
                                  {/* on Clicking mark Functin is Called in Parent Component by task.id Arguments  */}
                                  <span 
                                      onClick={(e) => props.markTrue(task.id)}
                                  >
                                      <FontAwesomeIcon icon={faCircleCheck} />
                                  </span>
                                  {/* check for task is true or false */}
                                  {
                                      task.completed ? null : (
                                          <span title='Edit'
                                              onClick={() => props.setUpdateTaskData({
                                                  id: task.id,
                                                  title: task.title,
                                                  completed: task.completed ? true : false
                                              })}
                                          >
                                              <FontAwesomeIcon icon={faPen} />
                                          </span>)
                                  }
                                  <span title='Delete'
                                      onClick={() => props.deleteTask(task.id)}
                                  >
                                      {/* Trash icon */}
                                      <FontAwesomeIcon icon={faTrashCan} />
                                  </span>
                              </div>
                          </div>
                      </div>
                    
                  )
              })
          }
      </>
  )
}

export default Tasks;