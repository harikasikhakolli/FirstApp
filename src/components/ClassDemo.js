import {Component} from 'react'

class ClassDemo extends Component
{
    constructor(){
        super();
        this.state={msg:'user'}
    }
   render()
   {
       return(
             <div>
                 <h1>{this.state.msg}</h1>
                 <button>click to Change</button>
            </div>
       )
   }


}
export default ClassDemo