import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const logout = () => {
        localStorage.removeItem('token')
        props.forceRerender()
    }
    return(
        <div>
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
                    <h4>Welcome, {props.user.name}</h4>
                    <li>
                        <Link onClick={() =>logout()} to='/login'>Logout</Link>
                        <Link to='/winesurvey'>My Palate</Link>
            
                    </li>
                </React.Fragment>
                }
            </ul>
        </div>
    )
}
export default Navbar;