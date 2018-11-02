import React, { Component } from 'react'
class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            alUsers: [],
            radioGroup: {
                LeftHanded: false,
                RightHanded: true,
                Aggressive: false
            },
            checkBoxGroup: {
                Pull: false,
                Hook: false,
                Sweap: false
            },
            selectedValue: 'null'
        }
        this.formHandler = this.formHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.radioHandler = this.radioHandler.bind(this);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
        this.SelectHandler = this.selectHandler.bind(this);
    }

    formHandler(event) {
        this.setState({
            username: event.target.value,
            password: event.target.value
        })
    }
    saveUser() {
        let currentUser = this.state.alUsers;
        currentUser.push(this.state.username)
        this.setState({
            alUsers: currentUser,
            username: ""

        })
        console.log(this.state.alUsers);
    }
    radioHandler(event) {
        let radioGroup = this.state.radioGroup;
        for (var key in radioGroup) {
            radioGroup[key] = false;
        }
        radioGroup[event.target.value] = event.target.checked;
        this.setState({
            radioGroup: radioGroup
        })
        console.log(event.target.value)
    }
    checkBoxHandler(event){
        let checkBoxGroup = this.state.checkBoxGroup;
        checkBoxGroup[event.target.value] = event.target.checked;
        this.setState({
            checkBoxGroup: checkBoxGroup
        })
        console.log(event.target.value)
    }
    selectHandler(event){
        this.setState({
            selectedValue: event.target.value
        })
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <h1>Hello Forms</h1>
                <input type="text" name="userName" value={this.state.username} onChange={this.formHandler}></input>
                <br />
                Batsman Style
                <br />
                <label >
                    Right Handed <input type="radio" name="battingStyle" value="RightHanded"
                        checked={this.state.radioGroup['RightHanded']} onChange={this.radioHandler}>
                    </input>
                </label>
                <br />
                <label >
                    Left Handed<input type="radio" name="battingStyle" value="LeftHanded"
                        checked={this.state.radioGroup['LeftHanded']} onChange={this.radioHandler} >
                    </input>
                </label>
                <br />
                <label >
                    Left Handed<input type="radio" name="battingStyle" value="Aggressive"
                        checked={this.state.radioGroup['Aggressive']} onChange={this.radioHandler} >
                    </input>
                </label>
                <br />
                Favoruit Shots
                <br />
                <label >
                    Pull <input type="checkBox" name="FavoruitShots" value="Pull"
                        checked={this.state.radioGroup['Pull']} onChange={this.checkBoxHandler}>
                    </input>
                </label>
                <br />
                <label >
                   Hook<input type="checkBox" name="FavoruitShots" value="Hook"
                        checked={this.state.radioGroup['Hook']} onChange={this.checkBoxHandler} >
                    </input>
                </label>
                <br />
                <label >
                    Sweap<input type="checkBox" name="FavoruitShots" value="Sweap"
                        checked={this.state.radioGroup['Sweap']} onChange={this.checkBoxHandler} >
                    </input>
                </label>
                <br/>
                <button onClick={this.saveUser}>Click Me</button>
                <br/>
                Ground
                <select value= {this.state.selectedValue} onChange={this.SelectHandler}>
                    <option value ="A">A</option>
                    <option value ="B">B</option>
                    <option value ="C">C</option>
                    <option value ="D">D</option>
                </select>
            </div>
        )
    }
}
export default Forms;