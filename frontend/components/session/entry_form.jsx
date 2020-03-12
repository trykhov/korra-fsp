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
            showSignUp: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSession = this.demoSession.bind(this);
    }

    leftSideComponent() {
        const { username, email, password } = this.state.signup;
        const { loginErrors } = this.props;
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
                    <div className="button-container">
                            <a 
                                onClick={() => this.setState({showSignUp: false})} 
                            >Cancel</a>
                            <button className="form-button">Sign Up</button>
                    </div>
                    <ul className={`signup-error-messages ${loginErrors ? "" : "disappear"}`}>
                        {
                            loginErrors ? loginErrors.map(error => <li className="error-list-item">{error}</li>) : ""
                        }
                    </ul>
                </form>
            </div>
           );
        } else {
            return (
                <div>
                    <div 
                        id="demo-button-container" 
                        className="signup-left-side"
                        onClick={(e) => this.demoSession(e)}
                    >
                        <a className="demo-button" href="">Demo</a>
                    </div>
                    <div 
                        id="sign-up-button-container" 
                        className="signup-right-side"
                        onClick={() => this.setState({showSignUp: true})} 
                    >
                        <span>
                            <a id="show-sign-up">Sign Up</a>
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
        } else {
            this.props.signup(this.state.signup)
        }
    }

    demoSession(e) {
        e.preventDefault();
        this.props.login({email:"ultralord@jn.org", password: "imultralord"});
    }


    render() {        
        const { email, password } = this.state.login;
        const { sessionErrors } = this.props;
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
                                <button className="login-form-button form-button">Login</button>
                                <p className={`error-message ${sessionErrors ? "" : "disappear"}`}>{sessionErrors}</p>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default EntryForm;

