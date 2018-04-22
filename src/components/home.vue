<template>
  <div>
    <div class="welcome-section">
      <div class="welcome-section-content">
        <div class="welcome-section-image">
          <img src="https://vignette.wikia.nocookie.net/theworldsmilitaryhistory/images/a/a9/17th_Airborne_Division.png/revision/latest?cb=20150305001340" height="200px" />
        </div>
        <div class="welcome-section-text">
          <h2>WELCOME!</h2>
          <p>Welcome to the 17th Airborne Division, an elite Day of Infamy realism unit. We take great pride in all of our members and our core values which are courage, commitment, and teamwork. Our focus is placed on realism, but we also try to keep a fun, cheerful atmosphere. If you are not a member yet, check out the rest of our steam group, talk to us, and check out our websites to apply to the unit. We stride ourselves in keeping the game a fun and tactical experience for all players. We are always accepting new members . We are always advancing never moving backwards. To be an elite realism player in Day of Infamy enlist today.

Signing Off,
Capt. Michael W. Johnson
Commanding Officer
17th Airborne Division.</p>
          <p class="signature">
            Signing Off, <br />
            Capt. Michael W. Johnson <br/>
            Commanding Officer
            <br /> 17th Airborne Division
          </p>
        </div>
      </div>
      <div class="style-line"></div>
      <div class="style-line-bold"></div>
    </div>
    <div class="news-section">
      <div class="news-main">
        <h2>Division News</h2>
        <div class="news-post">
          <p>20 APR 2018</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis est venenatis, viverra enim congue, dictum nulla. Etiam cursus nec massa dictum laoreet. Phasellus iaculis consequat justo, quis auctor arcu consectetur ac. Morbi arcu risus, tempor sit amet nunc vel, semper suscipit dui. Morbi quis tincidunt urna. Ut eu lobortis metus. Ut efficitur, enim at hendrerit condimentum, leo ligula tincidunt ex, vitae convallis sem nibh ac lacus. Mauris eget aliquam nunc. Mauris vel</p>

          <p class="signature">S. Dorris <br /> Major, 17th Airborne <br /> Executive Officer</p>

          <hr />
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
div.welcome-section {

}

hr {
  border-color: #333;
}

.news-section {
  display:flex;
  padding-left: 25px;
}

.news-main {
  flex-basis: 65%;
  border-right: 1px solid #333;
}

.news-post {
  padding-left: 25px;
  padding-right: 20px;
  font-family: 'BenchNine'
}

.news-main h2 {
  text-align:center;
  color: #333;
}

.welcome-section-content {
  display: flex;
  min-height: 100%;
  padding-bottom: 1em;
  padding-top: 1em;
}

.welcome-section-image {
  width: 50%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
}

.welcome-section-image > p {
  margin: 5em;
}

.welcome-section-image > img {

}

.welcome-section-text {
  width: 50%;
  min-height: 100%;
  flex-basis: 60%;
}

.welcome-section-text > p {
  width: 80%;
  font-family: 'BenchNine';
}

.welcome-section-text h2 {
  margin: 0;
  font-family: 'BenchNine';
}

.signature {
  color: rgba(20, 20, 20, .5);
}

</style>
