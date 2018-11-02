import React, { Component } from 'react';
import Counter from './Counter'
class MyEvents extends Component {

    // clickHandler() {
    //     console.log("FUnction Called")
    // }
    constructor(props) {
        super(props);
        this.state = {
                counter: 0
        }
        this.InCreamentCounter = this.InCreamentCounter.bind(this)
        this.DeCreamentCounter = this.DeCreamentCounter.bind(this)
    }
    // IncreamentHandler(ev){
    //     console.log(ev , 'Evet')
    //     // this.setState({
    //     //     counter: this.state.counter + 1
    //     // })
    // }
    InCreamentCounter(){
        if(this.state.counter !== 10)
        this.setState({
            counter: this.state.counter +1
        })
    }
    DeCreamentCounter(){
        if(this.state.counter !== 0)
        this.setState({
            counter: this.state.counter -1
        })
    }
    render() {
        return (
            <div>
                {/* <h1>hEllo Events</h1>
                {/* <button onClick={function () {
                    console.log("Button Clicked");
                }} >First Button</button>

                <button onClick={this.clickHandler}
                >Second Button</button> *
                <button onClick= {this.IncreamentHandler}>Click Here</button>
                <span>{this.state.counter}</span>
                <button onClick= {this.IncreamentHandler}>Click Here</button> */}
                <Counter counter= {this.state.counter} inCreament= {this.InCreamentCounter} deCreament = {this.DeCreamentCounter}/>
            </div>

        )
    }
}
export default MyEvents;