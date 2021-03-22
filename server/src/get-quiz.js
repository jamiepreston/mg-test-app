import data from './data';

export default ({
  quiz = data
}) => quiz.map((question) => {
  const { answer, ...restOfQuiz } = question;
  return restOfQuiz;
})