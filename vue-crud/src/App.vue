<template>
  <div class="container">
    <NavbarComponent class="header" />
    
    <main class="main-content">
      <RouterView />
    </main>
    
    <FooterComponent class="footer" />
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavbarComponent from './components/NavbarComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
  }

  .main-content {
    flex-grow: 1; 
    padding: 1rem; 
  }


</style>
