<template>
  <div class="grid-container">
    <div class="grid-row">
      <div class="grid-col-4">
        <h2>Questions</h2>
        <div
          class="margin-y-2"
          v-for="(currentQuestion, questionIndex) in completedQuestions"
          :key="currentQuestion.questionId"
        >
          <div class="margin-y-1">{{ currentQuestion.question }}</div>
          <div v-if="currentQuestion.type === 'number'">
            <input
              class="usa-input margin-y-05"
              type="text"
              v-model.number="ui[currentQuestion.questionId]"
              :id="'completed--questions-checkbox-' + currentQuestion.questionId"
            />
            <button class="usa-button" @click="updateAnswer(currentQuestion.questionId)">Update</button>
          </div>
          <div v-else-if="currentQuestion.type === 'multi-choice'">
            <div
              class="usa-checkbox"
              v-for="(choice, index) in currentQuestion.choice"
              :key="choice"
            >
              <input
                class="usa-checkbox__input"
                type="checkbox"
                :checked="ui[currentQuestion.questionId] && ui[currentQuestion.questionId][choice]"
                @click="toggleData(currentQuestion.questionId, choice)"
                :id="'completed--questions-checkbox-' + questionIndex + '-' + index"
              />
              <label
                class="usa-checkbox__label"
                :for="'completed--questions-checkbox-' + questionIndex + '-' + index"
              >{{ choice }}</label>
            </div>
            <button class="usa-button" @click="updateAnswer(currentQuestion.questionId)">Update</button>
          </div>
          <div v-else-if="currentQuestion.type === 'choice'">
            <div class="usa-radio" v-for="(choice, index) in currentQuestion.choice" :key="choice">
              <input
                class="usa-radio__input"
                type="radio"
                :id="'completed--questions-radio-' + questionIndex + '-' + index"
                :checked="data[currentQuestion.questionId] === choice"
                @click="addAnswer(currentQuestion.questionId, choice)"
              />
              <label
                class="usa-radio__label"
                :for="'completed--questions-radio-' + questionIndex + '-' + index"
              >{{ choice }}</label>
            </div>
          </div>
          <div v-else>
            <div class="usa-radio">
              <input
                class="usa-radio__input"
                type="radio"
                :id="'completed--questions-radio-' + questionIndex + '-yes'"
                :checked="data[currentQuestion.questionId] === true"
                @click="addAnswer(currentQuestion.questionId, true)"
              />
              <label
                class="usa-radio__label"
                :for="'completed--questions-radio-' + questionIndex + '-yes'"
              >Yes</label>
            </div>
            <div class="usa-radio">
              <input
                class="usa-radio__input"
                type="radio"
                :checked="data[currentQuestion.questionId] === false"
                :id="'completed--questions-radio-' + questionIndex + '-no'"
                @click="addAnswer(currentQuestion.questionId, false)"
              />
              <label
                class="usa-radio__label"
                :for="'completed--questions-radio-' + questionIndex + '-no'"
              >No</label>
            </div>
          </div>

          <button
            class="usa-button usa-button--unstyled"
            @click="clearAnswer(currentQuestion.questionId)"
          >clear</button>
        </div>

        <div
          class="margin-y-2"
          v-for="(currentQuestion, questionIndex) in remainingQuestions"
          :key="currentQuestion.questionId"
        >
          <div class="margin-y-1">{{ currentQuestion.question.question }}</div>
          <div v-if="currentQuestion.question.type === 'number'">
            <input
              class="usa-input margin-y-05"
              type="text"
              v-model.number="ui[currentQuestion.questionId]"
              :id="'remainingQuestions-checkbox-' + currentQuestion.questionId"
            />
            <button class="usa-button" @click="updateAnswer(currentQuestion.questionId)">Update</button>
          </div>
          <div v-else-if="currentQuestion.question.type === 'multi-choice'">
            <div
              class="usa-checkbox"
              v-for="(choice, index) in currentQuestion.question.choice"
              :key="choice"
            >
              <input
                class="usa-checkbox__input"
                type="checkbox"
                :checked="ui[currentQuestion.questionId] && ui[currentQuestion.questionId][choice]"
                @click="toggleData(currentQuestion.questionId, choice)"
                :id="'remainingQuestions-checkbox-' + questionIndex + '-' + index"
              />
              <label
                class="usa-checkbox__label"
                :for="'remainingQuestions-checkbox-' + questionIndex + '-' + index"
              >{{ choice }}</label>
            </div>
            <button class="usa-button" @click="updateAnswer(currentQuestion.questionId, {})">Update</button>
          </div>
          <div v-else-if="currentQuestion.question.type === 'choice'">
            <div
              class="usa-radio"
              v-for="(choice, index) in currentQuestion.question.choice"
              :key="choice"
            >
              <input
                class="usa-radio__input"
                type="radio"
                :id="'remainingQuestions-radio-' + questionIndex + '-' + index"
                @click="addAnswer(currentQuestion.questionId, choice)"
              />
              <label
                class="usa-radio__label"
                :for="'remainingQuestions-radio-' + questionIndex + '-' + index"
              >{{ choice }}</label>
            </div>
          </div>
          <div v-else>
            <div class="usa-radio">
              <input
                class="usa-radio__input"
                type="radio"
                :id="'remainingQuestions-radio-' + questionIndex + '-yes'"
                @click="addAnswer(currentQuestion.questionId, true)"
              />
              <label
                class="usa-radio__label"
                :for="'remainingQuestions-radio-' + questionIndex + '-yes'"
              >Yes</label>
            </div>
            <div class="usa-radio">
              <input
                class="usa-radio__input"
                type="radio"
                :id="'remainingQuestions-radio-' + questionIndex + '-no'"
                @click="addAnswer(currentQuestion.questionId, false)"
              />
              <label
                class="usa-radio__label"
                :for="'remainingQuestions-radio-' + questionIndex + '-no'"
              >No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-col-8">
        <h2>Matched Benefits</h2>
        <div>
          <div v-if="positiveResults.length">
            <div
              class="usa-card margin-y-1"
              v-for="result in positiveResults"
              :key="result.resultId"
            >
              <div class="usa-card__container">
                <header class="usa-card__header">
                  <h2 class="usa-card__heading">{{ result.result.data.name }} - {{ result.result.data.identifier }}</h2>
                </header>
                <div class="usa-card__body" v-if="result.result.data.description">
                  <p>{{ result.result.data.description }}</p>
                </div>
                <div class="usa-card__footer" v-if="result.result.data.url">
                  <a :href="result.result.data.url" target="_blank" class="usa-button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div v-else>No have no results</div>
        </div>

        <h2>Potential Benefits</h2>

        <div>
          <div v-if="possibleResults.length">
            <div
              class="usa-card margin-y-1"
              v-for="result in possibleResults"
              :key="result.resultId"
            >
              <div class="usa-card__container">
                <header class="usa-card__header">
                  <h2 class="usa-card__heading">{{ result.result.data.name }}</h2>
                </header>
                <div class="usa-card__body" v-if="result.result.data.description">
                  <p>{{ result.result.data.description }}</p>
                </div>
                <div class="usa-card__footer" v-if="result.result.data.url">
                  <a :href="result.result.data.url" target="_blank" class="usa-button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div v-else>No have no results</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questionGraph } from "../../graph/benefitsGraph";

export default {
  name: "App",
  data() {
    return {
      ui: {},
      data: {},
      loading: true,
      insertionOrder: [],
    };
  },
  props: {
    msg: String,
  },

  computed: {
    remainingQuestions: function () {
      return questionGraph.getRemainingQuestions(this.data); // .slice(0, 10);
    },
    possibleResults: function () {
      return questionGraph.getPossibleResults(this.data);
    },
    positiveResults: function () {
      return questionGraph.getPositiveResults(this.data);
    },
    completedQuestions: function () {
      return questionGraph.getCompletedQuestions(this.data);
    },
  },
  methods: {
    addAnswer: function (questionId, answer) {
      const newData = { ...this.data, [questionId]: answer };
      this.data = newData;
      this.insertionOrder.push(questionId);
      this.ui[questionId] = answer;
      this.ui = { ...this.ui };
    },
    clearAnswer: function (questionId) {
      const newData = { ...this.data };
      delete newData[questionId];
      delete this.ui[questionId];
      this.data = newData;
      const found = this.insertionOrder.indexOf(questionId);
      if (found !== -1) {
        this.insertionOrder = this.insertionOrder.slice(found, 1);
      }
    },
    updateAnswer: function (questionId, emptyValue) {
      const answer = this.ui[questionId] || emptyValue;
      this.clearAnswer(questionId);
      this.addAnswer(questionId, answer);
    },
    toggleData: function (questionId, choice) {
      this.ui[questionId] = { ...(this.ui[questionId] || {}) };
      this.ui[questionId][choice] = !this.ui[questionId][choice];
      this.ui = { ...this.ui };
    },
    goBack: function () {
      if (this.insertionOrder.length) {
        const questionId = this.insertionOrder.pop();
        this.clearAnswer(questionId);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

