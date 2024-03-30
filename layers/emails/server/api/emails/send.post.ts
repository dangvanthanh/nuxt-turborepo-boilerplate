import { Resend } from 'resend'
import { useCompiler } from '#vue-email'

const resend = new Resend(process.env.NUXT_RESEND_API_KEY || 're_123')

export default defineEventHandler(async () => {
	try {
		const template = await useCompiler('Welcome.vue')
		const options = {
			from: 'Acme <onboarding@resend.dev>',
			to: [''],
			subject: 'Welcome',
			html: template.html,
		}

		await resend.emails.send(options)
	} catch (error) {
		return { error }
	}
})
