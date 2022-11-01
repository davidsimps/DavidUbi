<script setup>
import Home from './pages/Home.vue';
</script>

<template>
  <div class="container-wide">
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Work Stations</a>
  </div>
</nav>
  </div>
  

  <Suspense>
    <Home />
  </Suspense>

</template>

<style scoped>
nav {
  background-color: #1F398A !Important;
}

nav h3{
  color: rgb(229, 229, 229);
}

nav .navbar-brand{
  position: relative;
  left: 50% !important;
  color: azure;
  font-size: 2rem;
}
</style>
