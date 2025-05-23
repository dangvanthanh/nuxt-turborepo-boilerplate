// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	future: {
		// New directory structure
		// https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
		compatibilityVersion: 4,
	},
	compatibilityDate: '2024-07-21',
	build: { transpile: ['trpc-nuxt'] },
	modules: ['nuxt-auth-utils', '@nuxtjs/color-mode'],
	colorMode: {
		preference: 'light',
		classSuffix: '',
	},
	extends: ['@repo/emails', '@repo/ui'],
	runtimeConfig: {
		public: {
			githubToken: process.env.PUBLIC_GITHUB_TOKEN,
		},
		oauth: {
			github: {
				clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
				clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
			},
		},
	},
})
