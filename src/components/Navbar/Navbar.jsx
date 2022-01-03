import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';

const Navbar = (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        props.forceRerender()
    }
    return(
        <div className='nav-bar'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='http://localhost:3000/'><h3>Just<strong>Wines</strong></h3></a>
                <SearchBar filterWines={props.filterWines} />
            {!props.user &&
                <React.Fragment>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                </React.Fragment>
            }
            {props.user &&
                <React.Fragment>
                    <div className="Nav-barA">
                        <Link to='/home'> Home </Link>
                        <Link to='/mypalate'> Wine Quiz </Link>
                        <Link onClick={() =>logout()} to='/login'> Logout </Link>
                        </div>
                </React.Fragment>
            }
            
            </div>
            </nav>
        </div>
    )
}
export default Navbar;