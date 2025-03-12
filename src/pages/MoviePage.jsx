import { Link } from "react-router"

import ReviewCard from "../components/ReviewCard"

export default function MoviePage() {
    return (
        <>
            <div id="movie" className="border-bottom border-1  mb-3">
                <div className="d-flex mb-3">
                    <img className="book-img"
                        src="/matrix.jpg"
                        alt="descrizione img" />
                    <div>
                        <h1>Movie Title</h1>
                        <h3 className="text-muted">
                            <i>
                                By Nome autore
                            </i>
                        </h3>
                        <p>
                            Abscract lorem ipsm dolor sit amet...
                        </p>
                    </div>
                </div>

                <section id="reviews">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4>Our community reviews</h4>
                    </div>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />

                    <div className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                        <Link className="btn btn-secondary" to="/">Back to home</Link>
                    </div>
                </section>

            </div>
        </>

    )
}