import React,{Component} from 'react'
class Car extends Component {
    constructor() {
      super();
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: 'blue'});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <input type="button" onClick={()=>this.changeColor} value="Change color"/>
        </div>
      );
    }
  }
  export default Car