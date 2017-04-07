/**
 * Created by Marlin on 3/3/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class ResumeList extends React.Component {
    render() {
        return (
            <div id = "template-List">
                <h2 className = "heading2">{this.props.myresumes}</h2>
                <br/><br/><br/><br/>
                <h2 className = "heading2"><a href = "/choose">New Resume Template</a></h2>
            </div>
        );
    }

}

ReactDOM.render(<ResumeList myresumes = "You have no Resumes"/>, document.getElementById('list'));