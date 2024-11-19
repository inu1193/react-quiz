import React, { useState, useEffect } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const shuffled = [...answers];
    shuffled.sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [answers]);

  return (
    <ul id='answers'>
      {shuffledAnswers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = '';
        if (answerState === 'answered' && isSelected) {
          cssClasses = 'selected';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className='answer'>
            <button onClick={() => onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
