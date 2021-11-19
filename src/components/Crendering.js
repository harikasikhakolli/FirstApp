function Signin()
{
   return(
       <h1>Welcome Harika</h1>
   )
}
function Signout(){
          return(
              <h2>welcome Guest</h2>
          )
}
const data=[{id1:12,name:'student1'},{id1:14,name:'student2'},{id1:13,name:'student3'}]

function Crendering()
{
    const D1=data.map((d,index)=><li key={index}>{index}{d.name}</li>)
    // const isLoggedIN=true;
    // if(isLoggedIN)
    //   return <Signin/>
      
    // else
    //    return <Signout/>

    // return(
    //     (10 > 5) && alert('This alert will be shown!') 
    // )

  
   return(
       <ul>{D1}</ul>
   )


}
export default Crendering