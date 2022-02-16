import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
 const [index, setIndex] = useState(0) 
 const {name, job, image, text} = people[index]

 const changeReview = (number) => {
  if (number < 0){
    return people.length - 1;
  }
  if(number > people.length - 1){
    return 0
  }
  return number
 }

 const prevReview = () => {
   const newReview = index - 1;
   setIndex(changeReview(newReview));
 }

 const nextReview = () => {
   const newReview = index + 1
   setIndex(changeReview(newReview))
 }

 const randomReview = () => {
   let randomNumber = Math.floor(Math.random() * people.length - 1);
   if (randomNumber === index){
     randomNumber = index + 1;
   }
   setIndex(changeReview(randomNumber))
 }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
          suprise me
      </button>
    </article>
  )
};

export default Review;
