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
		'@nuxtjs/sanity',
		'@pinia/nuxt',
		'@nuxt/image-edge',
		'@nuxtjs/i18n',
		'~/modules/style-inlining'
	],

	i18n: {
		locales: ['en', 'ua'],
		defaultLocale: 'en',
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
		}
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