import React from 'react';
class BasicInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            person: {
                name: this.props.name,
                age: this.props.age,
                address: this.props.address,
                id: this.props.id,
                number: this.props.number
            }
        }
    }
    render() {
        return (
            <div className="App">
                <div>
                    <p> name: {this.state.person.name} </p>
                    <p> age:  {this.state.person.age} </p>
                    <p> address:  {this.state.person.address} </p>
                    <p> id: {this.state.person.id} </p>
                    <p> number: {this.state.person.number} </p>
                </div>
            </div>
        );
    }
}
export default BasicInfo;