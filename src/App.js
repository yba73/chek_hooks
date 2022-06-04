import { useState } from 'react';
import './components/style.css'
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [rate, setRate] = useState(0)
  const [searching, setSearching] = useState('')
  
  const getRate =(rating)=>{
    setRate(rating)
  }

  const getSearch =(searching)=>{
    setSearching(searching)
  }

  return (
     
<>      
    <div className='header'>
   <Filter getRate={getRate} getSearch={getSearch}/>
   </div>
<div className='container'>
  <MovieList searching={searching} rate={rate}/>
</div>


</>
 


  );
}

export default App;
