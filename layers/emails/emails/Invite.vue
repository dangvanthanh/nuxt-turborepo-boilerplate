<script setup lang="ts">
interface Props {
  name?: string
  company?: string
  url?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'Your Name',
  company: 'Your Company',
  url: 'https://github.com/dangvanthanh/nuxt-turborepo-boilerplate',
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
        Wecome to {{ props.company }}! Click the button below to activate your account:
      </EText>
      <EText>
        Click this link to <ELink :href="props.url">Activate account</ELink>
      </EText>
      <EText>
        Thank you.
      </EText>
      <EText>
        The Team.
      </EText>
      <EHr />
    </EContainer>
  </ETailwind>
</template>
