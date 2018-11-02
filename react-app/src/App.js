import React, { Component } from 'react';

class HelloWorld extends Component {
  myFaceBookLink() {
    return 'https://www.facebook.com/faraz.ahmed879';
  }
  myText() {
    return 'Click Me';
  }
  render() {
    return (
      <div>
        <p>
          My FaceBook ID is : <a href={this.myFaceBookLink()}>{this.myText()}</a>
        </p>

      </div>
    )
  };
}
export default HelloWorld;