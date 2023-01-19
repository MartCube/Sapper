<template>
	<header>
		<nuxt-img provider="sanity" :src="logo!" width="112" height="63" loading="lazy" />
		<div class="links">
			<div v-for="link in links" :key="link.name" class="link">
				<NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
			</div>
		</div>
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

const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale } = useI18n()
const altLocale = computed(() => locale.value == 'ua' ? 'en' : 'ua')

const { AppFetch } = useAppStore()
const { logo, links, info } = storeToRefs(useAppStore())

const [menuValue, menuToggle] = useToggle()




</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 4rem;
	padding: 0 10%;
	border: 1px solid $dark;

	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;

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

	.links {
		width: 50%;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.link {
			overflow: hidden;

			&:last-child {
				margin: 0;
			}

			a {
				text-transform: capitalize;
				font-size: 1rem;
				color: dark;
				font-weight: 500;

				// &.router-link-exact-active {
				// 	color: $primary;
				// }

				// &:hover {
				// 	color: $primary;
				// }


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
