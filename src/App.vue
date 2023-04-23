<template>
<Navbar/>
<div class="container is-max-desktop">
  <RouterView/>
</div>
</template>
<style>
@import 'bulma/css/bulma.min.css';

</style>
<script setup>
import Navbar from './components/Layouts/Navbar.vue';
</script>