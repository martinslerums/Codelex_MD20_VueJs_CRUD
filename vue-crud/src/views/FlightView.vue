<template>
  <section class="section">
    <div v-for="flighttype in flightTypes" :key="flighttype.id" class="container"> 
      <div class="asd">
        <FlightComponent 
          :type="flighttype.type"
          :description="flighttype.description"
          :min="flighttype.min"
          :max="flighttype.max"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import FlightComponent from '@/components/FlightComponent.vue';

  const flightTypes = [
    { 
      id: '1',
      min: '1',
      max: '14',
      type: 'Speed',
      description: 'Speed is the rate at which a disc can travel through the air. Faster discs cut into the wind with less effort and are best when throwing upwind. Slower discs take more power to throw upwind, but they’re easier to throw more accurately and may actually go farther downwind. High-speed discs are not recommended for beginners as they require more power to fly properly.'
    },
    {
      id: '2',
      min: '1',
      max: '7',
      type: 'Glide',
      description: 'Glide describes the disc\'s ability to maintain loft during flight. Discs with more glide are best for new players and for producing maximum distance. Beginners wanting more distance should choose discs with more glide. Discs with less glide are more accurate in high wind situations.'
    },
    {
      id: '3',
      min: '-5',
      max: '1',
      type: 'Turn',
      description: 'High Speed Turn is the tendency of a disc to turn over or bank to the right (for RHBH throws) during the initial part of the flight. Discs rated -3 to -5 make good roller discs. Discs with less turn are more accurate in the wind. Discs with more turn are easier to throw for beginners.'
    },
    {
      id: '4',
      min: '0',
      max: '5',
      type: 'Fade',
      description: 'Low Speed Fade is the disc\'s tendency to hook left (for RHBH throws) at the end of the flight. Fade is rated from 0 to 5. A disc rated 0 will finish straightest, while a disc rated 5 will hook hard at the end of the flight. High fade discs are usually used for Spike and Skip shots.'
    }
  ];

</script>

<style scoped>
  .section {
    display: grid;
    grid-template-columns: repeat(2, 300px);
    padding: 200px 100px 150px 100px;
    justify-content: center;
  }

  .container {
    display: flex;
    align-items: stretch; 
  }

  .container:nth-child(1),
  .container:nth-child(3) {
    display: flex;
    justify-content: flex-end;
  }

  .container:nth-child(1) {
    background-color: greenyellow;
    opacity: 0.7;
  }
  .container:nth-child(2) {
    background-color: pink;
    opacity: 0.7;
  }
  .container:nth-child(3) {
    background-color: cyan;
    opacity: 0.7;
  }
  .container:nth-child(4) {
    background-color: orange;
    opacity: 0.7;
  }

</style>