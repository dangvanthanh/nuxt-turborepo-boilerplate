<script setup lang="ts">
interface Props {
  name?: string
  company?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Your Name',
  company: 'Your Company',
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
      <EText>Dear {{ props.name }}</EText>
      <EText>
        Welcome to {{ props.company }}
      </EText>
      <EText>
        Thank you for starting your of {{ props.company }} membership.
      </EText>
      <EButton class="bg-primary px-4 py-2 font-medium leading-4 text-white text-center rounded-full">
        Get Started
      </EButton>
      <EText>
        Best,
      </EText>
      <EText>
        The Team
      </EText>
      <EHr />
    </EContainer>
  </ETailwind>
</template>
