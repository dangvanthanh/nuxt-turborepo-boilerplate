<script setup lang="ts">
interface Props {
	name?: string
}

const props = withDefaults(defineProps<Props>(), {
	name: 'Your Name',
})

const tailwindConfig = {
	theme: {
		extend: {
			colors: {
				primary: '#0065da',
			},
		},
	},
}
</script>

<template>
  <ETailwind :config="tailwindConfig">
    <EContainer>
      <EText>Hi {{ props.name }}</EText>
      <EText>
        Invite to Nuxt Emails.
      </EText>
      <EButton class="bg-primary px-4 py-2 font-medium leading-4 text-white text-center rounded">
        Get Started
      </EButton>
    </EContainer>
  </ETailwind>
</template>
