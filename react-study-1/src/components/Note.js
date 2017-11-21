import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import NoteInfo from '../components/NoteInfo';


const propTypes = {};

const defaultProps = {};

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteData:[
                {title:'제목1', contents:'본문1'},
                {title:'제목2', contents:'본문2'},
                {title:'제목3', contents:'본문3'},
                {title:'제목4', contents:'본문4'}
            ]
        };
    }

    render() {

        const mapToComponent = (data) => {
            return data.map((note,i) => {
                return (<NoteInfo noteinfo={note} idx={i}/>)
            })
        };


        return (
            <div className="App-note">
            {/*    <div>
                    제목1 <br/>
                    본문1
                </div>
                <div>
                    제목2 <br/>
                    본문2
                </div>
                <div>
                    제목3 <br/>
                    본문3
                </div>
                <div>
                    제목4 <br/>
                    본문4
                </div>
                <div>
                    제목5 <br/>
                    본문5
                </div>
                <div>
                    제목6 <br/>
                    본문6
                </div>*/}
                {mapToComponent(this.state.noteData)}



            </div>



        );
    }


}


Note.propTypes = propTypes;
Note.defaultProps = defaultProps;

export default Note;
    
    