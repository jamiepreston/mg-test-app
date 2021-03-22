import data from './data';

export default ({
  quiz = data,
  answers = data,
}) =>  answers.reduce((accumulator, current) => {
    const { answer } = quiz.find(question =>
      current.id === question.id
    );
    return answer === current.answer
      ? accumulator + 1
      : accumulator;
  }, 0);
