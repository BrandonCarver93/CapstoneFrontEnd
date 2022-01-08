
import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import Register from './Register/Register';
import Home from './Home/Home';
import MyPalate from './MyPalate/MyPalate';
import './App.css';
import axios from "axios";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            wines: [],
            currentUser: null,
        }
    }
    componentDidMount(){
        this.fetchWines()
        this.checkUser()
    }

     fetchWines = async () => {
        try {
            let response = await axios.get(`http://localhost:5000/api/wines` );
            console.log(response);
            this.setState({
                wines: response.data,
            })
        } catch (err) {
            console.log(err);
        }
    };

    filterWines = (term) => {
        let filteredWines = this.state.wines.filter((wine) => {
            return(
                wine.varietal.toLowerCase().includes(term) ||
                wine.vineyard.toLowerCase().includes(term)
            )
        });
        this.setState({
            wines: filteredWines,
        });
    };

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
        return(
            <div className="App">
                <Navbar forceRerender={this.checkUser} user = {this.state.currentUser} 
                filterWines ={this.filterWines}/>
                  <main>
                    <div className="header-img"></div>
                </main>
                <Switch>
                    <Route path='/' exact render={() => {
                        if (!this.state.currentUser){
                            return <Redirect to='/home' /> 
                        } else {
                            return <Redirect to='/register' />
                        }
                    }} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/' exact component={Login} />
                    <Route path='/home' component={() => <Home user={this.state.currentUser} wines={this.state.wines}/>} />
                    <Route path='/mypalate' component={MyPalate} /> 
                  {/*   <Route path='/NotFound' component={NotFound} />
                    <Redirect to='/NotFound' />   */}
                </Switch>
            </div>
        );
    }
}


export default App;