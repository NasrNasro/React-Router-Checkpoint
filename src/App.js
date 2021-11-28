import './App.css';
import  React, {useState} from 'react';
import Navb from './Components/Navbar';
import Home from './Components/Home';
import Trailer from './Components/Trailer';
import { Route } from 'react-router';

function App() {
  const[movies, setMovies] = useState([{id:0, title:"Avengers: Infinity War", desc:"Action, Science fiction", img:"https://fr.web.img5.acsta.net/pictures/18/03/16/14/42/0611719.jpg", rate:4, trailer:'https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1'},
  {id:1, title:"Fast and Furious: Hobbs & Shaw", desc:"Action, Adventure, Thriller", img:"https://fr.web.img4.acsta.net/pictures/19/06/13/16/39/3685647.jpg", rate:4.5, trailer:'https://www.youtube.com/embed/HZ7PAyCDwEg?autoplay=1'},
  {id:2, title:"Pirates of the Caribbean: Dead Men Tell No Tales", desc:"Action, Adventure, Fantasy", img:"https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_.jpg", rate:5, trailer:'https://www.youtube.com/embed/KpFMVcZ4o7U?autoplay=1'}
  ]);

  const [searchTitle,setSearchTitle]=useState("")
  const [searchRate,setSearchRate]=useState(5)
  
  return (
    <div className="App">
      <Navb setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} />
      <Route exact path='/' render={() => <Home movies={movies} setMovies={setMovies} searchTitle={searchTitle} searchRate={searchRate} />} />
      <Route path='/Trailer/:title' render={(props) => <Trailer movies={movies} {...props} /> } />
    </div>
  );
}

export default App;
