import React from 'react';
import resume from './Katherine_Chacon_Cai_Resume (1).pdf'; // Adjust the path as necessary

const ResumeButton: React.FC = () => {
  const handleClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <button onClick={handleClick}>
      Resume
    </button>
  );
};

export default ResumeButton;
