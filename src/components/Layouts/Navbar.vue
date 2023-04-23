<template>

  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      Notes manager
    </a>

    <a role="button" class="navbar-burger" 
    @click.prevent="showNavMobile=!showNavMobile"
    :class="{ 'is-active': showNavMobile}"
     aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showNavMobile}">
    <div class="navbar-end">
        <RouterLink @click="showNavMobile = false"
         to="/" class="navbar-item" >Notes</RouterLink>
        <RouterLink @click="showNavMobile = false"
        to="/stats" class="navbar-item" >Stats</RouterLink>
    </div>
  </div>
</nav>
</template>
<style scoped>
@media (max-width:1023px) {
    .navbar-menu{
        position:absolute;
        left:0;
        width:100%;
    }
    
}
</style>
<script setup>
import { ref } from 'vue';
const showNavMobile = ref(false)

</script>