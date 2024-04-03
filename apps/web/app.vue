<script setup lang="ts">
import { Coffee, Monitor, Moon, Sun } from 'lucide-vue-next'
import { ConfigProvider } from 'radix-vue'

useHead({
	title: 'Nuxt Turborepo Boilerplate',
})

const colorMode = useColorMode()
const useIdFunction = () => useId()
const colors = ref([
	{ name: 'system', icon: Monitor },
	{ name: 'light', icon: Sun },
	{ name: 'dark', icon: Moon },
	{ name: 'sepia', icon: Coffee },
])
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div class="container mx-auto pt-8">
      <div class="flex justify-center gap-2">
        <template v-for="color in colors" :key="color.name">
          <UiButton variant="outline" :disabled="colorMode.preference === color.name"
            @click="colorMode.preference = color.name">
            <component :is="color.icon" />
          </UiButton>
        </template>
      </div>
    </div>
    <div class="container mx-auto">
      <Welcome />
    </div>
  </ConfigProvider>
</template>

<style>
body {
  transition: background 2s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>