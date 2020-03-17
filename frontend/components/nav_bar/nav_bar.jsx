import React from 'react';
// import defaultPic from '../images/blank-prof-pic.jpeg';
import ProfileDropdownContainer from './profile_dropdown_container';
import { Link } from 'react-router-dom';

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
                    <Link to="/" id="logo-container">
                        <h1 className="logo">Korra</h1>  
                    </Link>
                    <Link to="/" id="home-nav" className="nav-icon">
                        <div className="inner-container">
                            <i className="far fa-newspaper"/>
                            <span>Home</span>
                        </div>
                    </Link>
                    <a href="https://www.linkedin.com/in/tckhov" id="linkedin-nav" className="nav-icon">
                        <div className="inner-container">
                            <i className="fab fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a href="https://github.com/trykhov/korra-fsp" id="github-nav" className="nav-icon">
                        <div className="inner-container">
                            <i className="fab fa-github"></i>
                            <span>Github</span>
                        </div>
                    </a>
                    <a href="https://www.trykhov.com/" id="portfolio-nav" className="nav-icon">
                        <div className="inner-container">
                            <i className="fas fa-portrait"></i>
                            <span>Portfolio</span>
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
                    </div>
                    <ProfileDropdownContainer />
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