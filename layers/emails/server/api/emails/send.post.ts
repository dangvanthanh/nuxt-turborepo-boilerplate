import { Resend } from 'resend'
import { useCompiler } from '#vue-email'

const resend = new Resend(process.env.NUXT_RESEND_API_KEY || 're_123')

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event)
		const template = await useCompiler(body.filename)
		const options = {
			from: 'Acme <onboarding@resend.dev>',
			to: [body.recipient],
			subject: body.subject,
			html: template.html,
		}

		await resend.emails.send(options)
	} catch (error) {
		return { error }
	}
})
