<template>
  <div id="app">
    <h2>Relation User to Roles</h2>
      <div v-for="user in users" :key="user.id">
        <p>name: {{user.name}}</p>
        <p v-if="user.role">role: {{user.role}}</p>
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['users'])
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px 0 0 60px;
}
</style>
