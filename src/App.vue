
<template>
  <EventsForm />
  <Day />
</template>

<script>
import EventsForm from './components/EventsForm.vue'
import Day from './components/Day.vue'

export default {
  name: 'App',
  components: {
    EventsForm,
    Day,
  },
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
