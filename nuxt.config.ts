import { defineNuxtConfig } from 'nuxt/config'
import sanityClient from '@sanity/client'

export const getRoutes = async () => {
	const client = sanityClient({
		projectId: 'ede4uk6z',
		dataset: 'production',
		apiVersion: '2022-11-21',
		useCdn: true,
	})

	const data = await client.fetch(
		`*[ _type in ["article", "page"] ]{
			_type == "page" && __i18n_lang == 'ua' => {
					"url": "/"+uid.current+"/",
			},
			_type == "page" && __i18n_lang == 'en' => {
					"url": "/en/"+uid.current+"/",
			},
			_type == "article" && __i18n_lang == 'ua' => {
					"url": "/novunu/"+uid.current+"/",
			},
		}`
	)

	return data.map((item: any) => { return item["url"] })
}


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
				ua: {
					index: 'Домашня',
					sitemap: 'Карта сайту',
					about_us: 'Про нас',
					read_more: 'Читати',
					form: {
						message_title: 'Повідомлення відправлено!',
						submit: 'Відправити',
						send_form: 'Відправити запит',
						message_greet: 'Дякую що написали нам!',
						message_reply: 'Ми відповімо якнайскоріше 💙💛',
						new_message: 'Створити новий лист',
						message_fail: 'Ооох щось пішло не по плану!',
						message_title_fail: 'Не вдало! 😰',
						message_reply_fail: 'Не кидайте , перезавантажте сторінку та спробуйте ще 🚀',
					},
					blog: 'Блог',
					contact_info_title: 'Контакти',
					rights: 'Всі права захищено',
					footer_text: "Наша компанія – це команда фахівців, які мають необхідний досвід та спеціалізацію в галузі гуманітарного розмінування. Кожен із наших співробітників отримав необхідну освіту та досвід для здійснення протимінної діяльності. ",
				},
				en: {
					index: 'Home',
					about_us: 'About us',
					blog: 'Blog',
					sitemap: 'Sitemap',
					read_more: 'Read more',
					contact_info_title: 'Contact info',
					form: {
						submit: 'Submit',
						send_form: 'Send the form',
						message_title: 'Message sent !',
						message_greet: 'Thanks for being awesome!',
						new_message: 'New message',
						message_reply: 'I will replay by email as soon as possible 💙💛',
						message_fail: 'Oooopsy something went wrong!',
						message_title_fail: 'Failed! 😰',
						message_reply_fail: 'We encourage you to refresh page and try again 🚀',
					},
					rights: 'All Rights Reserved',
					footer_text: 'Our company is a team of experts with the necessary experience and specialization in the field of humanitarian demining. Each of our employees has received the necessary education and experience to carry out mine action.'
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
			},
			// 'index': {
			// 	en: '/en',
			// 	ua: '/'
			// }
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