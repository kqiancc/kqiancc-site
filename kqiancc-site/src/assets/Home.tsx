import React from 'react';
import Resume from '../components/resume.pdf';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Hi, I'm Katherine Chacon Cai! </h1>
       <h2>I'm a UVA Student majoring in CS and minoring in English.</h2>
      <p>I love bridging the gap between creative storytelling and 
        website building-- finding the perfect mixture that utilizes 
        both the arts and the sciences. I'm in my final year of college,
        and I can't wait to graduate. </p>
        <p> If I've peaked your interest, here is my 
        
        <a href={Resume} target="_blank" rel="noopener noreferrer"> resume</a>! 

        Feel free to send me an 
        
        <a href="mailto:kqiancc@gmail.com"> email</a>, 
         
         or check out my 
         
         <a href="https://github.com/kqiancc" target="_blank" rel="noopener noreferrer"> GitHub </a>
          and <a href="https://www.linkedin.com/in/katherine-chacon-cai-052982252" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
      
    </div>

   
  );
};

export default HomePage;
