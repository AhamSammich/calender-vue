
<template>
  <EventsForm />
  <Login />
  <Month />
</template>

<script>
import Login from './components/Login.vue'
import EventsForm from './components/EventsForm.vue'
import Day from './components/Day.vue'
import Month from './components/Month.vue'


export default {
  name: 'App',
  components: {
    Login,
    EventsForm,
    Month,
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
