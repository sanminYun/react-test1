import React, {Component} from 'react';
import './App.css';
import Header from './header/Header';
import Body from './body/Body';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Body/>
                </div>

            </div>


        );
    }
}

export default App;
