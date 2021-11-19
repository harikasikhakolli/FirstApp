import { Component } from "react"

class Counter2 extends Component
{
    constructor()
    {
        super()
        this.state={
            counter:0
        }
    }
    changeValue(){
        this.setState({
            counter:this.state.counter+ 1 
        })
    }
    render(){
        return(
               <>
                  <h1>{this.state.counter}</h1>
                  <button onClick={this.changeValue}>Increment</button>
               </>
        );
    }
}
export default Counter2