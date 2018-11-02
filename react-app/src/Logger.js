import React, {Component} from 'react'
class Logger extends Component{
    constructor(props){
        super(props);
        console.log('constructor running');
    }
    componentWillMount(){
        console.log('Will mount Running');
    }
    componentWillReceiveProps(nextProps){
        console.log('Recieve Props Running', nextProps);
    }
    shouldComponentUpdate(newProps, newState){
        console.log('Should CompoentUpdate');
        console.log('Props', newProps);
        console.log('State', newState);
        return true;
    }
    componentDidMount(){
        console.log('Component Did Mount');
    }
    componentWillUpdate(nextProps, nextState){
        console.log('Will CompoentUpdate');
        console.log('Props', nextProps);
        console.log('State', nextState);
    }
    componentDidUpdate(oldProps,oldState){
        console.log('Did CompoentUpdate');
        console.log('Props', oldProps);
        console.log('State', oldState);
    }
    componentWillUnmount(){
        console.log("UnmountTrigger");
    }
    render(){
        return <h1>{this.props.time}</h1>;
    }
}
export default Logger;