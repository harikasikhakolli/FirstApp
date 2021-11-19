import { Component } from "react";
import {Button} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {Home} from '@material-ui/icons'
class Count extends Component{
    constructor()
    {
        super();
        this.state={count:0,color:'primary'}
        this.countInc=this.countInc.bind(this);
        this.countDec=this.countDec.bind(this);
    }
   countInc()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    countDec()
    {
        this.setState({
            count:this.state.count-1
        })
    }
    changeColor()
    {
        this.setState({
            color:'secondary'
        })
    }
   render()
   {
       return(
           <div>
            <h2 style={{color:'blue'}}>{this.state.count}</h2>
            <Button variant="contained" size="large" color="primary" onClick={this.countInc}><Home style={{ color: 'green[500]' }} />Click for Increment</Button>
           <Button variant="contained" size="small" color="secondary" onClick={this.countDec}>Click for Decrement</Button>
           <Button variant="contained" size="medium" color={this.state.color} onClick={()=>this.changeColor()}>Chnage Color<Delete/></Button> 
           </div>
       )
   }
}
export default Count