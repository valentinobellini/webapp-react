import { Link } from "react-router"

export default function MovieCard() {

    return (
        <div className="card">
            <img className="card-img"
                src="http://localhost:3000/img/books/great-gatsby.jpg"
                alt="descrizione img" />
            <div className="card-body">
                <h5 className="card-title">
                    Titolo del libro
                </h5>
                <address><i>
                    By nome autore
                </i></address>
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                </p>
                <Link to="movies/2" className="btn">See more</Link>
            </div>
        </div>

    )
}