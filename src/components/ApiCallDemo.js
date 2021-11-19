import { useState} from "react"
import Axios from "axios"

function ApiCallDemo()
{ 
   const [data2,setData1]=useState("");
   function getData()
   {
    fetch("https://official-joke-api.appspot.com/random_joke").then((response)=>response.json()).then((data)=>
    {
          setData1(data.setup)
   })
}
      return(
            <div>
            <button onClick={()=>getData()}>Click to get Data</button>
            {data2}
            </div>
      )
      
}
export default ApiCallDemo