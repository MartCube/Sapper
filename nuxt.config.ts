import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	router: {
		options: {
			strict: false,
		}
	},
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
		vueI18n: {
			// legacy: false,
			locale: 'ua',
			fallbackLocale: 'ua',
			messages: {
				en: {
					index: 'Home'
				},
				ua: {
					index: 'Домашня'
				}
			}
		},
		locales: [
			{
				code: 'ua',
				iso: 'uk-UA',
				name: 'Ukrainian',
			},
			{
				code: 'en',
				iso: 'en-US',
				name: 'English',
			}
		],
		defaultLocale: 'ua',
		dynamicRouteParams: true,
		strategy: 'prefix_except_default',
		customRoutes: 'config',
		pages: {
			'[page]/': {
				en: '/[page]',
				ua: '/[page]',
			},
			'blog/[article]': {
				en: false,
				ua: '/novunu/[article]',
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