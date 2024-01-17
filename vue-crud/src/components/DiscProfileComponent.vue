<template>
  <template v-if="route.fullPath === '/'">
    <div class="disc-info">
      <img :src="image" alt="Disc Image" class="disc-image" />
      <h2>{{ name.toUpperCase() }}</h2>
      <div class="statistics">
        <p>{{speed}} / {{ glide }}  / {{ turn }}  / {{ fade }}</p>
      </div>
      <slot></slot>
    </div>
  </template>
  <template v-else>    
    <div class="details">
      <div class="disc-image-details" >
        <img :src="image" alt="Disc Image"/>
      </div>
      <div class="disc-info-details">
        <div class="details-wrapper">
          <RouterLink :to="{ name: 'edit', params: { id: id } }" >
            <h1>{{ name }}<img src="../assets/edit-icon2.svg" alt="Edit Icon" width="50"></h1> 
          </RouterLink>
          <div class="flight-numbers" >
            <p>Speed: {{ speed }}</p>
            <p>Glide: {{ glide }}</p>
            <p>Turn: {{ turn }}</p>
            <p>Fade: {{ fade }}</p>
          </div>
          <div class="description">
            <h3>Description:</h3>
            <p class="description-details">{{ description }}</p>
          </div>
        </div>

      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { RouterLink } from 'vue-router';



  defineProps(['name', 'image', 'speed', 'glide', 'turn', 'fade', 'description', 'id']);
  const route = useRoute()

</script>

<style scoped>
.disc-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 25px;
  max-width: 320px;
  transition: transform 0.4s ease-in-out;
}

.disc-info:hover {
 transform: scale(1.15);
}

.disc-info h2 {
  font-size: 38px;
}

.disc-image {
  aspect-ratio: 1;
  width: 100%;
  margin-bottom: 40px;
}

.statistics {
  display: flex;
  flex-direction: column;
  padding: 0px 25px;
}

.statistics p {
 font-size: 20px;
 font-weight: bold;
 padding-left: 5px;
}

/* DETAILS VIEW */
.details {
  display: grid;
  grid-template-columns: repeat(2, 4fr);
}

.disc-image-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.disc-image-details img {
  aspect-ratio: 1;
  width: 100%;
}

.disc-info-details {
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.disc-info-details h1 {
  text-align: center;
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 25px;
  color: black;
}
.disc-info-details a {
  text-decoration: none;
}
.flight-numbers {
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: center;
  gap: 20px;
}

.flight-numbers p {
  background-color: #99999e;
  padding: 5px 10px;
  border-radius: 6px;
  font-weight: bold;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.description-details {
  font-size: 22px;
  text-align: left;
}

@media (max-width: 992px) {
  .details {
    grid-template-columns: 1fr;
  }

  .details { 
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 772px) {
  .flight-numbers{
    grid-template-columns: repeat(2, 85px);
  }
}

@media (max-width: 575px) {
  .flight-numbers{
    grid-template-columns: 85px;
  }
}
</style>
