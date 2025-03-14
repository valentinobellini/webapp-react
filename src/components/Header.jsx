import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <nav className="navbar-container ">
            <div className="navbar container-fluid d-flex justify-content-between">
                <Link className="navbar-brand" to="/">Bool Movies</Link>
                <Link className="navbar-brand" to="/create">Add Movie</Link>
            </div>
        </nav>
    )
}