import { Component } from "react";

class DemoCC extends Component{
    constructor()
    {
        super();
        this.state={count:0}
    }
    chkIncrement()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    chkDecrement()
    {
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return(
            <div>
                <h2>{this.state.count}</h2>
            <button onClick={()=>this.chkIncrement()}>Increment</button>
            <button onClick={()=>this.chkDecrement()}>Decrement</button>
            </div>
        )
    }
}
export default DemoCC