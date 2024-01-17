<template>
    <nav class="navbar">
    <RouterLink to="/flight-rating-system" class="link">Flight numbers</RouterLink>
      <RouterLink to="/"><img src="../assets/discgolflogo.svg" alt="HomeLogo" class="logo"/></RouterLink>
      <RouterLink to="/create" class="link">Create</RouterLink>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 15px 45px; 
  background-color: rgb(211, 211, 211, 0.85);
  z-index: 2;
}

.logo {
  height: 100px;
}

.link {
    color: black;
    text-decoration: none;
    font-size: 26px;
    font-weight: bold;
    padding: .5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid black;
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover:before {
        transform: scaleX(0.3);
    }

    &:hover:after {
        transform: translateX(0);
    }

}

</style>
