<template>
  <section class="wrapper">
    <DiscProfileForm @newDiscValues="createDisc" />
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  import DiscProfileForm from '@/components/DiscProfileForm.vue';
  import { successToast, errorToast } from '@/utils/toasts/toasts';

  import type { Disc } from './HomeView.vue';
  
  const router = useRouter()

  const error = ref<string | null>(null);


  const createDisc = async (newDisc: Disc) => {
    const response = await fetch('http://localhost:3000/discs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDisc),
    });

    if (!response.ok) {
      error.value = `Error encountered ${response.status}: ${response.statusText}`;
      setTimeout(() => errorToast(error.value ?? "Unknown Error"));
    } else {
      router.push('/')
      setTimeout(() => successToast())
    }
  };

</script>

<style scoped>
  .wrapper {
    padding: 120px 90px 50px 90px;
  }
</style>

