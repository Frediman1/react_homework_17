import React from 'react'
import BasicInfo from './BasicInfo'
import './App.css';
// Replace all of the hard - coded with data from ‘this.state.person’ in the constructor.Then take
// the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’.
// (This challenge should not change the look of the page)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: {
        name: "Fredrick Evans",
        age: "23",
        address: "123 mindyour business lane",
        id: "12345",
        number: "7041234567",
      }
    }
  }

  render() {
    return (
      <div>
        <BasicInfo {...this.state.person} />
      </div>
    )
  }
}
export default App;
