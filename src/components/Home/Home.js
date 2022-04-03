import React from 'react';
import useHomeReview from '../Hookes/useHomeReview';
import ReviewHome from '../ReviewHome/ReviewHome';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [reviews, setReviews] = useHomeReview();
  let command = reviews.slice(0, 3)
  
  const navigate = useNavigate();
  const showReview = () =>{
    navigate('/reviews')
  }
  
  return (
   <div>
      <div className='md:flex my-48'>
      <div className='w-6/12 px-4'>
      <h1 className='text-6xl font-semibold text-pink-300'>Find your next car with us</h1>
      <p className='my-10'>There are still some tried-and-true steps you should take when buying a car — as well as a few new ones to consider — to ensure you get the right car for you, at the right price and in a safe manner.</p>
      <button className='border py-2 px-3 rounded-lg bg-indigo-300 text-white text-xl text-bold'>Live demo</button>
      </div>
      <div className=''>
      <img src="https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67418.jpg?size=626&ext=jpg&ga=GA1.2.142737712.1632825724" alt="" />
      </div>
    </div>
    <section className=' mt-8 p-4 bg-indigo-300'>
        <h1 className='text-4xl'>Customer Reviews:{command.length}</h1>
      <div className='grid md:grid-cols-3 gap-3 mt-8'>
      {
        command.map(review => <ReviewHome 
          review={review}
          key={review.id}
          ></ReviewHome>)
      }
      </div>
    </section>
    <button onClick={showReview} className='my-8 border py-2 px-3 rounded-lg bg-indigo-300 text-white text-xl text-bold'>See All Review</button>
   </div>
  );
};

export default Home;