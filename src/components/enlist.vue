<template>
  <div>
    <h3>DD Form 4</h3>
    <DDForm4></DDForm4>
  </div>
</template>

<script>
import DDForm4 from './DDForm4.vue';
export default {
  components: {
    DDForm4
  },
  data() {
    return {
      steamname: '',
      steamid: '',
      steamurl: '',
      game: '',
      reason: '',
      recruitedby: '',
      experience: '',
      previous_units: '',
      game_skills: '',
      help: '',
      microphone: '',
      attendance: '',
      comments: ''
    }
  },
  computed: {
    date: function() {
      var now = new Date();
      return now.toDateString();
    }
  },
  methods: {

  }
}

</script>

<style>

</style>
