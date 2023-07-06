<template>
  <form @submit.prevent="handleSubmit" class="eventForm">
    <div class="eventName">
      <label for="event-name">Event</label>
      <input type="text" id="event-name" name="event-name" v-model.lazy="formValues.eventName"/>
    </div>
    <div class="setDates">
      <label for="event-date">Date</label>
      <input type="date" id="event-date" name="event-date" v-model.lazy="formValues.startDate"/>
      <label for="end-date">End-Date</label>
      <input type="date" id="end-date" name="end-date" v-model.lazy="formValues.endDate"/>
    </div>
    <div class="setTime">
      <label for="event-time">Time</label>
      <input type="time" id="event-time" name="event-time" v-model.lazy="formValues.startTime"/>
      <label for="end-time">End-Time</label>
      <input type="time" id="end-time" name="end-time" v-model.lazy="formValues.endTime"/>
    </div>
    <div class="eventDescriptions">
      <label for="event-description">Event Description</label>
      <textarea id="event-description" name="event-description" v-model.lazy="formValues.description"></textarea>
    </div>
    <button type="submit">Save</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formValues: {
        eventName: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        description: '',},
    }
  },
      methods: {
        handleSubmit: function() {
          console.log(this.formValues)
          axios.post('http://localhost:8080/api/events', this.formValues).then(() => {
            console.log('posted')
          })
        },
      }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: rgb(70, 70, 70);
}
.eventForm {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 10px;
}

label {
  margin-top: .50em;
  margin-left: 1em;
}

input {
  margin: .25em .50em 0 .50em;
  padding: .50em;
  border-radius: 5px;
  border: 1px solid gray;
}

textarea {
  margin: .50em .50em 0 .50em;
  padding: .50em;
  border-radius: 5px;
  border: 1px solid gray;
  resize: none;
  overflow: hidden;
}

button {
  margin: .50em .50em .50em .50em;
}

input:focus, textarea:focus, select:focus{
  outline: none;
}

.eventName {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.setDates {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.setTime {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.eventDescriptions {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.eventDescriptions textarea {
  width: 97%;
}

</style>
