import { useCompiler } from '#vue-email'

export default defineEventHandler(async (event) => {
	try {
		const id = event.context?.params?.id
		const template = await useCompiler(id || '')

		return template
	} catch (error) {
		return { error }
	}
})
