<template>
  <template v-if="isLoading">
    <section class="wrapper">
      <p>Data is being retrieved from server</p>
    </section>
  </template>
  <template v-else>
    <section class="wrapper">
      <p v-if="isLoading">Data is being retrieved from server</p>
      <DiscProfileComponent
        :name="disc?.name"
        :image="disc?.image"
        :speed="disc?.speed"
        :glide="disc?.glide"
        :turn="disc?.turn"
        :fade="disc?.fade"
        :description="disc?.description"
        v-else
      />
    </section>
  </template>
</template>

<script setup lang="ts">
import type { Disc } from '../views/HomeView.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import DiscProfileComponent from '@/components/DiscProfileComponent.vue'

onMounted(() => {
  getDisc()
})

const route = useRoute()
const { id } = route.params

const disc = ref<Disc | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)

const errorToast = (errorMessage: string) => {
  toast(errorMessage, {
    theme: 'light',
    type: 'error',
    autoClose: 3000,
    transition: 'flip'
  })
}

const getDisc = async () => {
  const response = await fetch(`http://localhost:3000/discs/${id}`)

  if (!response.ok) {
    error.value = `Disc with ID: ${id} could not be retrieved. ${response.status}: ${response.statusText}`
    setTimeout(() => errorToast(error.value ?? 'Unknown Error'))
  } else {
    disc.value = await response.json()
    isLoading.value = false
  }
}
</script>

<style scoped>
.wrapper {
  padding: 200px 200px 150px 200px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  gap: 150px;
  padding: 25px;
}

.button-wrapper a {
  text-decoration: none;
}
</style>
