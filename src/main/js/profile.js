/**
 * Created on 2/24/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
    render() {
        return(
            <div className = "menu-box">
                <h2 id = "resume">ResuME</h2>
                <icon><img src = {this.props.icon} height = {90}/></icon>
                <li><a href="index.html">Search Templates</a></li>
                <li><a href="#certifications">My Certifications</a></li>
                <li><a href="#certifications">My Certifications</a></li>
                <li><a href="#applications">My Applications</a></li>
            </div>
        );
    }
}

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state={ height: 200, file: '',imagePreviewUrl: ''}
        };

    render() {
        return(
            <div id = "Shadow-Box">

                <h1 className = "profileStatus">{this.props.name}</h1>
                <h3 className = "profileStatus">{this.props.status}</h3>
                <h3 className = "profilework">{this.props.work}</h3>
                <img src = {this.props.pic} height = {this.state.height}/>
                <circularbtn onClick = {this.ProfileZoomIn.bind(this)}>+</circularbtn>
                <circularbtn2 onClick = {this.ProfileZoomOut.bind(this)}>-</circularbtn2>


                <circularbtn3><img src = {this.props.camera} height = {25} onChange={(e)=>this._handleImageChange(e)}
                                           className="image"/></circularbtn3>

                <br/><br/>
                <btn><a href = "MyResumes.html">View My Resumes</a></btn>
                {/*<button onClick = {this.MyResumesButton.bind(this)}>View Resumes</button> */}
                <br/><br/>
            </div>
        );
    }

    ProfileZoomIn(){
        this.setState({height: this.state.height + 30});
    }

    ProfileZoomOut() {
        this.setState({height: this.state.height - 30});
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
}

class ProfileInfo extends React.Component {
    render() {
        return(
            <div id = "Shadow-Box">
                <h2> Basic Information</h2>

                <br/>

                <form>
                    <label>
                     <input className = "formInputLong" type = "text"  placeholder=" First Name" name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Last Name" name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder="E-mail Address " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder="Phone Number" name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder="Address" name="name" />
                    </label>
                    <br/>

                    <h2> Work experience</h2>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Job Title  " name="name" />
                    </label>

                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Company Name  " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" start date " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" End Date " name="name" />
                    </label>
                    <br/>
                    <label>
                        <br/><br/><br/>
                        <textarea name = "info" className = "textareaInput"  placeholder=" job discription " cols ="50" rows="8"></textarea>
                    </label>
                    <br/>
                    <h2> Qualifications</h2>
                    <label>
                        <textarea name = "info" className = "textareaInput"  placeholder=" List Your Skills,Certifications and accreditions that you have received " cols ="50" rows="8"></textarea>
                    </label>
                    <br/>
                    <h2> Education</h2>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Institution Name " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Start Date (ex: September 2013)" name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" End Date (ex: April 2017, or Present)" name="name" />
                    </label>
                    <br/>
                    <label>
                        <textarea name = "info" className = "textareaInput"  placeholder=" Discription  " cols ="50" rows="8"></textarea>
                    </label>
                    <br/>
                    <h2> Interests</h2>
                    <label>
                        <textarea name = "info" className = "textareaInput"  placeholder=" List your interests " cols ="50" rows="8"></textarea>
                    </label>
                    <br/>
                    <h2> References</h2>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Full Name  " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Their Position " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Phone Number " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" E-mail Address " name="name" />
                    </label>
                    <br/>
                    <label>
                        <input className = "formInputLong" type = "text"  placeholder=" Company Name " name="name" />
                    </label>
                   <input type = "submit" value="Submit" />
                </form>
                <br/>


            </div>
        );
    }
}

ReactDOM.render(<Menu icon = "http://images.clipartpanda.com/stack-of-paper-vector-29343.png"/>, document.getElementById('menu'));
ReactDOM.render(<Profile name = "Yeeee" status = "Evil Goddess"  work = "Part-time Librarian" pic = "https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-256.png" camera = "http://www.ensatt.fr/images/Graphisme/photo-icone.png"/>,document.getElementById('profile-box'));
ReactDOM.render(<ProfileInfo/>, document.getElementById('profile-info'));