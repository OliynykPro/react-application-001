import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello', likes: '20'},
        {id: 2, message: 'My name is Taras', likes: '230'},
        {id: 3, message: 'React the best', likes: '10000'}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newItem = {
                id: 4,
                message: action.newPostText,
                likes: 0
            };

            // let stateCopy = {...state};
            // stateCopy.postsData.push(newItem);
            // stateCopy.newPostText = '';
            // return stateCopy;
            return {
                ...state,
                postsData: [...state.postsData, newItem],
                newPostText: ''
            }

        // case UPDATE_TEXTAREA:
        //     // let stateCopy = {...state};
        //     // stateCopy.newPostText = action.message;
        //     // return stateCopy;
        //
        //     return {
        //         ...state,
        //         newPostText: action.message
        //     }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}


///THUNK
export const getUserProfileAC = (userId) => (dispatch) => {
    usersAPI.getUsersProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data));
    });
}

export const getStatusAC = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data));
    });
}

export const updateStatusAC = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusAC(status));
        }
    });
}
///THUNK

///ACTION CREATORS
// export const updateTextareaActionCreator = (text) => {
//     return {
//         type: UPDATE_TEXTAREA,
//         message: text
//     }
// }

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
///ACTION CREATORS

export default profileReducer;