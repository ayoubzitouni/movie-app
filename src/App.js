import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import Hscreen from './components/Homescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'







function App() {
  return (
    <div className="App">
      <Nbar/>
      <Hscreen className="homescreen"/>
      <MovieList className="movielist" />
    </div>
  );
}

export default App;
