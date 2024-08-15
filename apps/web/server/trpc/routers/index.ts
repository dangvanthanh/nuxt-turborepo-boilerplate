import { router } from '../trpc'

import { github } from './git'
import { hello } from './hello'

export const appRouter = router({
	hello,
	github,
})

export type AppRouter = typeof appRouter
