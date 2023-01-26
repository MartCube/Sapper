<template>
	<header>
		<nuxt-img provider="sanity" :src="logo!" width="112" height="63" loading="lazy" />
		<nav>
			<ul class="links">
				<li v-for="link in links?.ua" :key="link.title" class="link">
					<NuxtLink :to="link.uid">{{ link.title }}</NuxtLink>
					<ul v-if="link.dropdown" class="submenu">
						<li v-for="sublink in link.dropdown">
							<NuxtLink :to="sublink.uid">{{ sublink.title }}</NuxtLink>
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
		</div>
		<div class="sidebar" v-show="menuValue">
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
		</div>
	</header>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useMediaQuery } from '@vueuse/core'

const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale } = useI18n()
const altLocale = computed(() => locale.value == 'ua' ? 'en' : 'ua')

const { AppFetch } = useAppStore()
const { logo, links, info } = storeToRefs(useAppStore())

const [menuValue, menuToggle] = useToggle()

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 115px;
	padding: 0 10%;
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
			&:last-child {
				margin: 0;
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
				margin: 0 2rem;
				position: relative;
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
		position: absolute;
		top: 4rem;
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
	}
}
</style>
