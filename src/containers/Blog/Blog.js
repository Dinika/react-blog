import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
}

export default Blog;