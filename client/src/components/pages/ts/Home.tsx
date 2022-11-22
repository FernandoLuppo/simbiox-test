import {TiChevronLeft, TiChevronRight} from "react-icons/ti"
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Movie } from "../../../API/types";

import Header from "../../layouts/ts/Header"

import "../css/Home.Module.css"

function Home() {

    const [ trending, setTrending] = useState<Movie[]>()
    const [ topRated, setTopRated] = useState<Movie[]>()
    const [ action, setAction] = useState<Movie[]>()
    const [ comedy, setComedy] = useState<Movie[]>()
    const [ horror, setHorror] = useState<Movie[]>()
    const [ romance, setRomance] = useState<Movie[]>()

    useEffect( () => {

        Axios.get("http://localhost:8080/trending").then(response => {setTrending(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))

        Axios.get("http://localhost:8080/topRated").then(response => {setTopRated(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))
            
        Axios.get("http://localhost:8080/action").then(response => {setAction(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))
            
        Axios.get("http://localhost:8080/comedy").then(response => {setComedy(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))

        Axios.get("http://localhost:8080/horror").then(response => {setHorror(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))

        Axios.get("http://localhost:8080/romance").then(response => {setRomance(response.data.results)})
        .catch(error => console.log("There was an error to try get the banc informations, the error is: " + error))
        
    }, [])

    const [trendingScrollX, setTrendingScrollX] = useState(-400)
    const [topRatedScrollX, setTopRatedScrollX] = useState(-400)
    const [actionScrollX, setActionScrollX] = useState(-400)
    const [comedyScrollX, setComedyScrollX] = useState(-400)
    const [horrorScrollX, setHorrorScrollX] = useState(-400)
    const [romanceScrollX, setRomanceScrollX] = useState(-400)

    const handleTrendingLeftArrow = () => {
        let x = trendingScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setTrendingScrollX(x)
    }
    const handleTrendingRightArrow = () => {
        let x = trendingScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setTrendingScrollX(x)
    }

    const handleTopRatedLeftArrow = () => {
        let x = topRatedScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setTopRatedScrollX(x)
    }
    const handleTopRatedRightArrow = () => {
        let x = topRatedScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setTopRatedScrollX(x)
    }

    const handleActionLeftArrow = () => {
        let x = actionScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setActionScrollX(x)
    }
    const handleActionRightArrow = () => {
        let x = actionScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setActionScrollX(x)
    }

    const handleComedyLeftArrow = () => {
        let x = comedyScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setComedyScrollX(x)
    }
    const handleComedyRightArrow = () => {
        let x = comedyScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setComedyScrollX(x)
    }

    const handleHorrorLeftArrow = () => {
        let x = horrorScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setHorrorScrollX(x)
    }
    const handleHorrorRightArrow = () => {
        let x = horrorScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setHorrorScrollX(x)
    }

    const handleRomanceLeftArrow = () => {
        let x = romanceScrollX + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setRomanceScrollX(x)
    }
    const handleRomanceRightArrow = () => {
        let x = romanceScrollX - Math.round(window.innerWidth / 2)
        let listW = 4025
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setRomanceScrollX(x)
    }

    return (
        <div>
           <Header />
           <div className="container-movies">
                <div className="movieRow">
                    <h2>Trending</h2>

                    <div className="movieRow-left" onClick={handleTrendingLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleTrendingRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: trendingScrollX, width: 20 * 200}}>
                            {trending?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h2>TopRated</h2>

                    <div className="movieRow-left" onClick={handleTopRatedLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleTopRatedRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: topRatedScrollX, width: 20 * 200}}>
                            {topRated?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h2>Action</h2>

                    <div className="movieRow-left" onClick={handleActionLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleActionRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: actionScrollX, width: 20 * 200}}>
                            {action?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h2>Comedy</h2>

                    <div className="movieRow-left" onClick={handleComedyLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleComedyRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: comedyScrollX, width: 20 * 200}}>
                            {comedy?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h2>Horror</h2>

                    <div className="movieRow-left" onClick={handleHorrorLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleHorrorRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: horrorScrollX, width: 20 * 200}}>
                            {horror?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <h2>Romance</h2>

                    <div className="movieRow-left" onClick={handleRomanceLeftArrow}>
                        <TiChevronLeft size={40} className="arrow arrow-left"/>
                    </div>
                    <div className="movieRow-right" onClick={handleRomanceRightArrow}>
                        <TiChevronRight size={40} className="arrow arrow-right"/>
                    </div>

                    <div className="movieRow-listArea">
                        <div className="movieRow-list" style={{marginLeft: romanceScrollX, width: 20 * 200}}>
                            {romance?.map(movie => {
                                
                                return(
                                    <div className="movieRow-item">
                                        <Link to={`/movie/${movie.id}/${movie.title}/${movie.vote_average}${movie.backdrop_path}/${movie.overview}`} className="nav-item"><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Home