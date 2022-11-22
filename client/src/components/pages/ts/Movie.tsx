import { useParams } from "react-router-dom"
import Header from "../../layouts/ts/Header";

import "../css/Movie.Module.css"

function Movie() {

    const params = useParams()
    
    return (
        <div className="container">
            <Header />
            <div className="container-movie">
                <div className="movie-title">
                    <h2>{params.title}</h2>
                    <h2>Score: <span>{params.vote_average}</span></h2>
                </div>
                <div className="movie-img">
                    <img src={`https://image.tmdb.org/t/p/original/${params.backdrop_path}`} />
                </div>
                <div className="movie-overview">
                    <h2>Sinopse:</h2>
                    <p>{params.overview}</p>
                </div>
            </div>
        </div>
    )
}
export default Movie