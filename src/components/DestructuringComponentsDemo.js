import React from 'react'
const data={
    id:5164,
    name:'harika',
    dept:'cse',
    subjects_taught:{
        'sem1':'PBD',
        'sem2':'EP',
        'sem3':'UIUX',
        'sem4':'WE'
    },
    address:
    {
        DNO:103,
        flat:'Staff Quarters',
        street:'K L U 2nd gate',
        locations_nearby:{
            'vjw':'Durga Temple',
            'UND':'Caves',
            'gnt':'GGH'
        }
    }
}
function DestructuringComponentsDemo(props)
{
   //const {data1,data2}=props
   const { id, name, dept,  subjects_taught , address}=data;
   const {locations_nearby}=address;
   const { sem1 ,sem2 ,sem3 ,sem4}=subjects_taught;
   const {vjw,UND,gnt}=locations_nearby
   return(
   <div className="App">
      <h2>{name}</h2>
      <h2>{`${sem1} in first semester`}</h2>
      <h3>{data1}</h3>
      <h3>{data2}</h3>
   </div>
   );
}
export default DestructuringComponentsDemo