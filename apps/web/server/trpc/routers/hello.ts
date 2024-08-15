import { z } from 'zod'
import { publicProcedure } from '../trpc'

export const hello = publicProcedure
	.input(z.object({ text: z.string().nullish() }))
	.query(({ input }) => {
		return {
			title: input.text,
		}
	})
