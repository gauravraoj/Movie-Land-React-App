
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

//import SearchIcon from './search.svg'

const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=b8a95c34'
const App=()=>{

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const serachMovies=async (title)=>{
    const response= await fetch(`${API_URL}&s=${title}`)
    const data= await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
     serachMovies("Batman");
  }, []);
 
  return (
    <div className="app">
    <h1>MovieLand</h1>

    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => serachMovies(searchTerm)}
      />
    </div>

    {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )}
  </div>

  )
}

export default App;
