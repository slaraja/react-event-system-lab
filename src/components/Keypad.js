import React, { Component } from "react";

class Keyboard extends Component {

    // handleEvent = () => {

    // }


    render() {
        // return <input type={show_input?'text':'password'} 
        return <input type='password'
        name='password' 
        id='password'
        value={user.password}
        onChange={handleChange} 
        />

    }

}

export default Keyboard;
