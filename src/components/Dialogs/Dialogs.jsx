import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {sendMessageActionCreator, updateDialogTextActionCreator} from "../../redux/dialogs-page-reducer";
import {Redirect} from "react-router-dom";
import Message from "./DialogsForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);
    let messagesElements = props.dialogsPage.messagesData.map((message) => <MessageItem id={message.id} message={message.message}/>);

    let newMessageTextarea = React.createRef();

    let addNewMessage = (values) => {
        // alert(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth) {
        return (
            <Redirect to='/login'/>
        )
    }

    return (
        <div className={styles.dialogWrapper}>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}

                <div>
                    <Message addNewMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;