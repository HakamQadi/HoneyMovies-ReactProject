import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Axios from 'axios';
import '../main-card/Card.css'
import '../details-card/Dcard.css'
import { useParams } from 'react-router-dom';

const DCard = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=acaf5616e65a3c1a99a3105366f786c6`);
                const movieData = {
                    title: response.data.original_title,
                    rate: response.data.vote_average.toFixed(2),
                    description: response.data.overview,
                    trailer: response.data.homepage,
                    bgPoster: `https://image.tmdb.org/t/p/original${response.data.backdrop_path}`,
                    poster: `https://image.tmdb.org/t/p/w300${response.data.poster_path}`
                };
                setMovies([movieData]);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    },);
    return (
        <div className='poster-image'>
            {movies.map((movie) => (
                <div
                    className="poster-image"
                    style={{
                        height: 'calc(100vh - 100px)',
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.bgPoster})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        display: 'flex',
                        placeItems: 'center',

                    }}
                    key={movie.title}
                >
                    <div className='container' >
                        <div className="jumbotron" style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div className='left_container p-4'>
                                <h1 className="display-4 text-light fw-bolder">{movie.title}</h1>
                                <div className="card-text"><div style={{
                                    padding: "1px 10px 1px 10px",
                                    marginBottom: '1rem',
                                    background: " #F8B319",
                                    boxShadow: ' 0px 4px 9px rgba(0, 0, 0, 0.25)',
                                    borderRadius: '0px 17px',
                                    fontWeight: 'bolder',
                                    width: "fit-content"

                                }}>{movie.rate}</div></div>
                                <p className="lead text-light " >{movie.description}</p>
                                <div id='btn_container' >
                                    <button id='SecondBtn'>Trailer</button>
                                    <button id='PrimeBtn'>Watch Now</button>
                                </div>
                            </div>
                            <div>
                                <img id='details_img' src={movie.poster} alt="logo" style={{
                                    height: '20rem',
                                    borderRadius: '17px'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default DCard
