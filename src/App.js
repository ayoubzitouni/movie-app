import Moviecard from './components/Moviecard'
import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'







function App() {
  return (
    <div className="App">
      <Nbar/>
      <MovieList className="movielist" />
    </div>
  );
}

export default App;
