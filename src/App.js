import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import Hscreen from './components/Homescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Data from './components/data';
import { useState } from 'react';
function App() {
  const [film,setFilm]=useState(Data)
  const addFilm=(newfilm)=>{
    
    setFilm([...film,newfilm])
    console.log(film)
    console.log(Data)

  }
  return (
    <div className="App">
      <Nbar addFilm={addFilm}/>
      <Hscreen className="homescreen"/>
      <MovieList className="movielist" />
    </div>
  );
}

export default App;
