import React, { useEffect, useState } from 'react'

import TasksContainer from './components/TasksContainer'; 

import { ColorRing } from "react-loader-spinner";







//main Component of this Todo App
const App = () => {

//putting the whole data in json after updating api
    const [json, setjson] = useState([]);
//rendering whole App component after shrimmer ui 
    const [shrimmer, setShrimmer] = useState(false);

//fetching api using use effect
    useEffect(() => {
        // inbuilt function for fetching API  data
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => {
                   
                    setjson(json)
                    setShrimmer(true);
                }, 1000);
            
            });
    }, []);

    
  return (
      <div>
          {/* after loading Api rendering TaskContainer Component If not ! then Show thw Shrimmer  */}
          { shrimmer? (
              <TasksContainer jsonTasks={json} />
          ) : (
            <ColorRing
  visible={true}
  height="580"
  width="1380"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
          )}
          
    </div>
  )
}

export default App