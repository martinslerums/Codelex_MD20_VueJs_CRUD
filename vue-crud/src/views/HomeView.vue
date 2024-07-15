<template>
    <section class="section">
      <div v-for="disc in discs" :key="disc.id" > 
        <RouterLink :to="{ name: 'details', params: { id: disc.id } }" class="links" > 
          <DiscProfileComponent
            :id="disc.id"
            :name="disc.name"
            :image="disc.image"
            :speed="disc.speed"
            :glide="disc.glide"
            :turn="disc.turn"
            :fade="disc.fade"
            :description="disc.description"
          />
        </RouterLink>
      </div>
    </section>
</template>

<script setup lang="ts">
  import DiscProfileComponent from '../components/DiscProfileComponent.vue'
  import { RouterLink } from 'vue-router';
  import { ref, onMounted } from 'vue';

  export type Disc = {
    id?: number;
    name: string;
    image: string;
    speed: number
    glide: number
    turn: number
    fade: number,
    description: string
  };

  const discs = ref<Disc[]>([]);

  const getDiscs = async() => {
    const response = await fetch('http://localhost:3000/discs');
    discs.value = await response.json()
  }
  
  onMounted(async () => {
    getDiscs();
  });


</script>

<style scoped>

.section {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 200px 100px 150px 100px;
}

.links {
  text-decoration: none;
  text-align: center;
  color: black;
}

@media (max-width: 575px) {
  .section {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 576px) {
  .section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .section {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 992px) {
  .section {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1200px) {
  .section {
    grid-template-columns: repeat(5, 1fr);
  }
}

</style>

