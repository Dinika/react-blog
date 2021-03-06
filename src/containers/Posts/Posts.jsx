import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import {Link, Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    }
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error.response);
            });
    }
    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }
    render() {
        //let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        let posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />);
        }); 
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} component={FullPost} />
            </div>

        )
    }
}

export default Posts;