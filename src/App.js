import React, { useState, useEffect } from 'react';

import Div100vh from 'react-div-100vh'

import './styles/App.scss'

//components
import Header from './components/Header'
import Todo from './components/Todo';
import Loader from './components/Loader'

function App() {
  
  //Hooks
  const [ dataAPI, setDataAPI ] = useState([])
  const [ displayStatus, setDisplayStatus ] = useState('all')
  const [ filteredData, setFilteredData ] = useState([])

  //State
  useEffect( () => {
    const handleDataAPI = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const result = await response.json()
      const todos = result.slice(0,20)
      //console.log(todos)
      setDataAPI(todos)
    }

    handleDataAPI()
  }, [])

  useEffect(() => {
    filterFunct()
  }, [dataAPI, displayStatus])

  const filterFunct = () => {
    switch(displayStatus) {
      case 'completed' :
        setFilteredData(dataAPI.filter(el => el.completed === true))
        break;
      case 'uncompleted' :
        setFilteredData(dataAPI.filter(el => el.completed !== true))
        break;
      default:
        setFilteredData(dataAPI)
        break;
    }
  }
  
  const handleTodo = (id) => {
    //console.log(dataAPI)
    //console.log(id)
    setDataAPI(dataAPI.map(todo => todo.id === id ? 
      {...todo, completed: !todo.completed}
      : todo
      ))
  }


//console.log(dataAPI)
  return (
    <Div100vh>
      <div className="App">
        
        <Header
          setDisplayStatus={setDisplayStatus}
        /> 
        <div className='todo-container'>
          {
            dataAPI ? (
              filteredData.map( ( todo, index ) => (
                <Todo
                  key={index}
                  title={todo.title}
                  status={todo.completed}
                  handleTodo={handleTodo}
                  id={todo.id}
                />
              ))
            ) : (
              <Loader />
            )
          }
        </div>

      </div>
    </Div100vh>
  )
}

export default App;


