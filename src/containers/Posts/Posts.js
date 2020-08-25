import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        post: []
    };
    
    componentDidMount() {
        console.log(this.props);
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
                // this.setState({
                //     error: true
                // });
                console.log(err);
            });
    }

    fullPostHandler = id => {
        this.setState({
            selectedPostId: id
        });
    }

    render(){
        let post = <p style={{ textAlign: "center" }}>Something went wrong</p>
        post = this.state.post.map(
            post => <Post 
                key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={() => this.fullPostHandler(post.id)}/>
        );

        return (
            <section className="Posts">
                {post}
            </section>
        );
    }
}

export default Posts;