import React, { Component } from 'react';

class RegisterForm extends Component{

    constructor(props){
        super(props);
        this.state={
            name: "",
            email: "",
            password: "",
            isAdmin: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.registerNewAccount(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="card-body">
                    <label>Name:</label>
                    <input name="name" onChange={this.handleChange} value={this.state.name}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input name="email" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input name="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <div>
                    <button type="submit" className="mt-3">Create Account</button>
                </div>
            </form>
        );
    }
}

export default RegisterForm;