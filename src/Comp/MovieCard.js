
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import StarRating from './StarRating'
import React from 'react'
import './Style.css';
import { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';
import MovieList from './MovieList'
import Add from "./Add";
import Search from "./Search";
// import Nav from "./Nav";




function MovieCard () {
  
    const [show, setShow] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [movies, setMovies] = useState(MovieList)
    const [rate, setRate] = useState(1);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        const getKeyword=(key)=>{
        setKeyword(key)
        }
        const getRate=(r)=>{
         setRate(r)
        }
        const getAdd =(newMovie)=>{
          console.log(newMovie)
          setMovies({card:[...movies.card,newMovie]})
        // setMovies([...movies,newMovie])
        }
  return (
<>
      

     
   <div className='header'>
    <nav>
      <ul>
          <li> <a href='Popular'> Home</a></li>
          <li> <a href='Drama'> Drama</a></li>
          <li> <a href='Action'> Action</a></li>
          <li> <a href="Comedy"> Comedy</a></li>
      </ul>
    </nav>
    <Add getAdd={getAdd} />
    <Search getKeyword={getKeyword} getRate={getRate} rate={rate}/>
  
  </div>
  <div className='container'>
      {movies.card.filter(card=>(card.title.toLowerCase().includes(keyword.toLowerCase())&&card.etoile >= rate)).map((card) => (
          
          <div className='box-movie'>
              <div className="movie">
                  <img src={card.img} className="poster" alt='the_bad_guys' />
                      <div className="movie-details">
                          <div className="box">
                          
                              <h4 className="title"> {card.title}</h4>
                              <p className="rating"> {card.rating}</p>
                              <StarRatingComponent value = {card.etoile} />  
                          </div> 
                          <div className="overview">
                              <h1>description </h1> 
                              {card.description}
                          </div>
                      </div>
            </div>
    </div>     
    ))}
            </div> 

        </>
 )
}

export default MovieCard