import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginAccount(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="card-body">
                    <label>Email</label>
                    <input name="email" onChange={this.handleChange} value={this.state.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={this.handleChange} value={this.state.password} />
                </div>
                <div>
                    <button type="submit" className="mt-3">Login</button>
                </div>
            </form>
        );
    }
}
export default LoginForm;