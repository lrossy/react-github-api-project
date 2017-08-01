import React from 'react';

class GithubRepo extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <a href={this.props.repo.html_url} className="repo-link">
                    <div>{this.props.repo.full_name}</div>
                    <div className="repo-stars">{this.props.repo.stargazers_count}</div>
                </a>
            </div>
        );
    }
};

export default GithubRepo;
