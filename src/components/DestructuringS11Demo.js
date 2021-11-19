import React,{Component} from "react";
const data={
    id:5164,
    name:'harika',
    dept:'cse',
    subjects_taught:{
        sem1:'PBD',
        sem2:'WE',
        sem3:'UXD',
        sem4:'EP'
    },
    address:{
        dno:104,
        flat:'Rams apartments',
        street:'kunchanapally',
        locations_nearby:{
            vjw:'Durga temple',
            Gnt:'GGH'
        }
    }
}
// function DestructuringS11Demo(props)
// {
//     const {id,name,address}=data
//     const {c1,c2}=props
//     const {street}=address
//     return(
//         <>
//         <div>{`Street Name is:${street} Flat Name is ${address.flat}`}</div>
//         <div>{c1}</div>
//         <div>{c2}</div>
//         </>
//     )

// }
class DestructuringS11Demo extends Component {    
    render() { 
        const {c1,c2}=this.props
        return (  
            <div>
                <h1>{c1}</h1>
                <h2>{c2}</h2>
            </div> 
        );
    }
}
export default DestructuringS11Demo