import React from 'react';
import {addPostActionCreator, updateTextareaActionCreator} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {
//     debugger;
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let updateTextarea = (newPost) => {
//         //let newPost = postTextareaLink.current.value;
//         props.store.dispatch(updateTextareaActionCreator(newPost));
//     }
//
//     return (
//         <MyPosts
//             addPost={addPost}
//             updateTextarea={updateTextarea}
//             posts={state.profilePage.postsData}
//             newPost={state.profilePage.newPostText}
//         />
//     )
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPost: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;