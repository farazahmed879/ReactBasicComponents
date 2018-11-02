import React, { Component } from 'react';
// import Digitalclock from './Digitalclock'
// import Analogclock from './Analogclock'
import Logger from './Logger'
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            counter: 0

        }
        this.updateTime();
    }
    updateTime() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString(),
                counter: this.state.counter + 1
            })

        }, 1000)
    }
    render() {
        return (
            <div>
                {/* <Digitalclock time={this.state.currentTime} />
                <Analogclock time={this.state.currentTime} /> */}
                {   (this.state.counter < 2) ?
                    <Logger time={this.state.currentTime}></Logger>:
                    <div></div>
                }
            </div>
        )
    };
}
export default Clock;