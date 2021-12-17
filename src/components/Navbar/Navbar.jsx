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
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div class='container-fluid'>
                <a class='navbar-brand' href='http://localhost:3000/'><h3>wineWine</h3></a>
            <ul>

                {!props.user &&
                <React.Fragment>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </React.Fragment>
                }
                {props.user &&
                <React.Fragment>
                    <SearchBar filterWines={props.filterWines} />
                    <li>
                        <Link to='/mypalate'>My Palate</Link>
                        <Link onClick={() =>logout()} to='/login'>Logout</Link>
                    </li>
                </React.Fragment>
                }
            </ul>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;