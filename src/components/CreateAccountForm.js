import React from "react";

function CreateAccountForm({ CreateAccountFunction }) {
    return (
        <div>
            <div className="SignupBox">
                <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)}>
                    <h3>Create Account</h3>
                    <label htmlFor="createEmail">Email</label>
                    <input type="email" name="createEmail" />
                    <label htmlFor="createPassword">Password</label>
                    <input type="password" name="createPassword" />
                    <button>Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default CreateAccountForm;