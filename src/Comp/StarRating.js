import React,{useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';



const StarRating = ({getRate,rate}) => {
    const [etoile, setRating] = useState(1)
 const   onStarClick=(nextValue, prevValue, name)=> {
       getRate(nextValue)
      }
  return (

    <StarRatingComponent 
    name="rate1" 
    starCount={5}
    value ={rate}
    onStarClick={onStarClick}
  
  />
  )
}

export default StarRating
