import React from 'react'

function Mean(props)
{
    return(
        <div>
        <h1>We are from MEAN stack</h1>
        <h2>This is very important subject</h2>
         <p>List of courses in K L university</p>
         <div>
             <ul>
             {props.dishes.map((dish)=><li>{dish}</li>)};
             </ul>
         </div>
        </div>
    )
}
export default Mean