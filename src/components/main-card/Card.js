import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css'
import Axios from 'axios';
import PrimeBtn from '../button/PrimeBtn';
import SecondBtn from '../button/SecondBtn';

const Card = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=acaf5616e65a3c1a99a3105366f786c6");
                const movieData = response.data.results.map((movie) => ({
                    title: movie.original_title,
                    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    bgPoster: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                    rate: (movie.vote_average).toFixed(2),
                }));
                setMovies(movieData);
                // console.log(movieData.map((movie) => movie.title));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col" key={movie.title}>
                        <div className="card bg-image movie_card" style={{
                            height: '20rem',
                            backgroundImage: `linear-gradient(179.88deg, rgba(22, 24, 30, 0) 0.11%, rgba(22, 24, 30, 0.7) 61.55%), linear-gradient(0deg, rgba(22, 24, 30, 0.4), rgba(22, 24, 30, 0.4)), url(${movie.poster})`,

                        }}>
                            <div className="card-body d-flex flex-column justify-content-between text-light">
                                <h5 className="card-title text-start">{movie.title}</h5>
                                <div>
                                    <div className="card-text rate"><div style={{
                                        marginBottom: '1rem',
                                        background: " #F8B319",
                                        boxShadow: ' 0px 4px 9px rgba(0, 0, 0, 0.25)',
                                        borderRadius: '0px 17px',

                                    }}>{movie.rate}</div></div>
                                    <div className='d-flex justify-content-around '>
                                        <SecondBtn />
                                        <PrimeBtn />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Card;
