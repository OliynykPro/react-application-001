import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setPageAC,
    unfollowAC,
    toggleFollowingInProgressAC,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
} from "../../redux/users-page-reducer";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../../common/Loader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "../Dialogs/Dialogs";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/users-selector";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
        {this.props.isFetching ? <Loader/> : null}
        <Users
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            onPageChanged = {this.onPageChanged}
            currentPage = {this.props.currentPage}
            users = {this.props.users}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
            followingInProgress = {this.props.followingInProgress}
        />
        </>
    }
}

const AuthRedirectComponent = withAuthRedirect(UsersAPIComponent);

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setPage: setPageAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsers: getUsersThunkCreator,
})(AuthRedirectComponent);