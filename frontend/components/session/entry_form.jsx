import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                            <div>
                                <div className="signup-left-side">
                                    <a href="">Demo</a>
                                </div>
                                <div className="signup-right-side">
                                    <a href="">Sign Up</a>
                                </div>
                            </div>
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
                                        onChange={this.handleInput('email')}
                                        type="text" 
                                        placeholder="Email"
                                        value={email}
                                    />
                                </div>
                                <div id="password">
                                    <input 
                                        onChange={this.handleInput('password')}
                                        type="password" 
                                        placeholder="Password"
                                        value={password}
                                    />
                                </div>
                                <button>Login</button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        )
    }
}

export default EntryForm;

