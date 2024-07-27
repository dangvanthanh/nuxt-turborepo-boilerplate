export default defineAppConfig({
	myLayer: {
		name: 'Utils Layer',
	},
})

declare module '@nuxt/schema' {
	interface AppConfigInput {
		myLayer?: {
			/** Project name */
			name?: string
		}
	}
}
