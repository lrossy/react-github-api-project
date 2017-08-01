import React from 'react';

import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
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
            return <div>LOADING REPOS...</div>
        }
        return (
            <div className="followers-page">
                <h2>Repos of {this.props.params.username}</h2>
                <ul>
                    {this.state.followers.map( repo => <GithubRepo repo={repo} key={repo.id}/>)}
                </ul>
            </div>
        );
    }
};

export default Repos;
