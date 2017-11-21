import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Search from '../components/Search';

const propTypes = {};

const defaultProps = {};

class header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='App-header'>
                <h1>윤사이트</h1>
                <br/>
                <Search/>
            </div>
        );
    }


}


header.propTypes = propTypes;
header.defaultProps = defaultProps;

export default header;
    
    