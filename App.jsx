//TODO form , table, js to push data from the form to the table

//creat app componet to render as our main component
import './App.css'

import Table from './components/Table.jsx'

import Form from './components/Form.jsx'

import {useState} from 'react'

function App(){ //capitalize component names

  //all componennt hace to return some JSX --

  const [favLinks, setFavLinks] = useState([])

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }
  return(
    <div>

      <h1>Submit you fav links!</h1>

      <Form onNewSubmit={handleNewSubmission}/>
      

      <Table links ={favLinks}/>
    
   </div>
    
  )
}

export default App