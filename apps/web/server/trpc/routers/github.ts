import request, { gql } from 'graphql-request'
import { z } from 'zod'
import { publicProcedure } from '../trpc'

type BaseRepository = {
	id: string
	name: string
	description: string
	createAt: string
	updatedAt: string
	url: string
	primaryLanguage: {
		name: string
	}
	stargazerCount: number
}

type Repository = {
	repository: BaseRepository
}

export const github = publicProcedure
	.input(z.object({ authToken: z.string().nullish() }))
	.query(async ({ input }) => {
		const endpoint = 'https://api.github.com/graphql'
		const requestHeaders = {
			Authorization: `Bearer ${input.authToken}`,
		}

		const query = gql`
      query {
        repository(owner: "radix-vue", name: "shadcn-vue") {
          id
          name
          description
          createdAt
          updatedAt
          url
          primaryLanguage {
            name
          }
          stargazerCount
        }
      }
    `
		const data = (await request(endpoint, query, requestHeaders)) as Repository

		return {
			repository: data?.repository,
		}
	})
