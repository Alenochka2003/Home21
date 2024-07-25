import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import styles from './App.module.css';

const App = () => {
  const questions = useSelector((state) => state.questionnaire.questions);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div className={styles.app}>
      <h1>Анкета</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <button onClick={handleSubmit} className={styles.submitButton}>Отправить ответы</button>
      <Result />
    </div>
  );
};

export default App;