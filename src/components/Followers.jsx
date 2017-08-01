import React from 'react';
import Infinite from 'react-infinite';

import GithubUser from './GithubUser';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            loading: false,
            followers: []
        };
    }

    fetchData() {
        console.log('fetchData')
        this.setState({
            loading: true
        });

        fetch(`https://api.github.com/users/${this.props.params.username}/followers?page=${this.state.page}&per_page=50`)
        .then(response => response.json())
        .then(
            followersResponse => {
                // How can we use `this` inside a callback without binding it??
                // Make sure you understand this fundamental difference with arrow functions!!!
                let followers = this.state.followers.concat(followersResponse);
                this.setState({
                    followers,
                    loading: false,
                    page: this.state.page + 1
                });
            }
        );
    }

    render() {
        return (
            <Infinite isInfiniteLoading={this.state.loading} onInfiniteLoad={this.fetchData.bind(this)} useWindowAsScrollContainer elementHeight={50} infiniteLoadBeginEdgeOffset={100}>
                {this.state.followers.map( follower => <GithubUser user={follower} key={follower.id}/>)}
            </Infinite>
        );
    }
};

export default Followers;
