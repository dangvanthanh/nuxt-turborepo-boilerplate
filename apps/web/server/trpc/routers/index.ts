import { router } from '../trpc'

import { github } from './github'
import { hello } from './hello'

export const appRouter = router({
	hello,
	github,
})

export type AppRouter = typeof appRouter
