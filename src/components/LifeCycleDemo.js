import { Component } from "react";

class LifeCycleDemo extends Component{
   constructor()
   {
       super();
       this.state={count:0,show:true}

   }

   componentDidMount()
   {
       console.log("mounted");
   }

 componentDidUpdate()
 {
     console.log("updated")
 }
 delHeader(){
     this.setState({show:false})
 }

   render(){
      let myheader;
      if(this.state.show)
          myheader=<ChildLCDemo/>
       return(
         <div>
             <center>
                 {myheader}
                 <button onClick={this.delHeader}>Delete Header</button><br/><br/>
                 <h3>Count:{this.state.count}</h3><br></br>
                 <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
             </center>
         </div>           
       )
   }

}

class ChildLCDemo extends Component{
    componentWillUnmount()
    {
       console.log("unmount called")
    }
    render()
    {
        return(
            <h1>Hello world..</h1>
        )
    }
}


export default LifeCycleDemo