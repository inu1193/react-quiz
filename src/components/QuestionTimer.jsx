import React, { useEffect, useState } from 'react';

const QuestionTimer = ({ timeout, onTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, remainingTime);

    return () => {
      clearTimeout(timer);
    };
  }, [remainingTime, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id='question-time' max={timeout} value={remainingTime}  className={mode}/>;
};

export default QuestionTimer;
