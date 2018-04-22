<template>
  <div>
    <h3>DD Form 4</h3>
    <div class="form-container">
      <div class="ddform">

      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {

  }
}

</script>

<style>
  .form-container {
    display: flex;
    justify-content: center;
  }
  .ddform {
    background: rgba(255, 255, 255, 1);
    width: 50%;
    min-width: 50%;
    height: 450px;
    box-shadow: 1px 1px 3px #222;
    margin-bottom: 15px;
    display: flex;
  }
  input {
    border: none;
    outline: none;
    border-radius: 0px;
  }
  h3 {
    font-family: 'Courier';
    text-align: center;
  }
</style>
