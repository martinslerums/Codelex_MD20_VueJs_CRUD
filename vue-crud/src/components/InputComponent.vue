<template>
  <div class="input-wrap">
    <label v-if="label" class="input-label" >{{ label }}
    <input 
      class="input-field"
      :type='props.type' 
      :placeholder="placeholder" 
      :value="modelValue" 
      :required="required"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    </label>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    type: { 
      type: String as () => HTMLInputElement['type'], 
      default: 'text' 
    },
    placeholder: { type: String, required: false },
    label: { type: [String, Boolean], default: false },
    modelValue: { type: [String, Number], default: ''}, 
    required: {type: Boolean, default: true}
  });

</script>

<style>
  .input-wrap {
    margin-bottom: 20px;
  }

  .input-label {
    display: block;
    font-weight: bold;
  }

  .input-field {
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-bottom: 1px solid grey;
    border-radius: 4px;
    font-size: 14px; 
  }
</style>