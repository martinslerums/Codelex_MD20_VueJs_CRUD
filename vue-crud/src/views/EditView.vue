<template>
  <section class="container">
    <form @submit.prevent="editDisc">
      <InputComponent type="text" label="Name" placeholder="Enter name" v-model="editedDisc.name" />
      <InputComponent type="number" label="Speed" placeholder="Enter speed" v-model="editedDisc.speed" />
      <InputComponent type="number" label="Glide" placeholder="Enter glide" v-model="editedDisc.glide" />
      <InputComponent type="number" label="Turn" placeholder="Enter turn" v-model="editedDisc.turn" />
      <InputComponent type="number" label="Fade" placeholder="Enter fade" v-model="editedDisc.fade" />
      <InputComponent type="text" label="Description" placeholder="Enter description" v-model="editedDisc.description" />
      <InputComponent type="text" label="Image URL" placeholder="Provide URL..." v-model="editedDisc.image" />
      <div class="button-wrapper">
        <ButtonComponent label="Cancel" type="button" @click="router.back()"/>
        <ButtonComponent label="Edit" type="submit" />
        <ButtonComponent label="Delete" type="button" @click="deleteDisc" />
      </div>
    </form> 
  </section>
</template>

<script setup lang="ts">
  import type { Disc } from '../views/HomeView.vue'
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';

  onMounted(() => {
    getDisc(); 
  });

  const route = useRoute()
  const router = useRouter()
  
  const { id } = route.params;

  const disc = ref<Disc | null>(null);
  const error = ref<string | null>(null);

  const successToast = (text: string, type: 'success' | 'warning' | 'error' | 'default' ) => {
    toast(text, {
      theme: "light",
      type: type,
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

  const getDisc = async () => {
    const response = await fetch(`http://localhost:3000/discs/${id}`);

    if (!response.ok) {
      error.value = `Disc with ID: ${id} could not be retrieved. ${response.status}: ${response.statusText}`;
      setTimeout(() => errorToast(error.value ?? "Unknown Error"));
    } else {
      disc.value = await response.json();
    }

    if (disc.value !== null) {
      editedDisc.value = {
      name: disc.value.name,
      image: disc.value.image,
      speed: disc.value.speed,
      glide: disc.value.glide,
      turn: disc.value.turn,
      fade: disc.value.fade,
      description: disc.value.description,
      };
    }
    // console.log("EditView: ", editedDisc.value)
  }

  const editedDisc = ref<Disc>({
      name: '', image: '', speed: 0, glide: 0, turn: 0, fade: 0, description: ''
    });

  const editDisc = async () => {
    const response = await fetch(`http://localhost:3000/discs/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedDisc.value),
    })

    if (!response.ok) {
        error.value = `Error encountered while editing disc ${response.status}: ${response.statusText}`;
        setTimeout(() => errorToast(error.value ?? "Unknown Error"));
      } else {
        router.push(`/${id}`)
        setTimeout(() => successToast("Disc information edited successfully", "success"))
      }
  }

  const deleteDisc = async () => {
      const response = await fetch(`http://localhost:3000/discs/${id}`, {
          method: "DELETE",
          headers: { 'Content-Type': 'application/json' },
        });

      if (!response.ok) {
          error.value = `Error encountered ${response.status}: ${response.statusText}`;
          setTimeout(() => errorToast(error.value ?? "Unknown Error"));
      } else {
          router.push('/');
          setTimeout(() => successToast("Disc information deleted successfully", "warning"));
      }
  
  }


</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    padding: 150px 0;
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
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 1rem;
    letter-spacing: 1px;
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

  .button-wrapper{
    display: flex;
    justify-content: space-around;
  }
</style>

