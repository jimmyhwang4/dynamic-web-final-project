import React from "react";
import UserProfileComponent from "../components/UserProfileComponent";

function UserProfile({ userInformation }) {
    return (
        <div className="background">
            <div className="userProfileContainer">
                <h1>Journal</h1>
                <p>Welcome {userInformation.email}!</p>
                <UserProfileComponent userInformation={userInformation} />
            </div>
        </div>
    );
}

export default UserProfile;