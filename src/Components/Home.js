import React from 'react'
import Add from './Add'
import Movielist from './MovieList'
import Footer from './Footer';

function Home({movies,setMovies,searchTitle,searchRate}) {
    return (
        <div>
            <Add movies = {movies} setMovies = {setMovies} />
            <Movielist movies = {movies} setMovies = {setMovies} searchTitle={searchTitle} searchRate={searchRate} />
            <Footer />
        </div>
    )
}

export default Home
