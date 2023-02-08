import type { metaTags } from "~~/src/assets/types";
import imageUrlBuilder from '@sanity/image-url'

export default (data: metaTags) => {

	const { fullPath } = useRoute()
	const { locale, setLocale, t } = useI18n()

	const builder = imageUrlBuilder({
		projectId: 'ede4uk6z',
		dataset: "production",
	})
	// freewayua.com
	const domain = "https://main-action.netlify.app"
	const ogImage = data.image ? builder.image(data.image).auto('format').width(1200).height(630).url() : ''
	const url = domain + fullPath
	const ogType = useRoute().params.article ? "article" : "website"
	// const robots = useRoute().params.article ? "index, nofollow" : "index, follow"
	const alter = computed( () => { 
		return useRoute().params.article ? 
		{ // alernative language type article
			hid: 'alternate', 
			rel: 'alternate', 
			href: `${domain}/${data.alterLang?.id === 'ua' ? '/' : 'en/'}${data.alterLang?.id === 'ua' ? 'novunu/' : 'blog/'}${data.alterLang?.uid}/`, 
			hreflang: data.alterLang?.id 
		} :
		{ // alernative language type page
			hid: 'alternate', 
			rel: 'alternate', 
			href: `${domain}/${data.alterLang?.id === 'ua' ? '/' : 'en/'}${data.alterLang?.uid}/`, 
			hreflang: data.alterLang?.id
		}
	})			

	useHead({
		title: data.title,
		htmlAttrs: { lang: locale.value },
		link: [
			alter,
			{ hid: 'alternate', rel: 'alternate', href: url, hreflang: 'x-default' },
		],
		meta: [
			{ "charset": "utf-8" },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			// { name: "author", content: "Mart Cube" },
			{ name: 'title', content: data.title },
			{ name: 'description', content: data.description },
			{ name: 'robots', content: 'all' },
			// og
			{ property: 'og:locale', content: 'en_US', },
			// { property: "og:locale:alternate", content: "fr_FR" },
			{ property: 'og:type', content: ogType, },
			{ property: 'og:title', content: data.title, },
			{ property: 'og:description', content: data.description, },
			{ property: 'og:image', content: ogImage ?? '', },
			{ property: 'og:image:alt', content: data.title, },
			{ property: 'og:url', content: url, },
			// twitter
			{ name: "twitter:title", content: data.title },
			{ name: "twitter:description", content: data.description },
			{ name: "twitter:image", content: ogImage ?? '' },
			{ name: "twitter:image:alt", content: data.title },
			{ property: 'twitter:url', content: url, },
		],
	})
}