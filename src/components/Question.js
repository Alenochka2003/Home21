import React from 'react';
import { useDispatch } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();

  const handleAnswer = (option) => {
    dispatch(answerQuestion({ questionId: question.id, answer: option }));
  };

  return (
    <div className={styles.question}>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option) => (
          <li key={option}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;