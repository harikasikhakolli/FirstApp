import React, { Component } from 'react';
class  GreetUser extends Component {
    constructor()
    {
        super();
        this.state = {'message':'harika'}
    }
    changeMsg(){
        this.setState({'message':'ram'});
    }
    render() { 
        return ( 
            <>
             <h1>Welcome {this.state.message}</h1>
            <button onClick={()=>this.changeMsg()}>Change</button>
             </>
         );
    }
}
 
export default GreetUser;