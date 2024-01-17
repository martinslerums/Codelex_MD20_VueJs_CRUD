<template>
    <button :type="props.type" class="button" :class="{'small': size === 'small', 'big': size === 'big'}">{{ props.label }}</button>
</template>

<script setup lang="ts">

  const props = defineProps({
    type: {
        type: String as () => 'submit' | 'button' | 'reset',
        default: 'button'
      },
    label: { type: String, required: true },
    size: { type: String, default: 'normal' },
  })

</script>

<style>
  .button {
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
}

.button:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.3s;
}

  .small {
    font-size: 12px;
    padding: 4px 14px;
  }

  .big {
    font-size: 26px;
    padding: 10px 22px;
  }
</style>
