import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatusAC, getUserProfileAC, setUserProfileAC, updateStatusAC} from "../../redux/profile-page-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} props={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

// let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {
//     getUserProfile: getUserProfileAC
// })(WithURLDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileAC, getStatus: getStatusAC, updateStatus: updateStatusAC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);