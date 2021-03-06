import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import "./Login.css";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    loginAccount = async (inputObject) => {
        try{
            const response = await axios.post('http://localhost:5000/api/users/login', inputObject);
            localStorage.setItem('token', response.data);
            console.log(response.data)
            window.location = '/'
        } catch(err){
            console.log("Error logging in", err)
        } 
    }
    render(){
        return(
            <div className="Login">
                <LoginForm loginAccount={this.loginAccount} />
                <Link to='/register'>
                    Don't have an account? Register here!
                </Link>
            </div>
        )
    }
}

export default Login;