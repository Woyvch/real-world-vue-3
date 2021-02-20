<template>
  <h1>Events for Good</h1>
  <div class="events">
    <!--<img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />-->
    <event-card v-for="event in events" :key="event.id" :event="event"></event-card>
  </div>
</template>

<script>
//import HelloWorld from '../components/HelloWorld.vue';
/* @ is an alias to /src */
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  name: 'EventList',
  components: {
    //HelloWorld
    EventCard // register it as a child component
  },
  data() {
    return {
      events: null
    };
  },
  // lifecycle hook
  created() {
    // get events from mock db when component is created
    EventService.getEvents()
      // wait for the request to finisch
      .then(response => {
        this.events = response.data;
        //console.log('events: ', response.data)
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
