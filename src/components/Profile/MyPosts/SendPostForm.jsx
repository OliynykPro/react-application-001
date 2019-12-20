import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const SendPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={'newPostText'} component={Textarea} placeholder={'Enter your post'}
                           validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

const SendPostFormRedux = reduxForm({form: 'sendPostForm'})(SendPostForm);

export default SendPostFormRedux;