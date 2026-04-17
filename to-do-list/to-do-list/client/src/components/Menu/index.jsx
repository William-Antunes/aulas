import './index.modules.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { clearLoggedUser, getAuthChangeEventName, getLoggedUser } from '../../utils/auth.js';

export function Menu() {
    const [loggedUser, setLoggedUser] = useState(() => getLoggedUser());

    useEffect(() => {
        function syncAuthState() {
            setLoggedUser(getLoggedUser());
        }

        window.addEventListener('storage', syncAuthState);
        window.addEventListener(getAuthChangeEventName(), syncAuthState);

        return () => {
            window.removeEventListener('storage', syncAuthState);
            window.removeEventListener(getAuthChangeEventName(), syncAuthState);
        };
    }, []);

    function handleLogout() {
        clearLoggedUser();
        setLoggedUser(null);
    }

    return (
        <nav className="menu">
            <ul className="menu-left">
            <li><Link to="/" className="menu-home">Home</Link></li>
            </ul>
            <ul className="menu-right">
            {!loggedUser ? (
                <li><Link to="/signup">Sign Up</Link></li>
            ) : (
                <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
            )}
            
            <li><Link to="/history">History</Link></li>
            </ul>
        </nav>
    )
}