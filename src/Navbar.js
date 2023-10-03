import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <div>
            NAV BAR
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}
