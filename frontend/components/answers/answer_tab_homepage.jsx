import React from 'react';
import { Link } from 'react-router-dom';

// this will appear in the home page as an answer to a question
class AnswerTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: undefined,
            answers: undefined
        }
    }

    componentDidMount() {
        const { fetchAllQuestionAnswers, fetchAllAnswerers, question } = this.props;
        // get all the people that answered
        fetchAllAnswerers(question.id)
            .then(users => this.setState({users}));
        fetchAllQuestionAnswers(question.id)
            .then(answers => this.setState({answers: Object.values(answers)}))
    }

    render() {
        const { question } = this.props;
        const {users, answers} = this.state;
        // don't render until the users and the answers have values
        if(users === undefined || answers === undefined || answers.length === 0) {
            return null;
        }
        // select a random answer
        const answer = answers[Math.floor(Math.random() * answers.length)];
        const time = new Date(answer.created_at);
        const dateAnswered = time.toDateString().substring(4);
        return (
            <li className="answer-tab-container">
                <p className="question-asked">
                    <Link to={`/question/${question.id}`}>{question.title}</Link>
                </p>
                <div className="answer-user-container">
                    <img className="profile-image answer-profile-picture" src={window.defaultImage}/>
                    <div className="user-info">
                        <div className="username">
                            {users[answer.user_id].username }
                        </div>
                        <div className="answered-date">
                            Answered { dateAnswered }
                        </div>
                    </div>
                </div>
                <div className="user-answer-container">
                    <span className="answer">
                    {answer.text}
                    </span>
                </div>
            </li>
        )
    }
}

export default AnswerTab