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
            {props.user &&
                <React.Fragment>
                  <h5>Welcome back, {props.user.name}</h5>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/home"><h3>Just<strong>Wines</strong></h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className ="search">
        <SearchBar filterWines={props.filterWines} />
                </div>
                <div className="navlinks">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link className="nav-link" to='/home'> Home </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to='/mypalate'> Wine Quiz </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" onClick={() =>logout()} to='/login'> Logout </Link>
        </li>
      </ul>
     
    </div>
    </div>
  </div>
</nav>
                </React.Fragment>
            }
        </div>
    )
}
export default Navbar;

