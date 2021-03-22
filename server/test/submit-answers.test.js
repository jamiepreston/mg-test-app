import submitAnswers from '../src/submit-answers';

describe('submit-answers', () => {
  describe('Given a quiz', () => {
    const quiz = [
      {
        "id": 1,
        "question": "Test Question",
        "answer": "c",
        "options": [
          {
            "id": "a",
            "text": "South Africa"
          },
          {
            "id": "b",
            "text": "Australia"
          },
          {
            "id": "c",
            "text": "New Zealand"
          }
        ]
      }
    ];
    describe('and a set of correct answers', () => {
      const answers = [
        {
          "id": 1,
          "answer": "c"
        }
      ];

      it('should return a score of 1', () => {
      const result = submitAnswers({
        quiz,
        answers,
      })
      expect(result).toEqual(1);
    })
  })
    describe('and a set of incorrect answers', () => {
      const answers = [
        {
          "id": 1,
          "answer": "a"
        }
      ];

      it('should return a score of 0', () => {
      const result = submitAnswers({
        quiz,
        answers,
      })
      expect(result).toEqual(0);
    })
  })
})
})