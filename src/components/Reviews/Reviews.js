import React, { useState } from 'react';
import useHomeReview from '../Hookes/useHomeReview';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useHomeReview();
  return (
    <div className=' mt-8 p-4 bg-indigo-300'>
      <h1 className='text-4xl font-mono text-white '>Customer Reviews</h1>
      <div className='grid md:grid-cols-3 gap-3 mt-8'>
      {
        reviews.map(review => <Review 
          key={review.id}
          review={review}
          ></Review>)
      }
      </div>
    </div>
  );
};

export default Reviews;