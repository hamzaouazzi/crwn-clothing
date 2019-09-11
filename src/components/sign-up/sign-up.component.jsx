import React from 'react';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }

    handleSubmit = async event =>{
        event.preventdefault();

        const {displayName,email,password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match");
            return ;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({// clearing form 
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });

        }catch(error){
            console.error(error);

        }
    };

    handlechange = event =>{
        const {name,value} = event.target;

        this.setState({[name]:value});
    };

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInput
                       type='text'
                       name='displayName'
                       value={displayName}
                       onChange={this.handlechange}
                       label='Display Name'
                       required
                    />
                    <FromInput
                       type='email'
                       name='email'
                       value={email}
                       onChange={this.handlechange}
                       label='Email'
                       required
                    />
                    <FromInput
                       type='password'
                       name='password'
                       value={password}
                       onChange={this.handlechange}
                       label='Password'
                       required
                    />
                    <FromInput
                       type='password'
                       name='confirmPassword'
                       value={confirmPassword}
                       onChange={this.handlechange}
                       label='confirm Password'
                       required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>

            </div>

        );
    }

}

export default SignUp;
