<template>
  <div class="wrapper">
    <div class="heading">
      <h1>{{ type }}</h1>
      <div class="numbers">{{ min }} TO {{ max }}</div>
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">

  defineProps(['type', 'description', 'min', 'max'])

</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 300px;
    padding: 20px;
    
  }

  .heading {
    display: flex;
    justify-content: center;
    gap: 3px;
  }

  .numbers {
    border: 1px solid black;
    padding: 3px 5px;
    font-weight: bold;
    border-radius: 3px;
  }

  .wrapper h1 {
    text-align: center;
    font-size: 26px;
  }

  .wrapper p {
    font-size: 20px;
  }

</style>