import React from 'react';
import defaultPic from '../images/blank-prof-pic.jpeg';

class NavBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            // currentTab: 'home'
        }
    }
    

    render() {
        return (
            <nav id="main-nav-bar">
                <div id="nav-container">
                    <a href="" id="logo-container">
                        <h1>Korra</h1>  
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
                    <div id="profile-icon">
                        <img src={defaultPic} alt=""/>
                    </div>
                    <div id="ask-question">
                        <div id="ask-button-container">
                            <button>Ask Question</button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;