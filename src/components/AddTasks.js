const AddTask = (props) => {
    // here we got props object as newTask , add Task , 
    return (
    //adding a new task here//
      <>
          <div className="row mb-3 sticky-top">
              <div className="col">
                  <input
                      value={props.newTask} 
                      onChange={(e) => props.setNewTask(e.target.value)}
                      className='form-control form-control-lg form-control-sm'
                      
                      type="text" />
              </div>
                <div className="col-auto">
                    {/* task button added */}
                  <button
                      onClick={props.addTask}
                      className='btn btn-lg btn-primary'>Add Task</button>
              </div>
          </div>
      </>
  )
}

export default AddTask