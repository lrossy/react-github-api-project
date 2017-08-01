import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <Link to={"/user/" + this.props.user.login}>
                <img alt="" src={this.props.user.avatar_url}/>
                {this.props.user.login}
            </Link>
        );
    }
};

export default GithubUser;
