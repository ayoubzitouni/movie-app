import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import Hscreen from './components/Homescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import Data from './components/data';


function App() {
  const [nfilm,setNfilm]=useState(Data)
  const addFilm=(newfilm)=>{
    setNfilm([...nfilm,newfilm])
    
    console.log(nfilm)
    console.log(Data)
  }
  return (
    <div className="App">
      <Nbar addfilm={addFilm}/>
      <Hscreen className="homescreen" movies={nfilm}/>
      <MovieList className="movielist"  movies={nfilm}/>
    </div>
  );
}

export default App;
