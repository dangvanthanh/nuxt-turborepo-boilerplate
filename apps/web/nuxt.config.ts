// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	future: {
		// New directory structure
		// https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
		compatibilityVersion: 4,
	},
	devtools: { enabled: true },
	extends: ['@repo/emails', '@repo/ui'],
	modules: ['@nuxtjs/color-mode'],
	colorMode: {
		preference: 'light',
		classSuffix: '',
	},
	runtimeConfig: {
		public: {
			githubToken: process.env.PUBLIC_GITHUB_TOKEN,
		},
	},
})
