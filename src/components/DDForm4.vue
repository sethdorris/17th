<template>
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
              <input type="text" v-model="steamname"/>
            </div>
            <div class="flex-basis-50">
              <label>STEAM ID</label>
              <input type="text" v-model="steamid"/>
            </div>
          </div>
          <div class="half-input">
            <div class="flex-basis-50 middle-border border-btm">
              <label>STEAM URL</label>
              <input type="text" v-model="steamurl"/>
            </div>
            <div class="flex-basis-50 border-btm">
              <label>GAME <span>(Currently only supporting Day of Infamy)</span></label>
              <input type="text" v-model="game"/>
            </div>
          </div>
          <div class="title-block">
            <h5>B. ENLISTEE/REENLISTEE INTEREST AND SKILL DATA</h5>
          </div>
          <div class="half-input">
            <div class="flex-basis-50 middle-border">
              <label>WHY DO YOU WANT TO JOIN</label>
              <input type="text" v-model="reason"/>
            </div>
            <div class="flex-basis-50">
              <label>RECRUITED BY</label>
              <input type="text" v-model="recruitedby"/>
            </div>
          </div>
          <div class="half-input">
            <div class="flex-basis-50 middle-border">
              <label>DO YOU HAVE MILSIM EXPERIENCE</label>
              <input type="text" v-model="experience"/>
            </div>
            <div class="flex-basis-50">
              <label>PREVIOUS UNITS</label>
              <input type="text" v-model="previous_units"/>
            </div>
          </div>
          <div class="half-input">
            <div class="flex-basis-50 middle-border">
              <label>WHAT ARE YOUR STRENGTHS/SKILLS IN-GAME</label>
              <input type="text" v-model="game_skills"/>
            </div>
            <div class="flex-basis-50">
              <label>IN WHAT WAYS CAN YOU HELP THE UNIT</label>
              <input type="text" v-model="help"/>
            </div>
          </div>
          <div class="half-input">
            <div class="flex-basis-50 middle-border">
              <label>DO YOU HAVE A MICROPHONE</label>
              <input type="text" v-model="microphone"/>
            </div>
            <div class="flex-basis-50">
              <label>CAN YOU ATTEND A WEEKLY EVENT</label>
              <input type="text" v-model="attendance"/>
            </div>
          </div>
          <div class="half-input">
            <div class="comments border-btm">
              <label>COMMENTS</label>
              <input type="text" v-model="comments"/>
            </div>
          </div>
          <div class="title-block">
            <h5>C. AGREEMENTS</h5>
          </div>
          <div class="border-btm">
            <p><strong>1. </strong>I am enlisting in the 17th Airborne Division realism unit on this date <strong> {{this.date}} </strong> for a period of <strong>4</strong> weeks beginning in the pay-grade of <strong>E1 / PV1</strong>
              unless authorized by the commander upon approval of this form.  I must serve a total of <strong>four (4)</strong> weeks, unless I am sooner discharged or otherwise extended by the appropriate
              authority.</p>
              <p><strong> 2. </strong>I understand that the failure to serve honorably during this initial enlistment period may result in not recieving an honorable discharge. A discharge of <strong>Other-Than-Honorable</strong> will result
              in an immediate disqualification for reenlistment for a period of <strong>2x</strong> the length of unfulfilled enlistment requirement. If I receive a <strong>Dishonorable Discharge</strong> I may be barred from future reenlistment.
              The type of discharge granted for unfulfilled commitment will be decided by a discharge board and will be based upon my quality of service.</p>
          </div>
          <div class="title-block">
            <h5>D. CERTIFICATION AND ACCEPTANCE</h5>
          </div>
          <div>
            <p> My acceptance for enlistment is based on the information I have given in my application for enlistment. If any of that
    information is false or incorrect, this enlistment may be voided or terminated administratively by the Commander or his designated representative(s).</p>
            <label>SIGNATURE</label>
            <input type="text" v-model="signature"/>
          </div>
          <div>
            <label>PASSWORD<span> (used for your account on the 17th Airborne Website)</span></label>
            <input type="password" v-model="password"/>
          </div>
          <div class="full-button">
            <button @click="submit">SUBMIT ENLISTMENT</button>
          </div>
          <transition name="fade">
            <div class="success-msg" v-if="showSuccess">
              <p>We have received your enlistment. You can check on your enlistment status by logging into the website using your
              steamid and password provided in your enlistment application.</p>
            </div>
          </transition>
          <transition name="fade">
            <div class="failure-msg" v-if="showFailure">
              <p></p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
      comments: '',
      signature: '',
      password: '',
      showSuccess: false,
      showFailure: false
    }
  },
  computed: {
    date: function() {
      var now = new Date();
      return now.toDateString();
    }
  },
  methods: {
    submit: function() {
      axios.post('/enlist', {
        steam_name: this.steamname,
        steam_id: this.steamid,
        steam_url: this.steamurl,
        game: this.game,
        reason: this.reason,
        recruited_by: this.recruitedby,
        experience: this.experience,
        previous_units: this.previous_units,
        skills: this.game_skills,
        help: this.help,
        microphone: this.microphone,
        attendance: this.attendance,
        additional: this.comments,
        signature: this.signature,
        password: this.password
      }).then(data => {
        if (data.status == 200) {
          this.showSuccess = true;
        } else {
          this.showFailure = true;
        }
      });
    }
  }
}

</script>

<style>
.form-container {
  display: flex;
  justify-content: center;
}
.success-msg {
  font-size: 16pt;
  color: #3dbc16;
}
.ddform-paper {
  background: rgba(255, 255, 255, 1);
  width: 65%;
  min-width: 65%;
  min-height: 500px;
  box-shadow: 1px 1px 3px #222;
  margin-bottom: 15px;
  display: flex;
}
div.comments {
  width: 100%;
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
.flex-basis-33 {
  flex-basis: 33%;
}
.single-input {
  display: flex;
  flex-basis: 100%;
}
.border-btm {
  border-bottom: 1px solid black;
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
label > span {
  font-weight: 500;
}
.full-button {
  width: 100%;
}
.full-button button {
  width: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
