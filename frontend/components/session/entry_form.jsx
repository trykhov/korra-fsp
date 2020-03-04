import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                email: "",
                password: ""
            },
            signup: {
                username: "",
                email: "",
                password: ""
            },
            errors: "",
            showSignUp: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    leftSideComponent() {
        const { username, email, password } = this.state.signup;
        if(this.state.showSignUp) {
           return (
            <div>
                <h2 id="sign-up-header">Sign Up</h2>
                <form id="sign-up-form" onSubmit={e => this.handleSubmit(e, "Sign Up")}>
                    <div>
                        <label>Username:</label>
                        <div className="sign-up-input-container">
                            <input 
                                onChange={this.handleInput('username', 'signup')}
                                value={username}
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <div className="sign-up-input-container">
                            <input 
                                onChange={this.handleInput('email', 'signup')}
                                value={email}
                                type="text"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Password: </label>
                        <div className="sign-up-input-container">
                            <input 
                                onChange={this.handleInput('password', 'signup')}
                                value={password}
                                type="password"
                            />
                        </div>
                    </div>
                    <div id="sign-up-button-container">
                            <a 
                                onClick={() => this.setState({showSignUp: false})} 
                            >Cancel</a>
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
                            <a id="show-sign-up"
                                onClick={() => this.setState({showSignUp: true})} 
                            >Sign Up</a>
                        </span>
                    </div>
                </div>
            )
        }
    }

    handleInput(field, formType) {
        // ...this.state[formType] prevents prior values from being undefined
        return (e) => this.setState({[formType]: {...this.state[formType], [field]: e.target.value}})
    }

    handleSubmit(e, formType) {
        e.preventDefault();
        if(formType === "Log In") {
            this.props.login(this.state.login)
                .then(this.props.history.push("/")); // push to home
        } else {
            this.props.signup(this.state.signup)
                .then(this.props.history.push("/"))
        }
        this.setState({[formType]: {username: '', email: '', password: ''}});
    }

    render() {
        const { email, password } = this.state.login;
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
                            <form onSubmit={e => this.handleSubmit(e, "Log In")}>
                                <div id="login-title">Login</div>
                                <div id="email">
                                    <input 
                                        className="login-form-input"
                                        onChange={this.handleInput('email', 'login')}
                                        type="text" 
                                        placeholder="Email"
                                        value={email}
                                    />
                                </div>
                                <div id="password">
                                    <input 
                                        className="login-form-input"
                                        onChange={this.handleInput('password', 'login')}
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

