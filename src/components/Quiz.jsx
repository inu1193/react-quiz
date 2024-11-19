import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    },
    []
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [
    handleSelectAnswer,
  ]);

  if (!quizStarted) {
    return (
      <div id="welcome-screen">
        <h1>Welcome to the Quiz!</h1>
        <p>Test your knowledge and have fun!</p>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
