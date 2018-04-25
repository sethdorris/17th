<template>
  <div class="admin-container">
    <ul>
      <li><router-link to="/admin/enlistment-review">Review Enlistments</router-link></li>
      <li><router-link to="/admin/promotions">Promotion Management</router-link></li>
      <li><router-link to="/admin/roster-management">Roster Management</router-link></li>
      <li><router-link to="/admin/news">Write News</router-link></li>
      <li><router-link to="/admin/schools">Schools / Training</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {

  }
}
</script>

<style>
  .admin-container {
    width: 80%;
    min-height: 500px;
    margin: 0 auto;
  }
</style>
