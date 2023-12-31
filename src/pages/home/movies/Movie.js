import React, { useEffect, useState } from 'react'
import './Movies.css'
import Axios from 'axios';
import SecondBtn from '../../../components/button/SecondBtn';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=acaf5616e65a3c1a99a3105366f786c6");
        const movieData = response.data.results.map((movie) => ({
          id: movie.id,
          title: movie.original_title,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          // bgPoster: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
          rate: (movie.vote_average).toFixed(2),
        }));
        setMovies(movieData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  let s = search;
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(s)
  );
  return (

    <div className='container d-flex flex-column'>
      <div className="d-flex justify-content-center py-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} id='input' className="form-control me-2" type="search" placeholder="Search ..." aria-label="Search" />
      </div>
      <h2 id='top_m' style={{
        alignSelf: 'start', marginBottom: '2rem',
        background: " #F8B319",
        boxShadow: ' 0px 4px 9px rgba(0, 0, 0, 0.25)',
        borderRadius: '0px 17px',
        fontWeight: 'bolder',
        padding: '2px 15px 2px 15px'
      }}>Top Movies</h2>
      <div className="row">
        {filteredMovies.map((movie) => (
          <div className="col" key={movie.title}>
            <div className="card bg-image movie_card" style={{
              height: '20rem',
              backgroundImage: `linear-gradient(180deg, rgba(22, 24, 30, 0) 14.58%, rgba(22, 24, 30, 0.7) 78.65%), linear-gradient(0deg, rgba(22, 24, 30, 0.4), rgba(22, 24, 30, 0.4)), url(${movie.poster})`,

            }}>
              <div className="card-body d-flex flex-column justify-content-between text-light">
                <h5 className="card-title text-start">{movie.title}</h5>
                <div>
                  <div className="card-text rate"><div style={{
                    marginBottom: '1rem',
                    background: " #F8B319",
                    boxShadow: ' 0px 4px 9px rgba(0, 0, 0, 0.25)',
                    borderRadius: '0px 17px',
                    fontWeight: 'bolder',

                  }}>{movie.rate}</div></div>
                  <div className='d-flex justify-content-around '>
                    <SecondBtn />
                    <Link to={`Dcard/${movie.id}`} id='PrimeBtn'>More info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default Movies
