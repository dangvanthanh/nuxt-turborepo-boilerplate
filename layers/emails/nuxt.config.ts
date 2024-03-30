// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	extends: ['@repo/ui'],
	modules: ['@vue-email/nuxt'],
	vueEmail: {
		autoImport: true,
	},
	nitro: {
		esbuild: {
			options: {
				target: 'esnext',
			},
		},
	},
})
