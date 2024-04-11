<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { cn } from '@/lib/utils'
import { DrawerTrigger as UiDrawerTrigger } from 'vaul-vue'
const { theme, setTheme } = useTheme()

const themes = ref([
  { name: 'aliceblue', color: '#f0f8ff' },
  { name: 'antiquewhite', color: '#faebd7' },
  { name: 'aqua', color: '#00ffff' },
  { name: 'aquamarine', color: '#7fffd4' },
  { name: 'azure', color: '#f0ffff' },
  { name: 'beige', color: '#f5f5dc' },
  { name: 'bisque', color: '#ffe4c4 ' },
  { name: 'black', color: '#000000 ' },
  { name: 'blanchedalmond', color: '#ffffcd ' },
])
</script>

<template>
  <div :class="cn(`theme-${theme}`)">
    <UiDrawer>
      <div class="text-right m-1.5">
        <UiDrawerTrigger>
          <UiButton variant="outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-settings2 ">
              <path d="M20 7h-9"></path>
              <path d="M14 17H5"></path>
              <circle cx="17" cy="17" r="3"></circle>
              <circle cx="7" cy="7" r="3"></circle>
            </svg>
          </UiButton>
        </UiDrawerTrigger>
      </div>
      <UiDrawerContent>
        <div class="grid grid-cols-3 gap-2 p-6">
          <template v-for="theme in themes">
            <UiButton variant="outline" class="text-left" @click.prevent="setTheme(theme.name)">
              <span class="inline-flex w-3.5 h-3.5 rounded-full" :style="`background: ${theme.color}`"></span>
              <span class="capitalize pl-2">{{ theme.name }}</span>
            </UiButton>
          </template>
        </div>
      </UiDrawerContent>
    </UiDrawer>
    <slot />
  </div>
</template>
