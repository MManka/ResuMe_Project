import React from 'react';
import ReactDOM from 'react-dom';

class MenuHome extends React.Component{
    render() {
        return(
            <div className = "menu-box-white">
                <h2 id = "resume" style = "white">ResuME</h2>
                <icon><img src = {this.props.icon} height = {90}/></icon>
                <la><a href="index.html">Search Templates</a></la>
                <la><a href="#About">About</a></la>
                <la><a href="#Contact">Contact</a></la>
                <la><a href="#applications">Help</a></la>
            </div>
        );
    }
}

class HomeOptions extends React.Component{
    render() {
        return(
            <div id = "Shadow-Box">
                <h1 className = "heading">Begin Creating Your ResuMe</h1>
                <btn><a href = "/userAccount">Sign Up</a></btn>
                <br/>
                <btn><a href="/signup">Log in</a></btn>
            </div>
        );
    }
}

ReactDOM.render(<MenuHome icon = "http://images.clipartpanda.com/stack-of-paper-vector-29343.png"/>, document.getElementById('menu'));
ReactDOM.render(<HomeOptions />,document.getElementById('home'));

