<script setup lang="ts">
import type { Repository } from '~~/server/trpc/routers/repository'

const { $trpcClient } = useNuxtApp()
const config = useRuntimeConfig()
const authToken = config.public.githubToken

const repo = ref<Repository | null>()

onMounted(() => {
  getRepository()
})

async function getRepository() {
  try {
    const { data: repository } = await $trpcClient.repository.useQuery({
      authToken,
    })
    repo.value = repository.value
  } catch {
    repo.value = null
  }
}
</script>

<template>
  <UiCard v-if="repo">
    <UiCardHeader class=" grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <UiCardTitle class="text-lg">{{ repo?.repository.name }}</UiCardTitle>
        <UiCardDescription>
          {{ repo?.repository.description }}
        </UiCardDescription>
      </div>
      <div class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
        <UiButton variant="secondary" class="px-3 shadow-none">
          <IconStar class="mr-2 h-4 w-4" />
          Star
        </UiButton>
        <UiSeparator orientation="vertical" class="h-5" />
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="secondary" class="px-2 shadow-none">
              <IconChevronDown class="h-4 w-4 text-secondary-foreground" />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent align="end" :align-offset="-5" class="w-[200px]">
            <UiDropdownMenuLabel>Suggested Lists</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuCheckboxItem checked>
              Future Ideas
            </UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>My Stack</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>Inspiration</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>
              <IconPlus class="mr-2 h-4 w-4" />
              Create List
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center">
          <IconCircle class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          {{ repo?.repository.primaryLanguage?.name }}
        </div>
        <div class="flex items-center">
          <IconStar class="mr-1 h-3 w-3" />
          {{ repo?.repository.stargazerCount }}
        </div>
        <div>Updated {{ new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new
          Date(repo?.repository.updatedAt)) }}</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>