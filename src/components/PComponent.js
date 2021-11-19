import { Component } from "react"
import CComponent from "./CComponent"
class PCompnent extends Component
{
    constructor()
    {
        super()
        this.state={name:'parent'}
        this.gp=this.greetParent.bind(this)
    }
    greetParent(c)
    {
        alert(`Hello from ${this.state.name} from ${c}`)
    }
   render()
   {
       return(      
         <div>
             <CComponent gp={this.gp}/>
         </div>
       )
   }


}
export default PCompnent