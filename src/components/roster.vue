<template>
  <div class="roster-container">
    <h3>17th Airborne Company Roster</h3>
    <div class="style-line"></div>
    <div class="style-line-bold"></div>
    <div class="roster-box">
      <div class="txt-lg fb-20 ta-c">Rank</div>
      <div class="txt-lg fb-40">Name</div>
      <div class="txt-lg fb-40">Role</div>
    </div>
    <div class="style-line"></div>
    <h4 class="ta-c">Company Command Group</h4>
    <div class="roster-box" v-for="command in CommandGroup">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <div class="style-line"></div>
    <h4 class="ta-c">1st Platoon</h4>
    <div class="roster-box" v-for="command in FirstPlatoonCommand">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <h4 class="ta-c">Alpha Squad</h4>
    <div class="roster-box" v-for="command in FPAlphaSquad">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <h4 class="ta-c">Bravo Squad</h4>
    <div class="roster-box" v-for="command in FPBravoSquad">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width + '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <div class="style-line"></div>
    <h4 class="ta-c">2nd Platoon</h4>
    <div class="roster-box" v-for="command in SecondPlatoonCommand">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <h4 class="ta-c">Alpha Squad</h4>
    <div class="roster-box" v-for="command in SPAlphaSquad">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
    <h4 class="ta-c">Bravo Squad</h4>
    <div class="roster-box" v-for="command in SPBravoSquad">
      <div class="fb-20 ta-c"><img :src= "command.image_url" v-bind:width="command.width+ '%'"/></div>
      <div class="fb-40">{{command.steamname}}</div>
      <div class="fb-40">{{command.role}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      roster: []
    }

  },
  computed: {
    CommandGroup: function() {
      var hq =  this.roster.filter(member => {
        return member.platoon == "HQ"
      })
      return hq.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    FirstPlatoonCommand: function() {
      var hq =  this.roster.filter(member => {
        return member.platoon == "1" && member.squad == "HQ"
      })
      return hq.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    FPAlphaSquad: function() {
      return this.roster.filter(member => {
        return member.platoon == "1" && member.squad == "Alpha"
      }).sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    FPBravoSquad: function() {
      var bravo = this.roster.filter(member => {
        return member.platoon == "1" && member.squad == "Bravo"
      })
      return bravo.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    SecondPlatoonCommand: function() {
      var hq = this.roster.filter(member => {
        return member.platoon == "2" && member.squad == "HQ"
      })
      return hq.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    SPAlphaSquad: function() {
      var alpha = this.roster.filter(member => {
        return member.platoon == "2" && member.squad == "Alpha"
      })
      return alpha.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
    SPBravoSquad: function() {
      var bravo = this.roster.filter(member => {
        return member.platoon == "2" && member.squad == "Bravo"
      });
      return bravo.sort((a, b) => {
        return b.rankid - a.rankid;
      });
    },
  },
  beforeMount() {
    axios.get('/roster')
    .then(data => {
      console.log(data.data);
      this.roster = data.data;
    })
  }

}

</script>

<style>
  .roster-container {
    width: 80%;
    min-height: 500px;
    margin: 0 auto;
  }
  h3 {
    text-align: center;
    width: 100%;
    font-family: inherit;
  }
  .roster-box {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .txt-lg {
    font-size: 16pt;
  }
  .fb-20 {
    flex-basis: 20%;
  }
  .ta-c {
    text-align: center;
  }
  .fb-40 {
    flex-basis: 40%;
  }

</style>
