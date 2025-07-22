import { useState } from "react"


function Form(props) {

    // function handleSubmit(event){
    //     event.preventDefault()
    //     alert("submitted!")

    // }

   const [name, setName] = useState("")
   const [URL, setURL] = useState("")

    let handleSubmit = (event)=>{
        event.preventDefault()
       

        if(name === "" || URL === ""){
            alert("Name and URL are required")
        }
        else{
            console.log(name,URL)
            props.onNewSubmit({name, URL})
            setName("")
            setURL("")
           
        }
       
    }
    
    let handleNameChange = (event) =>{
       // console.log(event.target.value)
        setName(event.target.value)
    }
    let handleURLChange = (event) =>{
         setURL(event.target.value)
         //console.log(URL)
     }
    return(
      <form onSubmit={handleSubmit}>
  
      <label for = "linkname">Link Name </label>
      <input type ="text" name = "linkname" onChange={handleNameChange} value={name}/>
      <br/>
      <label for = "LinkURL">Link URL </label>
      <input type ="text" name = "LinkURL" onChange={handleURLChange} value ={URL}/ >
  
  
      <br/>
      <br/>
    <input type = "submit" disabled = {name === "" || URL === ""}/>
    </form>
    )
  }

export default Form
