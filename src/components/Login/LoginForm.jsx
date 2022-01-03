import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './Login.css'

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
            
            <div className="form-wrapper" style={{ width: '30rem' }}>
                <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                    <Form.Group controlId="Email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control className="card-text" name="email" onChange={this.handleChange} value={this.state.email} />
                    </Form.Group>
                    <Form.Group controlId="Password">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} />
                    </Form.Group>
                    <div>
                        <Button variant="danger" size="lg" type="submit" className="mt-4">Login</Button>
              </div>  
              </div>
                </form>
            </div>
            
        );
    }
}
export default LoginForm;