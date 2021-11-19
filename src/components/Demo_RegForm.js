import React from 'react'

import { useState } from 'react'

export default function Demo_RegForm()
{
   const[firstname,setfirstname] = useState("")
   const[lastname,setlastname] = useState("")
   const[gender,setgender]=useState("")
   const[age,setage]=useState("")

   function displayvalues(event)
   {
      event.preventDefault()

       var user = {
           firstname:firstname,
           lastname:lastname,
           gender:gender,
           age:age
       }
       console.log(user)
   }
   
    return <div>
    <form onSubmit={displayvalues}>
    <input type="text" placeholder="Enter First Name" required value={firstname} onChange={ (e) => {setfirstname(e.target.value)}  }    /> <br/><br/>
    <input type="text" placeholder="Enter Last Name" required value={lastname} onChange={ (e) => {setlastname(e.target.value)}  }    /> <br/><br/>
    <input type="radio" value="male" name="gender" required onClick={ (e) => {setgender(e.target.value)}}/>Male 
    <input type="radio" required value="female" name="gender" onClick={ (e) => {setgender(e.target.value)}}/>Female <br/><br/>
    <input type="number" required placeholder="Enter Age" value={age} onChange={ (e) => {setage(e.target.value)}  }    /> <br/><br/>       
    <input type="submit" value="Register"/> 
    <input type="reset" value="Clear"/>   
    </form>
    </div>
}

