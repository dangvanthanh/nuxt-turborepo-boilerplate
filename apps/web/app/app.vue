<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { cn } from '@/lib/utils'
import { LogOut, Moon, Palette, Sun } from 'lucide-vue-next'
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
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div :class="cn(`theme-${theme}`)">
      <div class="container mx-auto pt-8">
        <div class="flex items-center justify-center gap-2">
          <template v-for="color in colors.slice(0, 5)" :key="color.name">
            <UiButton variant="outline" :class="cn(
              'w-8 h-8 p-0 rounded-full',
              theme === color.name ? 'border-4 border-black' : '',
            )" @click.prevent="setTheme(color.name)">
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
                        <UiButton variant="outline" :class="cn(
                          'py-2 h-8 justify-start',
                          theme === color.name ? 'border-2 border-black' : '',
                        )" @click.prevent="setTheme(color.name)">
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
          <template v-if="loggedIn">
            <UiButton @click="clear">
              <LogOut class="size-4" />
            </UiButton>
          </template>
          <template v-else>
            <a href="/auth/github">
              <UiButton>
                <svg class="w-4 h-4" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </UiButton>
            </a>
          </template>
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