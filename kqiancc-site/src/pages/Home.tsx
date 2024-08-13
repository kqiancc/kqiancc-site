import React from 'react';
import Resume from '../components/resume.pdf';

const HomePage: React.FC = () => {
  return (
    <div className='flex items-center justify-center h-screen font-mono bg-blue-200'>
          <div className="w-full max-w-screen-lg px-4 mx-auto ">
            <p className="py-6 text-4xl text-purple-500 transition-transform duration-200 sm:text-5xl md:text-6xl hover:font-bold hover:scale-105">
              Hi, I'm Katherine Chacon Cai!</p>
            <p className="text-2xl text-white sm:text-3xl md:text-4xl">
            I'm a UVA student majoring in Computer Science and minoring in English.
            </p>
            <p className='items-center py-6 text-xl text-white sm:text-2xl md:text-3xl'>I love turning creative ideas into real and applicable websites — 
              finding the perfect blend that utilizes both the arts and the sciences. I'm in my final year of college,
              and I can't wait to graduate. </p>
              <p className='text-xl text-white sm:text-2xl md:text-3xl'> If I've piqued your interest, here is my 
              
              <a href={Resume} target="_blank" rel="noopener noreferrer" className ="text-blue-600 hover:font-bold"> resume</a>! 

              Feel free to send me an email at
              
              <a href="mailto:kqiancc@gmail.com" className ="text-blue-600 hover:font-bold"> kqiancc@gmail.com</a>, 
              
              or check out my 
              
              <a href="https://github.com/kqiancc" target="_blank" rel="noopener noreferrer" className ="text-blue-600 hover:font-bold"> GitHub </a>
                and <a href="https://www.linkedin.com/in/kqiancc" target="_blank" rel="noopener noreferrer" className ="text-blue-600 hover:font-bold">LinkedIn</a>.
              </p>
          </div>
        </div>
   

   
  );
};

export default HomePage;
