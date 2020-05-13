import React from "react";
// import axios from "axios";

// const journals = [];
// const isLoading = true;
// const errors = null;

//     if(isLoading) {
//         axios
//             .get(`https://jimmyhwang4-final-project.herokuapp.com/`)
//             .then(response =>
//                 response.data.map(journals => ({
//                     title: `${userInformation.title}`,
//                     date: `${userInformation.date}`,
//                     content: `${userInformation.content}`
//                 }))
//             )
//             .then(journals => {
//                 this.setState({
//                     journals,
//                     isLoading: false
//                 });
//             })
//             .catch(error => this.setState({ error, isLoading: false }));
//     }

function UserProfileComponent() {
    return(
        <div className="journalBox">
            <h2>Last Day of School</h2>
            <p>5/12/2020</p>
            <p>Today is my last day of college. I am excited to graduate.</p>
        </div>
    );
}

export default UserProfileComponent;