import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    { id: 1, question: 'Какой ваш любимый цвет?', options: ['Красный', 'Синий', 'Зеленый'] },
    { id: 2, question: 'Какая ваша любимая еда?', options: ['Пицца', 'Суши', 'Бургер'] },
    { id: 3, question: 'Какая ваша любимая книга?', options: ['Война и мир', '1984', 'Гарри Поттер'] },
  ],
  answers: {},
  result: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    submitAnswers: (state) => {
      // Здесь можно добавить логику для подсчета результата
      state.result = Object.values(state.answers).join(', ');
    },
  },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;