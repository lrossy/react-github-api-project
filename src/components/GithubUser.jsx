import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="github-user-container">
                <Link to={"/user/" + this.props.user.login}>
                    <img alt="" src={this.props.user.avatar_url}/>
                    <span>{this.props.user.login}</span>
                </Link>
            </div>

        );
    }
};

export default GithubUser;
