<template>
  <section class="container">
    <form @submit.prevent="editDisc">
      <InputComponent type="text" label="Name" placeholder="Name" v-model="editedDisc.name" />
      <label> Disc values: Speed Glide Turn Fade</label>
      <div class="values">
        <InputComponent type="number" placeholder="Speed" v-model="editedDisc.speed" />
        <InputComponent type="number" placeholder="Glide" v-model="editedDisc.glide" />
        <InputComponent type="number" placeholder="Turn" v-model="editedDisc.turn" />
        <InputComponent type="number" placeholder="Fade" v-model="editedDisc.fade" />
      </div>
      <InputComponent
        type="text"
        label="Description"
        placeholder="Description"
        v-model="editedDisc.description"
      />
      <InputComponent
        type="text"
        label="Image URL"
        placeholder="Image URL"
        v-model="editedDisc.image"
      />
      <div class="button-wrapper">
        <ButtonComponent label="Cancel" type="button" @click="router.back()" />
        <ButtonComponent label="Edit" type="submit" :disabled="isSubmitting" />
        <ButtonComponent label="Delete" type="button" @click="deleteDisc" />
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ButtonComponent from '@/components/ButtonComponent.vue'
import InputComponent from '@/components/InputComponent.vue'

import { showError } from '@/utils/toasts/showError'
import { successToast, errorToast } from '@/utils/toasts/toasts'

import type { Disc } from '@/views/HomeView.vue'
import { fetchDisc } from '@/services/api/apiServices'


onMounted(() => {
  getDisc()
})

const router = useRouter()
const route = useRoute()

const { id } = route.params as { id: string };

const errorMessage = ref<string | null>(null)
const isSubmitting = ref(false)
const disc = ref<Disc | null>(null)

const editedDisc = ref<Disc>({
  name: '',
  image: '',
  speed: 0,
  glide: 0,
  turn: 0,
  fade: 0,
  description: ''
})

const getDisc = async () => {
  disc.value = await fetchDisc(id, errorMessage);
  if (disc.value !== null) {
    editedDisc.value = { ...disc.value };
  }
};

const editDisc = async () => {
  try {
    isSubmitting.value = true
    const response = await fetch(`http://localhost:3000/discs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedDisc.value)
    })

    if (response.ok) {
      router.push('/')
      setTimeout(() => successToast('Disc information edited successfully'))
    } else {
      errorMessage.value = `Error encountered ${response.status}: ${response.statusText}`
      setTimeout(() => errorToast(errorMessage.value ?? 'Unknown Error'))
    }
  } catch (networkError) {
    showError(networkError, errorMessage)
  } finally {
    isSubmitting.value = false
  }
}

const deleteDisc = async () => {
  try {
    const response = await fetch(`http://localhost:3000/discs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      router.push('/')
      setTimeout(() => successToast('Disc information deleted successfully'))
    } else {
      errorMessage.value = `Error encountered ${response.status}: ${response.statusText}`
      setTimeout(() => errorToast(errorMessage.value ?? 'Unknown Error'))
    }
  } catch (networkError) {
    showError(networkError, errorMessage)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 150px 0;
}

.values {
  display: flex;
  gap: 2.5px;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.button-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
