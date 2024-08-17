import { createNuxtApiHandler } from 'trpc-nuxt'
import { createContext } from '~~/server/trpc/context'
import { appRouter } from '~~/server/trpc/routers'

export default createNuxtApiHandler({
	router: appRouter,
	createContext,
})
