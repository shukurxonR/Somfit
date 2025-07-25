const hygraphAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
import { IBlog } from '@/types'
import { gql, request } from 'graphql-request'
import { cache } from 'react'
export const getBlog = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				author {
					name
					bio
					slug
					image {
						url
					}
				}
				category {
					name
					slug
					image {
						url
					}
				}
				tag {
					name
					slug
				}
				title
				slug
				createdAt
				description
				image {
					url
				}
			}
		}
	`
	const javob = await request<{ blogs: IBlog[] }>(hygraphAPI, query)
	return javob.blogs
}

export const getBlogBySlug = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String) {
			blog(where: { slug: $slug }) {
				author {
					name
					slug
					bio
					image {
						url
					}
				}
				image {
					url
				}
				slug
				title
				description
				createdAt
				category {
					slug
					name
					image {
						url
					}
				}
				tag {
					slug
					name
				}
				content {
					html
				}
			}
		}
	`
	const javob = await request<{ blog: IBlog }>(hygraphAPI, query, { slug })
	return javob.blog
})
