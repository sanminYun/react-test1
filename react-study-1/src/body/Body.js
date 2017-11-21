import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Note from '../components/Note'
import NoteContainer from '../components/NoteContainer'
import NoteCreate from '../components/NoteCreate'

const propTypes = {};

const defaultProps = {};

class Body extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'App-body'>
                <Note/>
                <NoteCreate/>
            </div>

        );
    }


}


Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default Body;
    
    