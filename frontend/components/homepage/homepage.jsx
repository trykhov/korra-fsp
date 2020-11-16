import React, { useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext';
import AnswerTabContainer from '../answers/to_homepage/AnswerTabHomepage';
import { fetchAllQuestions } from "../../util/question_util";

function Homepage() {

    const [displayAnswers, setDisplayAnswers] = useState([]);

    useEffect(() => {
        const tab = document.getElementById("home-nav");
        tab.style.color = "rgb(185, 43, 39)";
        tab.style.borderBottom = "2px solid rgb(185, 43, 39)";
        fetchAllQuestions()
            .then(res => {
                const questions = Object.values(res);
                const answers = questions.map(question => <AnswerTabContainer key={question.id} question={question}/>)
                setDisplayAnswers(answers);
            })
        return () => {
            const tab = document.getElementById("home-nav");
            tab.style.color = "#636466";
            tab.style.borderBottom = "none";
        }
    }, [])

    const modalQuestion = () => {
        const modalQuestion = document.getElementById("question-component");
        modalQuestion.classList.toggle("disappear");
    }

    return (
        <AppContext.Consumer>
            {currentUser => {
                const { username } = currentUser;
                return (
                    <div id="homepage-container">
                        <div id="answer-feed-container">
                            <div id="outter-question-container" onClick={modalQuestion}>
                                <section id="asker-container" className="question-container">
                                    <img className="profile-image" src={window.defaultImage}/>
                                    <span>{username}</span>
                                </section>
                                <div id="question">What is your question?</div>
                            </div>
                            {displayAnswers}
                        </div>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )

}

export default Homepage;