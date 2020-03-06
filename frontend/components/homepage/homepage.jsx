import React from 'react';


class Homepage extends React.Component {

    componentDidMount() {
        const pageContainer = document.getElementById("page-container");
        pageContainer.classList.add("disappear");
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Homepage;