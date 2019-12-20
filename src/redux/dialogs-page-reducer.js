const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
        ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {

            let newMessage = {
                id: 4,
                message: action.newMessageBody,
            }

            let stateCopy = {...state};
            stateCopy.messagesData.push(newMessage);
            return stateCopy;
        }

        default:
            return state;
    }

}

export const sendMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;