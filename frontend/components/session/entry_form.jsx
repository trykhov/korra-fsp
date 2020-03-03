import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: '',
            showSignUp: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    leftSideComponent() {
        if(this.state.showSignUp) {
           return (
            <div>
                <h2 id="sign-up-header">Sign Up</h2>
                <form id="sign-up-form">
                    <div>
                        <label>Username:</label>
                        <div className="sign-up-input-container">
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <div className="sign-up-input-container">
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <label>Password: </label>
                        <div className="sign-up-input-container">
                            <input type="password"/>
                        </div>
                    </div>
                    <div id="sign-up-button-container">
                            <a>Cancel</a>
                            <button className="login-form-button">Sign Up</button>
                    </div>
                </form>
            </div>
           );
        } else {
            return (
                <div>
                    <div className="signup-left-side">
                        <a href="">Demo</a>
                    </div>
                    <div className="signup-right-side">
                        <span>
                            <a  id="show-sign-up"
                                onClick={() => this.setState({showSignUp: true})} 
                            >Sign Up</a>
                        </span>
                    </div>
                </div>
            )
        }
    }

    handleInput(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then(this.props.history.push("/"));
        this.setState({username: '', email: '', password: ''});
    }

    render() {
        const { username, email, password } = this.state;
        return (
            <main id="login-info">
                <div id="main-login-container">
                    <section id="logo-info">
                        <h1 className="logo">Korra</h1>
                        <p>A place to learn things and stuff</p>
                    </section>
                    <section id="login-input-container">
                        <div id="signup-demo-container">
                            {this.leftSideComponent()}
                            <div id="disclaimer">
                                <p>
                                    Disclaimer: This project is
                                    designed for personal showcase. It is not designed to be monetized and 
                                    all credit goes to the team over at Quora. Should you wish to use the sign up and logging feature,
                                    do not put sensitive information.
                                </p>
                            </div>
                        </div>
                        <div id="login-form-container">
                            <form onSubmit={e => this.handleSubmit(e)}>
                                <div id="login-title">Login</div>
                                <div id="email">
                                    <input 
                                        className="login-form-input"
                                        onChange={this.handleInput('email')}
                                        type="text" 
                                        placeholder="Email"
                                        value={email}
                                    />
                                </div>
                                <div id="password">
                                    <input 
                                        className="login-form-input"
                                        onChange={this.handleInput('password')}
                                        type="password" 
                                        placeholder="Password"
                                        value={password}
                                    />
                                </div>
                                <button className="login-form-button">Login</button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default EntryForm;

