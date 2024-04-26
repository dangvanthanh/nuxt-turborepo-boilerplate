<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { cn } from '@/lib/utils'
import { Moon, Palette, Sun } from 'lucide-vue-next'
import { ConfigProvider } from 'radix-vue'

useHead({
  title: 'Nuxt Turborepo Boilerplate',
})

const useIdFunction = () => useId()
const { theme, setTheme } = useTheme()
const colorMode = useColorMode()
const themes = ref([
  { name: 'light', icon: Sun },
  { name: 'dark', icon: Moon },
])
const colors = ref([
  { name: 'zinc', color: '#3f3f46' },
  { name: 'rose', color: '#be123c' },
  { name: 'blue', color: '#1d4ed8' },
  { name: 'green', color: '#15803d' },
  { name: 'orange', color: '#c2410c' },
  { name: 'red', color: '#b91c1c' },
  { name: 'slate', color: '#334155 ' },
  { name: 'stone', color: '#44403c ' },
  { name: 'gray', color: '#374151 ' },
  { name: 'neutral', color: '#404040 ' },
  { name: 'yellow', color: '#a16207 ' },
  { name: 'violet', color: '#6d28d9 ' },
])
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div :class="cn(`theme-${theme}`)">
      <div class="container mx-auto pt-8">
        <div class="flex items-center justify-center gap-2">
          <template v-for="color in colors.slice(0, 5)" :key="color.name">
            <UiButton variant="outline"
              :class="cn('w-8 h-8 p-0 rounded-full', theme === color.name ? 'border-4 border-black' : '')"
              @click.prevent="setTheme(color.name)">
              <span class="w-5 h-5 rounded-full" :style="`background: ${color.color}`"></span>
            </UiButton>
          </template>
          <UiPopover>
            <UiPopoverTrigger as-child>
              <UiButton variant="outline">
                <Palette class="size-4 mr-2" />
                <span>Customize</span>
              </UiButton>
            </UiPopoverTrigger>
            <UiPopoverContent class="w-100">
              <div class="grid gap-4">
                <div class="space-y-2">
                  <h4 class="font-medium leading-none">
                    Customize
                  </h4>
                  <p class="text-sm text-muted-foreground">
                    Pick a style and color for your components.
                  </p>
                </div>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                    <UiLabel for="color">Color</UiLabel>
                    <div class="grid grid-cols-3 gap-2 py-1.5">
                      <template v-for="color in colors" :key="color.name">
                        <UiButton variant="outline"
                          :class="cn('py-2 h-8 justify-start', theme === color.name ? 'border-2 border-black' : '')"
                          @click.prevent="setTheme(color.name)">
                          <span class="w-4 h-4 rounded-full mr-2" :style="`background: ${color.color}`"></span>
                          <span class="capitalize text-xs">{{ color.name }}</span>
                        </UiButton>
                      </template>
                    </div>
                  </div>
                  <div class="flex flex-col gap-4">
                    <UiLabel for="maxHeight">Theme</UiLabel>
                    <div class="flex space-x-2 py-1.5">
                      <template v-for="t in themes" :key="t.name">
                        <UiButton variant="outline" class="py-2 h-8" :disabled="colorMode.preference === t.name"
                          @click="colorMode.preference = t.name">
                          <component :is="t.icon" class="size-4 mr-2" />
                          <span class="capitalize">{{ t.name }}</span>
                        </UiButton>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </UiPopoverContent>
          </UiPopover>
        </div>
      </div>
      <div class="container mx-auto">
        <Welcome />
      </div>
    </div>
  </ConfigProvider>
</template>

<style>
body {
  transition: background 2s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>