import React from 'react';
// import defaultPic from '../images/blank-prof-pic.jpeg';
import ProfileDropdownContainer from './profile_dropdown_container';


class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    callDropDown() {
        const profileDropdown = document.getElementById("profile-dropdown");
        profileDropdown.classList.toggle('disappear');
    }
    
    askQuestion() {
        const questionComponent = document.getElementById("question-component");
        questionComponent.classList.toggle('disappear')
    }

    render() {
        return (
            <nav id="main-nav-bar">
                <div id="nav-container">
                    <a href="" id="logo-container">
                        <h1 className="logo">Korra</h1>  
                    </a>
                    <a href="" id="home-nav">
                        <div className="inner-container">
                            <i className="far fa-newspaper"/>
                            <span>Home</span>
                        </div>
                    </a>
                    <a href="" id="answer-nav">
                        <div className="inner-container">
                            <i className="far fa-edit"/>
                            <span>Answer</span>
                        </div>
                    </a>
                    <a href="" id="spaces-nav">
                        <div className="inner-container">
                            <i className="fas fa-users"/>
                            <span>Spaces</span>
                        </div>
                    </a>
                    <a href="" id="notifications-nav">
                        <div className="inner-container">
                            <i className="far fa-bell"></i>
                            <span>Notifications</span>
                        </div>
                    </a>

                    <div id="search-bar">
                        {/* will use to expand when clicked on */}
                        <div id="search-container">
                            <i id="search-icon" className="fas fa-search"/>
                            <input type="search" placeholder="Search Quora"/>
                        </div>
                    </div>
                    <div onClick={this.callDropDown} id="profile-icon">
                        <img src={window.defaultImage} alt=""/>
                        <ProfileDropdownContainer />
                    </div>
                    <div id="ask-question">
                        <div id="ask-button-container">
                            <button
                                onClick={this.askQuestion}
                            >Ask Question</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;