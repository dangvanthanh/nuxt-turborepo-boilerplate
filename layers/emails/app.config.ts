export default defineAppConfig({
	myLayer: {
		name: 'Emails Layer',
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
