import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.postItemWrap}>
            <img src='https://cont.ws/uploads/pic/2019/7/1494592816133830021.jpg'/>{props.message}
            <span>Likes - {props.likes}</span>
        </div>
    )
}

export default Post;