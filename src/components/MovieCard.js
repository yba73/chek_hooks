import React from 'react'
import ReactStars from "react-rating-stars-component";
import './style.css'

const MovieCard = (props) => {
  return (
    
       <div className='box-movie'>
              <div className="movie">
                  <img src={props.img} className="poster" alt='img' />
                      <div className="movie-details">
                            <div className="box">
                                <h4 className="title" alt="title"> {props.title}</h4>
                                <p className="rating"> {props.rating}</p>
                                <ReactStars 
                                  edit={false}
                                  Count={5}
                                  isHalf={true}
                                  color="black"
                                  activeColor="orange"
                                  value={props.etoile} />
                            </div> 
                            <div className="overview">
                                <h1>description </h1> 
                                {props.description}
                            </div>
                      </div>
                </div>
        </div>
   
    
  )
}



export default MovieCard