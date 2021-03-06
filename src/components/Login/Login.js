import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./Login.module.css";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"E-mail"} name={"email"} component={Input} validate={[required, maxLength30]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} type={'password'} validate={[required, maxLength30]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> Remember me
                </div>
                {props.error && <div className={styles.errorMessage}>{props.error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return (
            <Redirect to={'/profile'}/>
        )
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);