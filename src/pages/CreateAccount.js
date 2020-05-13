import React from "react";
// Components
import CreateAccountFrom from "../components/CreateAccountForm";

function CreateAccount({ CreateAccountFunction }) {
    return (
        <div className="background">
            <div className="launchContainer">
                <div className="launchPage">
                    <h1>myNote</h1>
                    <div className="launchContent">
                        <img width="200px" height="250px" alt="pen_and_paper" src="pen_and_paper.png"></img>
                        <div className="launchText">
                            <p>Welcome to myNote, a personal journal for your eyes only.</p>
                            <p>This app would be perfect for writing down your daily activities, thoughts and feelings, to-do lists, and more!</p>
                            <p>Log in or create an account to view and edit your myNote.</p>
                        </div>
                    </div>
                </div>
                <div className="loginBox">
                <CreateAccountFrom CreateAccountFunction={CreateAccountFunction} />
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;