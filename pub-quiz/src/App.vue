<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-container v-if="state === 'quizzing'">
      <h2>Welcome to the Pub Quiz!</h2>
      <b-form @submit="onSubmit">
        <div v-for="question in quiz" v-bind:key=question.id>
          <h3>{{question.question}}</h3>
          <b-form-radio-group v-model="question.answer" v-for="option in question.options" v-bind:key=option.id>
            <b-form-radio :value=option.id>{{option.text}}</b-form-radio>
          </b-form-radio-group>
        </div>
        <b-button type="submit">Submit</b-button>
      </b-form>
    </b-container>
    <div v-if="state === 'completed'">
      <h2>Thanks for completing the quiz!</h2>
      <h3>Your score is: {{ score }}</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      quiz: [],
      state: 'quizzing',
      score: 0,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const formattedAnswers = this.quiz.map(current => ({
        id: current.id,
        answer: current.answer,
      }));
      const response = await axios.post('http://localhost:3000/submitAnswers', formattedAnswers)
      this.state = 'completed';
      this.score = response.data.score;
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/quiz');
    this.quiz = response.data;
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
