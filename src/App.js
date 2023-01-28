import './App.css';
import movieListData from './App-Components/Movie-List';
import MovieData from './App-Components/Movie-Data';
import NavBar from './App-Components/Nav';


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

      <NavBar />
      <div className="container">
        <section className="card-container">{movieList}</section>
      </div>
    </div>
  );
}

export default App;
