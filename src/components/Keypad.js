import React, { Component } from "react";

class Keyboard extends Component {


    handleKeyUp = () => {
        console.log("Entering password...");
      }
    

    render() {
        return <input type='password' onKeyUp={this.handleKeyUp} />
    }
}

export default Keyboard;
