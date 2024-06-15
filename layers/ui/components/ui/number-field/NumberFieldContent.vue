<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
	class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('relative', props.class)">
    <slot />
  </div>
</template>
