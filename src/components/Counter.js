import { Component } from "react";

class Counter extends Component{
  constructor()
  {
      super();
      this.state={counter:0}
  }
  changeIncValue(){
      this.setState({
            counter:this.state.counter + 1
      })
  }
  changeDecValue(){
    this.setState({
      counter:this.state.counter - 1
    })
  }
  render(){
      return(
          <div>
            <h2>{this.state.counter}</h2>
            <button onClick={()=>this.changeIncValue()}>Increment</button>
            <button onClick={()=>this.changeDecValue()}>Decrement</button>
          </div>
        
      );
  }


}
export default Counter