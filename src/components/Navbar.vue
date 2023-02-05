<template>
	<header>
		<NuxtLink :to="localePath('index')" class="logo">
			<AppImage :src="logo!"/>
		</NuxtLink>
		<nav>
			<ul class="links">
				<li v-for="link in currentLinks" :key="link.title" class="link">
					<NuxtLink :to="`/${link.uid}`">{{ link.title }}</NuxtLink>
					<Icon v-if="link.dropdown" name="ic:twotone-keyboard-arrow-down"/>
					<ul v-if="link.dropdown" class="submenu">
						<li v-for="sublink in link.dropdown">
							<NuxtLink :to="`/${sublink.uid}`">{{ sublink.title }}</NuxtLink>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<div class="menu">
			<NuxtLink class="lang_switcher" :to="switchLocalePath(altLocale)">
				<span>{{ altLocale }}</span>
			</NuxtLink>
			<Icon v-if="!menuValue" name="ri:menu-2-fill" @click="menuToggle()" />
			<Icon v-else name="ri:close-fill" @click="menuToggle()" />
			<a class="phone" href="tel:+380647339023">
				<Icon name="mdi:phone-in-talk-outline"/>
				+38 (064) 733-90-23
			</a>
		</div>
		<div class="sidebar" v-show="menuValue" ref="sidebar">
			<div class="close">
				<Icon name="ri:close-fill" @click="menuToggle()" />
			</div>
			<div class="desktop">
				<h3>Contact info</h3>
				<a :href="`tel:${info?.phone}`" class="info phone">
					<Icon name="ri:phone-fill" />
					<span>{{ info?.phone }}</span>
				</a>
				<a :href="`mailto:${info?.email}`" class="info email">
					<Icon name="ri:mail-open-fill" />
					<span>{{ info?.email }}</span>
				</a>
				<a href="javaskript:;" class="info adress">
					<Icon name="ri:map-pin-2-fill" />
					<span>{{ info?.adress }}</span>
				</a>
				<div class="social-media">
					<NuxtLink :to="smedias?.instagram" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
					</NuxtLink>
					<NuxtLink :to="smedias?.facebook" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
					</NuxtLink>
					<NuxtLink :to="smedias?.youtube" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
					</NuxtLink>
				</div>
			</div>
			<div class="mobile">
				<nav>
					<ul class="links">
						<li v-for="link in currentLinks" :key="link.uid" class="link" :class="link.classes" @click="submenu(link)">
							<NuxtLink :to="`/${link.uid}`" @click="menuToggle()">{{ link.title }}</NuxtLink>
							<div class="arrow">
								<Icon v-if="link.dropdown" name="ic:twotone-keyboard-arrow-down" :key="link.uid"/>
							</div>
							<ul v-if="link.dropdown" class="submenu">
								<li v-for="sublink in link.dropdown">
									<NuxtLink :to="`/${sublink.uid}`" @click="menuToggle()">{{ sublink.title }}</NuxtLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useToggle, onClickOutside, useMediaQuery } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { Link } from '~/assets/types'

const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale } = useI18n()

const localePath = useLocalePath()	 
const altLocale = computed(() => locale.value == 'ua' ? 'en' : 'ua')

const { AppFetch } = useAppStore()
const { logo, links, info, smedias } = storeToRefs(useAppStore())


const currentLinks = computed(() => locale.value === 'ua' ? links.value?.ua : links.value?.en)
watch(locale, async (oldLocale, newLocale) => {
	if (newLocale) currentLinks
})
const [menuValue, menuToggle] = useToggle()

const submenu = (link: Link) => {
	if(link.classes !== '') {
		link.classes = ''
	} else {
		link.classes = 'open'
	}
}

const sidebar = ref()
onClickOutside(sidebar, (event) => menuValue.value = false)

</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 115px;
	padding: 0 5%;
	border: 1px solid $dark;

	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 600px) {
		height: 60px;
	}

	.logo {
		width: 100px;
		height: auto;
		object-fit: contain;
	}

	.menu {
		display: flex;
		align-items: center;
		.lang_switcher {
			width: 2rem;
			height: 2rem;
			margin-right: 1rem;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;

		}

		svg {
			width: 2rem;
			height: 2rem;
			color: $dark3;
		}
		.phone {
			display: flex;
			white-space: nowrap;
			margin-left: 2rem;
			padding: 1rem;
			background-color: $dark3;
			color: $white;
			border-radius: 5px;
			align-items: center;
			font-weight: 600;
			transition: all 0.2s ease-in;
			svg {
				color: inherit;
				margin-right: 1rem;
			}
			&:hover {
				background-color: $dark2;
			}
		}
	}

	nav {
		width: 100%;
	}

	ul {
		list-style-type: none;
	}

	.links {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		.link {
			overflow: hidden;
			position: relative;
			display: flex;
			align-items: center;
			margin: 0 2rem;
			&:last-child {
				margin-right: 0;
			}

			a {
				text-transform: capitalize;
				font-size: 1.2rem;
				letter-spacing: 1px;
				line-height: 2rem;
				width: fit-content;
				display: flex;
				color: $dark;
				font-weight: 500;
				position: relative;
				margin-right: 1rem;
				&::after {
					content: '';
					position: absolute;
					width: 0;
					height: 3px;
					background-color: $dark;
					bottom: 0;
					left: 0;
					transition: width 0.3s linear;
				}
				&.router-link-exact-active {
					&::after {
						width: 100%;
					}
				}

				&:hover {
					&::after {
						width: 100%;
					}
				}


			}

	
			ul.submenu {
				position: absolute;
				background-color: $white;
				top: 2rem;
				padding: 1rem;
				z-index: 3;
				opacity: 0;
				min-width: 150px;
				white-space: nowrap;
				border-radius: 5px;
				box-shadow: 0 0 10px -3px lightgrey;
				transition: opacity 0.3s linear;
				li {
					a {
						margin: 0;
					}
				}
			}

			&:hover {
				overflow: visible;
				ul.submenu {
					opacity: 1;
				}
			}
		}
	}

	.sidebar {
		z-index: 11;
		position: fixed;
		top: 0;
		left: 0;
		width: 25rem;
		height: 100vh;

		background: $white;
		color: $dark;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.info {
			width: 100%;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 2rem;
			font-weight: 600;

			.icon {
				width: 6rem;
				height: 6rem;
				padding: 1.5rem;
				border-radius: 5px;
				margin-bottom: 1rem;
				background: $dark3;
				color: $white;
			}
		}

		.links {
			flex-direction: column;
			.link {
				width: 100%;
				padding-right: 2rem;
				justify-content: space-between;
				flex-wrap: wrap;
				overflow: hidden;
				height: 4rem;
				margin: 0;
				padding: 0 0 0 2rem;
				transition: all 0.3s ease-in;
				a {
					padding: 1rem 0;
				}
				
				.arrow {
					padding: 1rem;
				}
				&.open{
					overflow: visible;
					height: 100%;
					.submenu {
						opacity: 1;
					}
				}
				.submenu {
					position: initial;
					transition: all 0.3s ease-in;
					width: 100%;
					box-shadow: initial;
					padding-left: 3rem;
					padding-top: 0;
					padding-bottom: 0;
					opacity: 0;
					li {
						a {
							&::before {
								content: "-";
								margin-right: 1rem;
							}
						}
					}
				}
			}
		}
		.close {
			position: absolute;
			top: 1rem;
			right: 1rem;
			svg {
				width: 30px;
				height: 30px;
			}
		}
		.mobile {
			display: none;
		}
		.social-media {
			display: flex;
			margin-top: 2rem;
			a {
				color: $dark3;
				margin: 10px;
				padding: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				svg {
					width: 30px;
					// fill: $white;
				}
				&:hover {
					color: rgb($dark3, 50%);
					svg {
						fill: rgb($dark3, 50%);
					}
				}
			}
		}
	}

	@media (max-width: 1400px) {
		> nav {
			display: none;
		}
		.sidebar {
			.desktop {
				display: none;
			}
			.mobile {
				display: block;
			}
		}
	}

	@media (max-width: 600px) {
		.sidebar {
			width: 100vw;
			.links .link {
				padding: 0 2rem;
				a, .arrow svg {
					font-size: 1.5rem;
				}
				a.router-link-exact-active::after {
					bottom: 10px;
				}
			}
		}
		.menu .phone {
			display: none;
		}
	}
}
</style>
