<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'

useHead({
	title: 'Nuxt Turborepo Boilerplate',
})

const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div class="container mx-auto py-8">
      <Welcome />
    </div>
  </ConfigProvider>
</template>