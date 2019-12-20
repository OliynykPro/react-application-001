import React from 'react';
import styles from "./Users.module.css";
import UserImage from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import {followThunkCreator, unfollowThunkCreator} from "../../redux/users-page-reducer";

const Users = (props) => {
    debugger;
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map(p => {
                return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && styles.active}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserImage}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }
                            }>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }
                            }>Follow</button>}
                </div>
            </span>
                <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
                <span>
                {/*<div>*/}
                    {/*    {u.location.country}*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    {u.location.city}*/}
                    {/*</div>*/}
            </span>
            </div>)
        }
    </div>
}

export default Users;