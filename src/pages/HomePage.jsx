// importa axios
import axios from "axios"

// importa useEffect e useState
import { useEffect, useState } from "react"


//importa comonente movie card
import MovieCard from "../components/MovieCard"

export default function HomePage() {


    // setta stato componente
    const [movies, setMovies] = useState([])

    // funzione fetch movies
    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(
                res => {
                    setMovies(res.data)
                }
            )
            .catch(err => console.error(err))
    }

    // useEffect per fetch movies solo al primo render
    useEffect(() => {
        fetchMovies();
    }, []);


    // funzione rendering card movies
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div className="col" key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        })
    }


    return (
        <>
            <h1 >Bool Movies</h1>
            <h2><i>The nerdest movies community</i></h2>

            <div className="row row-cols-3 mt-4 g-4">
                {renderMovies()}
            </div>

        </>
    )
}