//importa comonente movie card
import MovieCard from "../components/MovieCard"

export default function HomePage() {

    return (
        <>
            <h1 >Bool Movies</h1>
            <h2><i>The nerdest movies community</i></h2>

            <div className="row row-cols-3 mt-4 g-4">
                <div className="col"><MovieCard /></div>
                <div className="col"><MovieCard /></div>
                <div className="col"><MovieCard /></div>
                <div className="col"><MovieCard /></div>
                <div className="col"><MovieCard /></div>
                <div className="col"><MovieCard /></div>
            </div>

        </>
    )
}