<script setup lang="ts">
const { capitalize } = useString()
const { copyToClipboard } = useClipboard()
const str = ref('hello utils!')
</script>

<template>
  <button @click="copyToClipboard(str)">
    {{ capitalize(str) }}
  </button>
</template>
