import React from "react";

function LoginForm({ LoginFunction }) {
    return (
            <div className="SignupBox">
                <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
                    <h3>Login</h3>
                    <label htmlFor="loginEmail">Email</label>
                    <input type="text" name="loginEmail" />
                    <label htmlFor="loginPassword">Password</label>
                    <input type="text" name="loginPassword" />
                    <button>Log in</button>
                </form>
            </div>
    );
}

export default LoginForm;