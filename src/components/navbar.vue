<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
    <router-link class="nav-link" to="/jobs">Jobs</router-link>
    <router-link class="nav-link" to="/Demo">Demo</router-link>
  </nav>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  text-align: center;
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff6b81;
}
</style>
