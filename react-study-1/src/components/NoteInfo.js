import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class NoteInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.noteinfo.title} <br/>
                {this.props.noteinfo.contents} <br/>
                No.{this.props.idx}
                <p/>
            </div>


        );
    }


}


NoteInfo.propTypes = propTypes;
NoteInfo.defaultProps = defaultProps;

export default NoteInfo;
    
    