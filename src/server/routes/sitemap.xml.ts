import sanityClient from '@sanity/client'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Sitemap_Q } from '~~/src/assets/queries'
import { Sitemap } from '~~/src/assets/types'

export default defineEventHandler(async event => {

	const client = sanityClient({
		projectId: useSanity().config.projectId,
		dataset: 'production',
		apiVersion: '2022-11-21',
		useCdn: true,
	})
	// fetch data
	const fetchData: Sitemap[] = await client.fetch(Sitemap_Q)

	const sitemap = new SitemapStream({ hostname: 'https://martcube.netlify.app/' })
	fetchData.forEach(route => {
		sitemap.write({
			url: route.url,
			changefreq: route.changefreq,
			priority: route.priority,
			lastmod: route.lastmod,
		})
	})
	sitemap.end()

	setHeader(event, 'content-type', 'application/xml')
	return streamToPromise(sitemap)
})
