<template>
  <div id="app">
    <div class="document-header-container">
      <h3 class="document-style">War Department<br /> <span class="official-small">Official Business </span></h3>
      <h3 class="document-style">17th Airborne Division <br /> <span class="official-small"> 14 JAN 1944</span></h3>
    </div>
    <div class="style-line"></div>
    <div class="style-line-bold"></div>
    <Navbar></Navbar>
    <div class="style-line end-nav-line"></div>
    <router-view></router-view>
    <div class="style-line-bold"></div>
    <div class="style-line"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'BenchNine', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  width: 70%;
  margin:60px auto;
  border: 1px solid #111;
  height: 100%;
  min-height: 700px;
  padding-top: 1em;
  background: linear-gradient(to right, rgba(188, 178, 124, .8)0%, rgba(211, 199, 139, .6)50%, rgba(188, 178, 124, .8) 100%), url("https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  box-shadow: 1px 1px 5px black;
  border-radius: 5px;
}

.document-style {
  margin: 35px;
  color: rgba(40, 40, 40, .5);
  font-family: 'Courier';
  font-size: 12pt;
  display: inline-block;
}

.document-header-container {
  display: flex;
  justify-content: space-between;
  margin: 0;
  text-align: center;
}

.official-small {
  font-size: 9pt;
}

.style-line {
  border-top: 1px solid #333;
  height: 1vh;
  width: 90%;
  margin: 0 auto;
}

.style-line-bold {
  border-top: 2px solid #111;
  height: 1vh;
  width: 90%;
  margin: 0 auto;
}

.end-nav-line {
  margin-top: 3px;
}

.style-line:last-of-type {
  margin-bottom: 5em;
}
</style>
