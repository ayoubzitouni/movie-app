import MovieList from'./components/Movielist'
import Nbar from'./components/Nvbar'
import Hscreen from './components/Homescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import Data from './components/data';



function App() {
  const [nfilm,setNfilm]=useState(Data)
  const [srate,setSrate]=useState(0)
  const addFilm=(newfilm)=>{
    setNfilm([...nfilm,newfilm])
    
    console.log(nfilm)
    console.log(Data)
  }
  const searchR=(e)=>{
    
    setSrate(e)
    console.log(srate)
  }

  return (
    <div className="App">
      <Nbar addfilm={addFilm} searchRate={searchR}/>
      <Hscreen className="homescreen" movies={nfilm}/>
      <MovieList className="movielist"  movies={nfilm} rate={srate}/>
    </div>
  );
}

export default App;
