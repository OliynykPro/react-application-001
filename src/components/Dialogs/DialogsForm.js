import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Put your message'} component={Textarea} name={'newMessageBody'}
                    validate={[required, maxLength50]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm);

const Message = (props) => {

    return (
        <div>
            <h2>New message</h2>
            <MessageReduxForm onSubmit={props.addNewMessage}/>
        </div>
    )
}

export default Message;