import React, {Component} from "react";

class Button extends Component{
    render(){

return(
    <button 
    className="button"
    onClick={this.props.jokes} >This is a button</button>
)

    }
}


export default Button