import React from 'react';

class EntryForm extends React.Component {
    

    render() {
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
                            <form>
                                <div id="login-title">Login</div>
                                <div id="email">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div id="password">
                                    <input type="password" placeholder="Password"/>
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