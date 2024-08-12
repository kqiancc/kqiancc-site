import React from 'react';
import Resume from '../components/resume.pdf';

const HomePage: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-blue-200'>
          <div className="w-full max-w-screen-lg px-4 mx-auto">
            <h1 className="py-6 text-6xl text-purple-500">Hi, I'm Katherine Chacon Cai!</h1>
            <p className="text-4xl text-white">
            I'm a UVA Student majoring in Computer Science and minoring in English.
            </p>
            <p className='items-center py-6 text-2xl text-white '>I love turning creative ideas into real and applicable websites— 
              finding the perfect blend that utilizes both the arts and the sciences. I'm in my final year of college,
              and I can't wait to graduate. </p>
              <p className='text-2xl text-white'> If I've piqued your interest, here is my 
              
              <a href={Resume} target="_blank" rel="noopener noreferrer" className ="text-blue-600"> resume</a>! 

              Feel free to send me an email to
              
              <a href="mailto:kqiancc@gmail.com" className ="text-blue-600"> kqiancc@gmail.com</a>, 
              
              or check out my 
              
              <a href="https://github.com/kqiancc" target="_blank" rel="noopener noreferrer" className ="text-blue-600"> GitHub </a>
                and <a href="https://www.linkedin.com/in/kqiancc" target="_blank" rel="noopener noreferrer" className ="text-blue-600">LinkedIn</a>.
              </p>
          </div>
        </div>
   

   
  );
};

export default HomePage;
