//importa comonente movie card
import MovieCard from "../components/MovieCard"

export default function HomePage() {

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />


            </div>

        </>
    )
}