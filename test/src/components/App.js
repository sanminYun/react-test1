import React from 'react';
import Contact from './Contact';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.addMore = this.addMore.bind(this);
    }

    addMore() {
        this.setState({
            name: 'Velopert'
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.addMore}>Click me</button>
                <h1>Hello!!{this.state.name}</h1>
                <Contact/>
            </div>
        )
    }
}

export default App;