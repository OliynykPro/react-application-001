import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (      
    <nav className="nav">
    <div><NavLink to="/profile" activeClassName={styles.activeLink}>Profile</NavLink></div>
    <div><NavLink to="/dialogs" activeClassName={styles.activeLink}>Messages</NavLink></div>
    <div><NavLink to="/users" activeClassName={styles.activeLink}>Users</NavLink></div>
    <div><NavLink to="/news" activeClassName={styles.activeLink}>News</NavLink></div>
    <div><NavLink to="/music" activeClassName={styles.activeLink}>Music</NavLink></div>
    <div><NavLink to="/settings" activeClassName={styles.activeLink}>Settings</NavLink></div>
  </nav>
    )
}

export default Navbar;