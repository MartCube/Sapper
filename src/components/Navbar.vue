<template>
	<header>
		<NuxtLink :to="localePath('/')">
			<nuxt-img provider="sanity" :src="logo!" width="112" height="63" loading="lazy" />
		</NuxtLink>
		<template v-if="!isLargeScreen">
			<nav>
				<ul class="links">
					<li v-for="link in links?.ua" :key="link.title" class="link">
						<NuxtLink :to="`/${link.uid}/`">{{ link.title }}</NuxtLink>
						<Icon v-if="link.dropdown" name="ic:twotone-keyboard-arrow-down"/>
						<ul v-if="link.dropdown" class="submenu">
							<li v-for="sublink in link.dropdown">
								<NuxtLink :to="`/${sublink.uid}/`">{{ sublink.title }}</NuxtLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</template>
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
		<div class="sidebar" v-show="menuValue">
			<template v-if="!isLargeScreen">
				<div class="info phone">
					<Icon name="ri:phone-fill" />
					<span>{{ info?.phone }}</span>
				</div>
				<div class="info email">
					<Icon name="ri:mail-open-fill" />
					<span>{{ info?.email }}</span>
				</div>
				<div class="info adress">
					<Icon name="ri:map-pin-2-fill" />
					<span>{{ info?.adress }}</span>
				</div>
			</template>
			<template v-if="isLargeScreen">
				<div class="close">
					<Icon name="ri:close-fill" @click="menuToggle()" />
				</div>
				<nav>
					<ul class="links">
						<li v-for="link in links?.ua" :key="link.uid" class="link" :class="link.classes" @click="submenu(link)">
							<NuxtLink :to="`/${link.uid}/`">{{ link.title }}</NuxtLink>
							<div class="arrow">
								<Icon v-if="link.dropdown" name="ic:twotone-keyboard-arrow-down" :key="link.uid"/>
							</div>
							<ul v-if="link.dropdown" class="submenu">
								<li v-for="sublink in link.dropdown">
									<NuxtLink :to="`/${sublink.uid}/`">{{ sublink.title }}</NuxtLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</template>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useMediaQuery } from '@vueuse/core'
import { Link } from '~/assets/types'

const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale } = useI18n()
// console.log(locale.value);

const localePath = useLocalePath()	 
const altLocale = computed(() => locale.value == 'ua' ? 'en' : 'ua')

const { AppFetch } = useAppStore()
const { logo, links, info } = storeToRefs(useAppStore())

const currentLinks = (localeProperty: string) => localeProperty === 'ua' ? links.value?.ua : links.value?.en
watch(locale, async (newLocale, oldLocale) => {
    currentLinks(newLocale);
})
const [menuValue, menuToggle] = useToggle()

const submenu = (link: Link) => {
	if(link.classes !== '') {
		link.classes = ''
	} else {
		link.classes = 'open'
	}
}

const isLargeScreen = useMediaQuery('(max-width: 1400px)')

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
		width: 2rem;
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


			.icon {
				width: 6rem;
				height: 6rem;
				padding: 1.5rem;
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
