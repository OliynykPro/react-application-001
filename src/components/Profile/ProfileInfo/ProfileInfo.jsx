import React from 'react';
import Loader from "../../../common/Loader";
import {ProfileStatus} from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return (
            <Loader/>
        )
    }

    return (
        <div>
            <div>
                <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/02/64/86/22578632886a468.jpg" alt="" />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                <div>
                    <p>Обо мне</p>
                    <p>{props.profile.aboutMe}</p>
                </div>
                <div>
                    <p>Статус поиска работы</p>
                    <p>{props.profile.lookingForAJob ? 'В поиске:)' : 'Не в поиске'}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;