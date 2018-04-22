<template>
  <div>
    <h3>DD Form 4</h3>
    <div class="form-container">
      <div class="ddform-paper">
        <div class="ddform">
          <div class="title-block">
            <h5>ENLISTMENT/REENLISTMENT DOCUMENT <br /> 17TH AIRBORNE</h5>
          </div>
          <div class="privacy-block">
            <h5>PRIVACY STATEMENT</h5>
            <p><strong>PRINCIPAL PURPOSE(S):</strong> To record enlistment or reenlistment into the 17th Airborne. This information becomes a part of the subject's
military personnel records which are used to document promotion, reassignment, training and other personnel management
actions. The information contained within will be for 17th Airborne Official Use Only and will not be distributed to any third parties without previous consent of the applicant.</p>
            <p><strong>ROUTINE USE(S):</strong> This form becomes a part of the Service's Enlisted Master File and Field Personnel File. All uses of the form are internal to the
relevant Service.</p>
<p><strong>DISCLOSURE:</strong> Voluntary; however, failure to furnish personal identification information may negate the enlistment/reenlistment application.</p>
          </div>
          <div class="block-a">
            <div class="title-block">
              <h5>A. ENLISTEE/REENLISTEE IDENTIFICATION DATA</h5>
            </div>
            <div class="half-input">
              <div class="flex-basis-50 middle-border">
                <label>STEAM NAME</label>
                <input type="text" />
              </div>
              <div class="flex-basis-50">
                <label>STEAM ID</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
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
  .ddform-paper {
    background: rgba(255, 255, 255, 1);
    width: 60%;
    min-width: 60%;
    min-height: 500px;
    box-shadow: 1px 1px 3px #222;
    margin-bottom: 15px;
    display: flex;
  }

  .ddform {
    border: 1px solid black;
    margin: 20px;
    width: 100%;
  }

  .title-block {
    text-align: center;
    border-bottom: 1px solid black;
  }
  .privacy-block h5 {
    text-align: center;
  }
  .privacy-block {
    border-bottom: 1px solid black;
  }
  .half-input {
    display: flex;
  }
  .flex-basis-50 {
    flex-basis: 50%;
  }
  .middle-border {
    border-right: 1px solid black;
  }
  input {
    border: none;
    outline: none;
    border-radius: 0px;
    background-color: #e0eafc;
    width: 100%;
  }
  h3 {
    font-family: 'Courier';
    text-align: center;
  }
  h5 {
    font-weight: 800;
    text-align: center;
    margin: 3px;
  }
  label {
    display: block;
    margin: 0;
  }
</style>
