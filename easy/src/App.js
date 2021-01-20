import React from 'react';
import './App.css';

// Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set
// ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’
// create a ‘person’ property and set it to an empty object

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Person: {

      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <p> name: Fredrick Evans </p>
          <p> age: 23 </p>
          <p> Address: 123 mindyour business lane </p>
          <p> Id: 12345 </p>
          <p> number: 7041234567 </p>
        </div>
      </div>
    );
  }
}

export default App;
