
import { useEffect, useState } from 'react'
import './App.css'
import search from './assets/search.png'
import MovieCard from './movieCard'

function App() {
  const API_URL = 'https://www.omdbapi.com/?apikey=3f609f6a'

  const [movies, setMovies] = useState([]) // movies is the state variable and setMovies is the function that updates the state variable

  const [searchTerm, setSearchTerm] = useState('') // searchTerm is the state variable and setSearchTerm is the function that updates the state variable

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // fetch data from API
    const data = await response.json(); // convert data to JSON
    setMovies(data.Search); // update state variable
  }

  useEffect(() => {
    searchMovies('Harry Potter');
  }, [])
  return (
    <>
      <div className="app">
        <h1>Movie Quest<br /><span>by Eclar Khalid</span></h1>
        <div>
        <h3>Search by title, genre, or actors to discover information like year, cast, and Movie title. It's your one-stop movie resource.</h3>
        </div>

        <div className="search">
          <input type="text" placeholder='Search for your favourite movie'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) }
          />
          <img src={search} alt="search icon" onClick={() => searchMovies(searchTerm)} />
        </div>

        {
        movies?.length > 0 ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }

            </div>
          ) : (
            <div className="empty">
              <h2>No movies to show</h2>
            </div>
          )
        }


      </div>
    </>
  )
}

export default App
