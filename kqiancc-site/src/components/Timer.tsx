import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="timer">
      Time on site: {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
