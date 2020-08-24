// import axios from 'axios';
import axios from 'axios';
import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        post: [],
        selectedPostId: null,
        error: false
    };
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const post = response.data.slice(0, 4);
                const updatedPost = post.map(post => ({
                    ...post,
                    author: 'Nitesh',
                }));
                this.setState({
                    post: updatedPost
                });
            })
            .catch(err=> {
                this.setState({
                    error: true
                });
                console.log(err);
            });
    }

    fullPostHandler = id => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {
        let post = <p style={{textAlign: "center" }}>Something went wrong</p>
        if(!this.state.error){
            post = this.state.post.map(
                post => <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.fullPostHandler(post.id)}/>
            );
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section>
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;