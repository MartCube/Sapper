import type { metaTags } from "~~/src/assets/types";
import imageUrlBuilder from '@sanity/image-url'

export default (data: metaTags) => {

	const { fullPath } = useRoute()
	const builder = imageUrlBuilder({
		projectId: useSanity().config.projectId,
		dataset: "production",
	})

	const ogImage = builder.image(data.image).auto('format').width(1200).height(630).url()
	const url = `https://martcube.netlify.app${fullPath}`
	const ogType = useRoute().params.article ? "article" : "website"
	const robots = useRoute().params.article ? "index, nofollow" : "index, follow"

	useHead({
		title: data.title,
		htmlAttrs: { lang: 'en' },

		meta: [
			{ "charset": "utf-8" },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "author", content: "Mart Cube" },
			{ name: 'title', content: data.title },
			{ name: 'description', content: data.description },
			{ name: 'robots', content: robots },
			// og
			{ property: 'og:locale', content: 'en_US', },
			// { property: "og:locale:alternate", content: "fr_FR" },
			{ property: 'og:type', content: ogType, },
			{ property: 'og:title', content: data.title, },
			{ property: 'og:description', content: data.description, },
			{ property: 'og:image', content: ogImage, },
			{ property: 'og:image:alt', content: data.title, },
			{ property: 'og:url', content: url, },
			// twitter
			{ name: "twitter:title", content: data.title },
			{ name: "twitter:description", content: data.description },
			{ name: "twitter:image", content: ogImage },
			{ name: "twitter:image:alt", content: data.title },
			{ property: 'twitter:url', content: url, },
		],
	})
}