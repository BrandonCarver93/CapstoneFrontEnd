
import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Register from './Register/Register';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            wannaReRender: true
        }
    }
    componentDidMount(){
       this.checkUser()
    }
    checkUser=()=>{
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                currentUser: user
            });      
        }
        catch(err){
            console.log("Error decoding token", err);
            this.setState({
                currentUser: null
            });
        }
    }
    render() {
        console.log(this.state.currentUser)
        return(
            <div>
                <Navbar forceRerender={this.checkUser} user = {this.state.currentUser} />
                <Switch>
                    <Route path='/' exact render={props => {
                        if (!this.state.currentUser){
                            return <Redirect to='/register' /> 
                        } else {
                            return <Redirect to='/home' />
                        }
                    }} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/' exact component={Login} />
                   {/* <Route path='/home' component={() => <Home user={this.state.currentUser}/>} /> */}
                   {/*  <Route path='/friends' component={Friends} />
                    <Route path='/didNotFind' component={DidNotFind} />
                    <Redirect to='/didNotFind' />  */}
                </Switch>
            </div>
        );
    }
}


export default App;