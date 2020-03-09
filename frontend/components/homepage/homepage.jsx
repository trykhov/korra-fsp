import React from 'react';
import AnswerTab from '../answers/answer_tab_homepage';

class Homepage extends React.Component {

    // generate an infinite scroll
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const tab = document.getElementById("home-nav");
        tab.style.color = "rgb(185, 43, 39)";
        tab.style.borderBottom = "2px solid rgb(185, 43, 39)";
    }

    componentWillUnmount() {
        const tab = document.getElementById("home-nav");
        tab.style.color = "#636466";
        tab.style.borderBottom = "none";
    }

    render() {
        // const { currentUser } = this.props;
        const currentUser = window.currentUser;
        return (
            <div id="homepage-container">
                <div id="topics-container">

                </div>
                <div id="answer-feed-container">
                    <div id="outter-question-container">
                        <section id="asker-container" className="question-container">
                            <img className="profile-image" src={window.defaultImage}/>
                            <span>{currentUser.username}</span>
                        </section>
                        <div id="question">What is your question?</div>
                    </div>
                    <AnswerTab />
                </div>
            </div>
        )
    }
}

export default Homepage;