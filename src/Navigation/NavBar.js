import { NavLink } from 'react-router-dom';
import '../CSS/styles.css';

function NavBar() {

    return (
        <div className="Nav-Bar">
            <div className="Nav-Link-Wrapper">
                <NavLink exact to="/">Home</NavLink>
            </div>
            <div className="Nav-Link-Wrapper">
                <NavLink exact to="/users/register">Register</NavLink>
            </div>
            <div className="Nav-Link-Wrapper">
                <NavLink exact to="/admin">Admin</NavLink>
            </div>
        </div>
    )
}

export default NavBar;