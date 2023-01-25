import './App.css';
import movieListData from './App-Components/Movie-List';
import MovieData from './App-Components/Movie-Data';
function App() {
  const movieList = movieListData.map(movie => {
    return (
      <MovieData
        key={movie.id}
        movie={movie}
      />
    )
  })
  return (
    <div className="App">
      
      <section className='card-container'>
        {movieList}
      </section>
    </div>
  );
}

export default App;
