// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	extends: ['@repo/emails', '@repo/ui'],
	modules: ['@nuxtjs/color-mode'],
	colorMode: {
		preference: 'light',
		classSuffix: '',
	},
	runtimeConfig: {
		githubToken: process.env.GITHUB_TOKEN,
	},
})