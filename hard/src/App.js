import React from 'react'
import BasicInfo from './BasicInfo'
import './App.css';
// // Now that you have a basic react app to display one person’s worth of information, 
// now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state.
//  (Optional: add styling to space out each person’s info)



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [
        {
          name: "Fredrick Evans",
          age: "23",
          address: "123 mindyour business lane",
          id: "12345",
          number: "7041234567",
        },
        {
          name: "Robert Young",
          age: "23",
          address: "123 mindyour business lane",
          id: "12345",
          number: "7041234567",
        },
        {
          name: "Artea Wright",
          age: "23",
          address: "123 mindyour business lane",
          id: "12345",
          number: "7041234567",
        },
        {
          name: "Jordan Howard",
          age: "23",
          address: "123 mindyour business lane",
          id: "12345",
          number: "7041234567",
        }
      ]
    }
  }

  render() {
    const infoElements = [];
    for (let i = 0; i < this.state.people.length; i++) {
      infoElements.push(<BasicInfo {...this.state.people[i]} />);
    }
    return (
      <div>
        {/* <BasicInfo {...this.state.person} /> */}
        {infoElements}
      </div>
    )
  }
}
export default App;
