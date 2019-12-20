import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css'
import {addPostActionCreator, updateTextareaActionCreator} from "../../../redux/profile-page-reducer";
import SendPostFormRedux from "./SendPostForm";

const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map((post) => <Post id={post.id} message={post.message} likes={post.likes}/>);

    let postTextareaLink = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <h2>My posts</h2>
            <SendPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;