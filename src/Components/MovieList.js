import Moviecard from './MovieCard';

function Movielist({movies,setMovies,searchTitle,searchRate}) {
    return(
        <div className="Card" >
            {movies.filter(el => el.title.toUpperCase().includes(searchTitle.toUpperCase().trim()) && el.rate <= searchRate).map((el,i) =>
            <Moviecard key={el.id} el={el} i={i} movies={movies} setMovies={setMovies} />)
            }
        </div>

    )
} 
export default Movielist