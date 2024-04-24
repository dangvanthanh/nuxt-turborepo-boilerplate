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
      <EButton class="bg-primary px-4 py-2 font-medium leading-4 text-white text-center rounded-full">
        Activate Account
      </EButton>
      <EText>
        Button not working? Use this link instead <ELink :href="props.url">Activate account</ELink>
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
