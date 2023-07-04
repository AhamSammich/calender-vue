<template>
    <!-- <div class="day">
        <h2>{{ day }}</h2>
        <div class="events">
        <div class="event" v-for="event in events" :key="event.id">
            <h3>{{ event.eventName }}</h3>
            <p>{{ event.description }}</p>
        </div>
        </div>
    </div> -->
    <h1>{{month}}</h1>
</template>

<script>
export default {
  data() {
    return {
        month: 'May',
    }
  }, 
  methods: {
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