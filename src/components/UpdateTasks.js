import React from 'react'

// UpdateForm Component
const UpdateTasks = (props) => {
    // props object  updateData , cancelUpdate , updateTask 
  return (
      <>
          {/* Update Task  */}
          < div className="row mb-3">
              <div className="col">
                  <input type="text"
                      onChange={props.changeTask}
                      value={props.updateTaskData && props.updateTaskData.title}
                      
                      className='form-control-sm form-control '
                  />
              </div>
              <div className="col-auto">
                  {/* this is for update  button */}
                  <button
                       className="btn  btn-sm mr-20  btn-primary"
                      onClick={props.updateTask}
                     >
                      Update
                  </button>
                  {/* this is for cancel button */}
                  <button className="btn btn-sm btn-danger"
                      onClick={props.cancelUpdate}
                  >
                      Cancel
                  </button>
              </div>
          </div>      
      </>
  )
}


export default UpdateTasks