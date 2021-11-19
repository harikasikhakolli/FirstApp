import React,{Component} from 'react';
class ConditionalRenderingDemo1 extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedIn:false
        };
    }
    render()
    {
    //     if(this.state.isLoggedIn){
    //         return (
    //             <div>
        
    //                 <h1>Hello Harika</h1>
    //              </div>
    //         )
    //     }
    //     else{
    //         return (
    //             <div>
        
    //                 <h1>Hello guest</h1>
    //              </div>
    //         )
            
    //     }
    // }
    let element
    if(this.state.isLoggedIn){
        element=<div>Welcome Harika</div>
    }
    else{
        element=<div>Welcome Guest</div>
    }
    return <div>{element}</div>
}
}

export default ConditionalRenderingDemo1;