import { useState } from 'react'
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
import moviesjson from './movies.json'

function App() {
  const [count, setCount] = useState(0)

  let movies = moviesjson;

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <PageWrapper>
      {movies.map(movie => 
        <MovieItem
        title={movie.title}
        yearMovie={movie.yearMovie}
        calification={movie.calification}
        describe={movie.describe}
        runTime={movie.runTime}
        MMPA={movie.MMPA}
        release={movie.release}
        director={movie.director}
        actorOne={movie.actorOne}
        actorTwo={movie.actorTwo}
        actorThree={movie.actorThree}
        movieImage={movie.movieImage}
      />)}

      <Pagination page={1} total={currentPage} onChange={(page) => {
        setCurrentPage(page);
      }}/>        
    </PageWrapper>
  )
}

export default App
