import React from 'react';
// import AnswerTab from '../answers/answer_tab_homepage';
import AnswerTabContainer from '../answers/answer_tab_homepage_container';
class Homepage extends React.Component {

    // generate an infinite scroll
    constructor(props) {
        super(props);
        this.state = {
            answers: []
        };
        this._isMounted = this.props.fetchAllQuestions;
    }

    componentDidMount() {
        const tab = document.getElementById("home-nav");
        tab.style.color = "rgb(185, 43, 39)";
        tab.style.borderBottom = "2px solid rgb(185, 43, 39)";
        this._isMounted();
    }

    componentWillUnmount() {
        // removes the red highlight from the home button
        const tab = document.getElementById("home-nav");
        tab.style.color = "#636466";
        tab.style.borderBottom = "none";
    }


    modalQuestion() {
        const modalQuestion = document.getElementById("question-component");
        modalQuestion.classList.toggle("disappear");
    }

    render() {
        if(!this.props.questions) {
            return null;
        }
        return (
            <div id="homepage-container">
                <div id="topics-container">

                </div>
                <div id="answer-feed-container">
                    <div id="outter-question-container" onClick={this.modalQuestion}>
                        <section id="asker-container" className="question-container">
                            <img className="profile-image" src={window.defaultImage}/>
                            <span>{this.props.currentUser.username}</span>
                        </section>
                        <div id="question">What is your question?</div>
                    </div>
                    {this.props.questions.map(question => {
                        return <AnswerTabContainer key={question.id} question={question}/>
                    })}
                </div>
            </div>
        )
    } 
}

export default Homepage;