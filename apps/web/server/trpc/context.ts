import type { inferAsyncReturnType } from '@trpc/server'

export const createContext = () => ({})

export type Context = inferAsyncReturnType<typeof createContext>
