<script setup lang="ts">
interface Props {
	name?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'Your Name',
})
</script>

<template>
  <ETailwind>
    <EContainer>
      <EText>Hi {{ props.name }}</EText>
      <EText>
        Welcome to Nuxt Turbo Boilerplate
      </EText>
    </EContainer>
  </ETailwind>
</template>
