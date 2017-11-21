import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" name="search" placeholder="Search.."/>
            </div>
        );
    }


}


Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
    
    