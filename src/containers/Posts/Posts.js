import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
       //this.props.history.push({pathname: `/${id}`});
       this.props.history.push(`/${id}`);
    }

    render(){
        let post = <p style={{ textAlign: "center" }}>Something went wrong</p>
        post = this.state.post.map(
            post => 
            // <Link to={`/${post.id}`} key={post.id}>
                <Post key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.fullPostHandler(post.id)}/>
            // </Link>
        );

        return (
            <section className="Posts">
                {post}
            </section>
        );
    }
}

export default Posts;