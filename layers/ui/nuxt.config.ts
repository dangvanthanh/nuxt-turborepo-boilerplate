import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
	css: [
		resolve('./assets/css/tailwind.css'),
		resolve('./assets/css/theme.css'),
	],
	alias: {
		'@': resolve('./'),
		'~': resolve('./'),
	},
})
