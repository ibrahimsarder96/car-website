import React from 'react';

const Review = (props) => {

  const {name, photo, ratting, review} = props.review;
  return (
    <div className='bg-white rounded-lg'>
      <img className='rounded-full md:ml-52 my-6' src={photo} alt="" />
      <div className='p-4'>
      <h1 className='text-2xl'>{name}</h1>
      <h2 className='text-xl'>{ratting}</h2>
      <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;