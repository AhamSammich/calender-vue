<template>
    <div class="dayComponent">
        <h2>Replace this with formatted date</h2>
        <div class="events">
        <div class="event" v-for="(event, index) in events" :key="index">
            <h3>{{ event.eventName }}</h3>
            <p>{{ event.startTime }} - {{event.endTime}}</p>
        </div>
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
        events: [],
    }
  }, 
  methods: {
    getEvents: function() {
        axios.get('/api/events').then((response) => {
            this.events = response.data
            console.log(this.events)
        })
    },
    getMonth: function() {
        // return current month using new Date().getMonth() with each date in events array
        const month = new Date().getMonth()
        console.log(month)
        return month
    },
  },
  created() {
    this.getEvents();
    this.getMonth()
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>