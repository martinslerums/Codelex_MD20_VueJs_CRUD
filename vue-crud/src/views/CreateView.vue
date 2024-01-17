<template>
  <section class="wrapper">
    <DiscProfileForm @newDiscValues="createDisc" />
  </section>
</template>

<script setup lang="ts">
  import type { Disc } from './HomeView.vue';
  import { useRouter } from 'vue-router';
  import { toast } from 'vue3-toastify';
  import { ref } from 'vue';
  import 'vue3-toastify/dist/index.css';
  import DiscProfileForm from '@/components/DiscProfileForm.vue';

  const router = useRouter()

  const error = ref<string | null>(null);

  const successToast = () => {
    toast("Disc created", {
      theme: "light",
      type: "success",
      autoClose: 3000,
      transition: "flip"
    }); 
  }

  const errorToast = (errorMessage: string) => {
    toast( errorMessage, {
      theme: "light",
      type: "error",
      autoClose: 3000,
      transition: "flip"
    }); 
  }

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

