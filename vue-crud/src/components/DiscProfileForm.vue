<template>
  <form @submit.prevent="handleSubmit">
    <InputComponent type="text" label="Disc name" placeholder="Enter name" v-model="newDisc.name" />
    <InputComponent type="number" label="Speed" placeholder="Enter speed" v-model="newDisc.speed" />
    <InputComponent type="number" label="Glide" placeholder="Enter glide" v-model="newDisc.glide" />
    <InputComponent type="number" label="Turn" placeholder="Enter turn" v-model="newDisc.turn" />
    <InputComponent type="number" label="Fade" placeholder="Enter fade" v-model="newDisc.fade" />
    <!-- Need Textarea component -->
    <InputComponent type="text" label="Disc description" placeholder="Enter description" v-model="newDisc.description" :required="false"/> 
    <InputComponent type="text" label="Image URL" placeholder="Enter URL..." v-model="newDisc.image" :required="false"/>
    <div class="button-wrapper">
      <ButtonComponent label="Create" type="submit"/>
    </div>
  </form>
</template>

<script setup lang="ts" >
  import { ref } from 'vue';
  import ButtonComponent from './ButtonComponent.vue';
  import InputComponent from './InputComponent.vue';


  const emit = defineEmits(['newDiscValues'])

  const newDisc = ref({ 
      name: '', speed: '', glide: '', turn: '', fade: '', description: '', image: '',
    })

  const handleSubmit = () => {
    emit('newDiscValues', newDisc.value);
    newDisc.value = { 
        name: '', speed: '', glide: '', turn: '', fade: '', description: '', image: '',
      };
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
    justify-content: center;
  }
</style>