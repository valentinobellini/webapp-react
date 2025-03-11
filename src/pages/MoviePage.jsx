import ReviewCard from "../components/ReviewCard"

export default function MoviePage() {
    return (
        <>
            <div id="movie" className="">
                <div className="">
                    <img className="book-img"
                        src="http://localhost:3000/img/books/great-gatsby.jpg"
                        alt="descrizione img" />
                    <div>
                        <h1>Movie Title</h1>
                        <h3 className="">
                            <i>
                                By Nome autore
                            </i>
                        </h3>
                        <p>
                            Abscract lorem ipsm dolor sit amet...
                        </p>
                    </div>
                </div>

                <section>
                    <ReviewCard />
                </section>

            </div>
        </>

    )
}