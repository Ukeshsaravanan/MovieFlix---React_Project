import {useEffect, useState} from 'react'
import "./App.css"
import SearchIcon from "./search.svg"
import Moviecard from './moviecard'

const API_URL =  "http://www.omdbapi.com/?i=tt3896198&apikey=6116e2cc"

function App() {
   const [movies , setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
    const response = await fetch (`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }
  useEffect(() =>{
    searchMovies('Marvel')
  },[]
  )

  return (
    <div className="app">
        <h1>MovieFlix</h1>
        <div className="search">
            <input 
            type="text" 
            placeholder='Seach for Movies' 
            value = {searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value)
            }}  

            />
            <img 
            src={SearchIcon} 
            alt="searchfield"
            onClick={() => searchMovies(searchTerm)} />
        </div>

        {
           movies?.length >0
           ? (
              <div className="container">
                 {movies.map((movie) => (
                    <Moviecard movie={movie} />
                 ))}
              </div>
           ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
           )
        }
    </div>
  )
}

export default App