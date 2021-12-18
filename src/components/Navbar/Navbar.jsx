import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        props.forceRerender()
    }
    return(
        <div className='nav-bar'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='http://localhost:3000/'><h3>wineWine</h3></a>
                <SearchBar filterWines={props.filterWines} />
            <ul>

                {!props.user &&
                <React.Fragment>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                </React.Fragment>
                }
                {props.user &&
                <React.Fragment>
                        <Link to='/mypalate'>Wine Quiz</Link>
                        <Link onClick={() =>logout()} to='/login'>Logout</Link>
                </React.Fragment>
}
            </ul>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;