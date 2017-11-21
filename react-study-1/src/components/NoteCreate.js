import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';



const propTypes = {};

const defaultProps = {};

class NoteCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleClick(){
        console.log("Create Clicked");
    }

    render() {
        return (
            <div>
                <button className="App-createButton" onClick={this.handleClick}>Create</button>
            </div>
        );
    }


}


NoteCreate.propTypes = propTypes;
NoteCreate.defaultProps = defaultProps;

export default NoteCreate;
    
    