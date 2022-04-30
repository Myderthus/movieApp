import { useEffect, useState } from 'react'
import './App.css'
import HeroCommonHero from './components/hero_commonHero'
import HtHeader from './components/htHeader'
import LoginWrapper from './components/login_wrapper'
import MovieItem from './components/movieItem'
import PageSingleMovieList from './components/pageSingleMovieList'
import PageWrapper from './components/PageWrapper'
import Pagination from './components/pagination'
import Preloader from './components/preloader'
import SingupContent from './components/singup_content'



function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const totalMoviePages = 4;

  useEffect(() => {
    movieFinder();
  }, [])

  const movieFinder = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json'

    // https://cors-anywhere.herokuapp.com/

    let response = await fetch(url, {
      "method": 'GET',
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
        //"origin": 'https://lucasmoy.dev'
      }
    });
    let movieJson = await response.json();
    setMovies(movieJson);
  }

  const countMovie = () => {
    // movies = movies.slice(
    //   (currentPage -1) * totalMoviePages,
    //   currentPage * totalMoviePages
    // );
  }

  const getTotalPages = () => {
    let countMoviePages = movies.length;
    return Math.ceil(countMoviePages / totalMoviePages)
  }

  countMovie();


  return (
    <PageWrapper>

    <button onClick={movieFinder}>
      Pruebame
    </button>

      {movies.map(movie =>
        <MovieItem
          titulo={movie.titulo}
          calificacion={movie.calificacion}
          director={movie.director}
          actores={movie.actores}
          fecha={movie.fecha}
          duracion={movie.duracion}
          img={movie.img}
          descripcion={movie.descripcion}
        />)}

      <Pagination page={currentPage} total={getTotalPages()} onChange={(page) => {
      {/* <Pagination page={1} total={currentPage} onChange={(page) => { */}

        setCurrentPage(page);
      }}/>        
    </PageWrapper>
  )
}

export default App