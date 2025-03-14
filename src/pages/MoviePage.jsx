// importa axios
import axios from "axios"

// importa useEffect e useState
import { useEffect, useState } from "react"

// importa link from react-router
import { Link, useParams, useNavigate } from "react-router-dom"

// importa componenti
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"

export default function MoviePage() {


    // recupera id movie dalla route
    const { id } = useParams()
    // setta stato componente
    const [movie, setMovie] = useState({ reviews: [] })


    // redirect useNavigate
    const redirect = useNavigate();



    // funzione fetch movie
    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(
                res => {
                    setMovie(res.data)

                }
            )
            .catch(err => { console.error(err); if (err.response.status === 404) redirect('/404') })
    }


    // useEffect per fetch movie solo al primo render
    useEffect(() => {
        fetchMovie();
    }
        , []);


    // funzione render review
    const renderReviews = () => {
        return movie.reviews.map(
            review => {
                return (
                    <ReviewCard key={review.id} reviewProp={review} />
                )
            }
        )
    }






    return (
        <>
            <div id="movie" className="mb-5">
                <div className="d-flex mb-3">
                    <img className="movie-img"
                        src={movie.image}
                        alt={movie.title} />
                    <div>
                        <h1>{movie.title}</h1>
                        <h3 className="text-muted">
                            <i>
                                By {movie.author}
                            </i>
                        </h3>
                        <p>
                            {movie.abstract}
                        </p>
                    </div>
                </div>

                <section id="reviews">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4>Our community reviews</h4>
                    </div>
                    {renderReviews()}
                </section>

                <section>
                    <ReviewForm movie_id={movie.id} fetchMovie={fetchMovie} />
                </section>
            </div>
        </>

    )
}