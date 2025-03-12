// importa link from react-router
import { Link } from "react-router"



export default function MovieCard({ movieProp }) {

    const { id, title, author, abstract, image } = movieProp;


    return (
        <div className="card mb-4">
            <img className="card-img-top"
                src={image}
                alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <address><i>
                    By {author}
                </i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`movies/${id}`} className="btn">See more</Link>
            </div>
        </div>

    )
}