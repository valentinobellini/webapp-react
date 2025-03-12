import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <nav className="navbar">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Books</Link>
            </div>
        </nav>

    )
}