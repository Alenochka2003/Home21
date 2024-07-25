import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Result.module.css';

const Result = () => {
  const result = useSelector((state) => state.questionnaire.result);

  return (
    <div className={styles.result}>
      <h2>Ваш результат:</h2>
      <p>{result || 'Вы ещё не отправили ответы.'}</p>
    </div>
  );
};

export default Result;