import getQuiz from '../src/get-quiz';
describe('get-quiz', () => {
  describe('Given a quiz', () => {
    const quiz = [
      {
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
    it('should return the quiz, removing the answer', () => {
      const result = getQuiz({
        quiz,
      })
      expect(result).toEqual([
        {
          "question": "Test Question",
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
    ]);
  })
  })
})