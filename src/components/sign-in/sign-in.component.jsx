import React from 'react';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';


import FormInput from '../form-input/form-input.component';

import {signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit =async(event) =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email:'',
                password: ''
            })
        } catch(err) {
            console.error(`error in sign in with email and password ${err}`);
        }

    }

    handleChange = (event) => { // here the property value is dynamically setted
        const { name,value } = event.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className= 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required/>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange}  label='password' required/>
                    <div className='buttons'>
                    <CustomButton type="submit" value='Submit Form'> Sign In </CustomButton>
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;