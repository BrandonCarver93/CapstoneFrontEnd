import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    loginnAccount = async (inputObject) => {
        try{
            const response = await axios.post('http://localhost:3000/api/user/login', inputObject);
            localStorage.setItem('token', response.data);
            console.log(response.data)
            window.location = '/'
        } catch(err){
            console.log("Error logging in", err)
        } 
    }
    render(){
        return(
            <div>
                <LoginForm loginAccount={this.loginAccount} />
            </div>
        )
    }
}

export default Login;