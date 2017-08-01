import React from 'react';

import GithubUser from './GithubUser';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                this.setState({
                    followers
                });
            }
        );
    }

    render() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }
        return (
            <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map( follower => <GithubUser user={follower} key={follower.id}/>)}
                </ul>
            </div>
        );
    }
};

export default Followers;
