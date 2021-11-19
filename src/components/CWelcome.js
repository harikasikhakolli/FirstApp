import React,{Component} from 'react'

class CWelcome extends Component
{
   render(){
    const {data1,data2}=this.props
       return(
            <div>
           <h1>From Class component</h1>
           {/* <h2>{this.props.arr.map((num) => (num * 2))}</h2> */}
           <h3>{data1}</h3>
           <h4>{data2}</h4>
           </div>
       )
   }

}
export default CWelcome