import { Resend } from 'resend'
import { useCompiler } from '#vue-email'

const resend = new Resend(process.env.NUXT_RESEND_API_KEY)

export default defineEventHandler(async () => {
	try {
		const template = await useCompiler('Welcome.vue')
		const options = {
			from: 'Your <contact@yoursite.com>',
			to: [''],
			subject: 'Hello world',
			html: template.html,
		}

		await resend.emails.send(options)
	} catch (error) {
		return { error }
	}
})
