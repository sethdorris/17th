<template>
  <nav>
     <ul>
       <router-link to="/" exact>Home</router-link>
       <router-link to="#">About Us</router-link>
       <router-link to="/enlist" exact>Enlist</router-link>
       <router-link to="#">Forums</router-link>
       <router-link to="#">Roster</router-link>
     </ul>
   </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
div > nav {
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  height: 100%;
  align-items:stretch;
  justify-content: center;
  list-style-type: none;
}

div > nav ul a {
  padding-left: 1.5em;
  padding-right: 1.5em;
  font-size: 12pt;
  border-right: 1px solid black;
  color: #444;
}


.router-link-active {
  color: gold;
}
</style>
