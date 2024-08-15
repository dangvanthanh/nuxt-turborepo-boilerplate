import { router } from '../trpc'

import { hello } from './hello'
import { repository } from './repository'

export const appRouter = router({
	hello,
	repository,
})

export type AppRouter = typeof appRouter
