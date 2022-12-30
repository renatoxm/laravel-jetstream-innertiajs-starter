<template>
  <button :type="type" class="btn btn-secondary">
    <slot />
  </button>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
})
</script>
