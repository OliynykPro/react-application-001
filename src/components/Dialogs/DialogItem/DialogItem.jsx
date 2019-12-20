import React from 'react';
import styles from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    
    return (
        <div className={styles.dialogItem}>
                <NavLink to={path} activeClassName={styles.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;