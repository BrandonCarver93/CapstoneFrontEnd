import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
            <div className="form-wrapper" style={{ width: '30rem' }}>
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name="name" onChange={this.handleChange} value={this.state.name} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control name="email" onChange={this.handleChange} value={this.state.email} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name="password" onChange={this.handleChange} value={this.state.password} />
                </Form.Group>
                <div>
                    <Button variant="danger" size="lg" type="submit" className="mt-4">Create Account</Button>
          </div>  
            </form>
        </div>
        );
    }
}

export default RegisterForm;