import { defineNuxtConfig } from 'nuxt/config'
import sanityClient from '@sanity/client'

export const getRoutes = async () => {
	const client = sanityClient({
		projectId: process.env.SANITY_ID,
		dataset: process.env.SANITY_DATASET,
		apiVersion: '2022-11-21',
		useCdn: true,
	})

	const data = await client.fetch(`[
		...*[_type == "article"]{"route": "/blog/" + uid.current + "/"},
		...*[_type == "page"]{"route": "/" + uid.current + "/"}
	]`)


	return data.map((item: any) => { return item["route"] })
}

export default defineNuxtConfig({

	srcDir: 'src',
	typescript: { strict: true, typeCheck: true, shim: false },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
		}
	},
	css: [
		"@/assets/css/main.scss"
	],

	modules: [
		'nuxt-icon',
		'@nuxtjs/sanity',
		'@pinia/nuxt',
		'@nuxt/image-edge',
		'@nuxtjs/i18n',
		'~/modules/style-inlining'
	],

	icon: {
		// https://icones.js.org/collection/ri
		size: '24px',
		class: 'icon',
	},

	i18n: {
		locales: [
			{
				code: 'ua',
				name: 'Ukrainian',
			},
			{
				code: 'en',
				name: 'English',
			}
		],
		defaultLocale: 'ua',
		customRoutes: 'config',
		pages: {
			'[page]/': {
				en: '/[page]/',
				ru: '/[page]/',
			}
		}

	},


	sanity: {
		projectId: process.env.SANITY_ID,
		dataset: process.env.SANITY_DATASET,
		minimal: true,
		apiVersion: '2022-11-21'
	},

	image: {
		sanity: {
			projectId: process.env.SANITY_ID,
		}
	},

	nitro: {
		prerender: {
			crawlLinks: false,
			routes: ['/sitemap.xml']
		},
	},

	hooks: {
		async 'nitro:config'(nitroConfig: any) {
			if (nitroConfig.dev) { return }
			const routes = await getRoutes()
			nitroConfig.prerender.routes.push(...routes)
		}
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/css/colors.scss";',
				},
			},
		},
	},

	// webpack: {
	// 	analyze: {
	// 		analyzerMode: 'static'
	// 	}
	// },

})