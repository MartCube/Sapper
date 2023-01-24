import { defineNuxtConfig } from 'nuxt/config'

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
		'nuxt-icon',
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
		projectId: 'ede4uk6z',
		dataset: 'production',
		minimal: true,
		apiVersion: '2022-11-21'
	},

	image: {
		sanity: {
			projectId: 'ede4uk6z',
		}
	},

	nitro: {
		prerender: {
			crawlLinks: false,
			// routes: ['/sitemap.xml']
		},
	},

	// hooks: {
	// 	async 'nitro:config'(nitroConfig: any) {
	// 		if (nitroConfig.dev) { return }
	// 		const routes = await getRoutes()
	// 		nitroConfig.prerender.routes.push(...routes)
	// 	}
	// },

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