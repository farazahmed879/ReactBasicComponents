import React, { Component } from 'react';
class Counter extends Component{
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <button onClick= {this.props.inCreament}>+</button>
                <span>{this.props.counter}</span>
                <button onClick= {this.props.deCreament}>-</button>
            </div>
        )
    };
}
export default Counter;