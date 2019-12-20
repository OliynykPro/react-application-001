import profileReducer from "./profile-page-reducer";
import dialogsReducer from "./dialogs-page-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Tarasss'},
                {id: 2, name: 'Till'},
                {id: 3, name: 'Hugh'},
                {id: 4, name: 'Elizabet'}
            ],

            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'My name is'},
                {id: 3, message: 'T'}
            ],

            messageValue: 'Put your message here'
        },

        profilePage: {
            postsData: [
                {id: 1, message: 'Hello', likes: '20'},
                {id: 2, message: 'My name is Taras', likes: '230'},
                {id: 3, message: 'React the best', likes: '10000'}
            ],
            newPostText: 'Hello! Put your text here!'
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;