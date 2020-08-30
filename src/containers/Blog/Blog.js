// import axios from 'axios';
import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        auth: false
    }
    render () {
        return (
            <div >
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { !this.state.auth ? <Route path="/new-post" component={NewPost}/> : null }
                    <Route path="/posts" component={Posts}/>
                    {/* <Route render={() => <h1>Not Found</h1>} /> */}
                    <Redirect from ="/" to="/posts"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Blog;