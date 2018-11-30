import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from '../NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        authenticated: true
    }
    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/posts">Home</NavLink></li>
                            <li><NavLink to={{ pathname: '/new-post' }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.authenticated ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;