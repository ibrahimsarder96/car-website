import React from 'react';

const Blogs = () => {
  return (
    <div className='text-justify px-5 py-14'>
      <h1 className='text-3xl'>What is Context API?</h1>
      <p className='pt-4'>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
      <h1 className='text-3xl mt-14'>What is Semantic tag?</h1>
      <p className='pt-4'>Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a p tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.</p>
    </div>
  );
};

export default Blogs;