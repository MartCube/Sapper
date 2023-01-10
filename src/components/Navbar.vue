<template>
	<header>
		<div class="menu" :class="{ hide: menuValue }" @click="menuToggle()">
			<span class="bar" />
			<span class="bar" />
		</div>
		<div class="links" :class="{ show: menuValue }" @click="menuToggle()">
			<div v-for="(link, n) in links" :key="link.name" :style="`--i:${n}`" ref="link" class="link">
				<NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const [menuValue, menuToggle] = useToggle()

const links = [
	{
		name: 'mart cube',
		url: '/'
	},
	{
		name: 'about',
		url: '/about/'
	},
	{
		name: 'projects',
		url: '/projects/'
	},
	{
		name: 'blog',
		url: '/blog/'
	},
	{
		name: 'contact',
		url: '/contact/'
	},
]


</script>

<style lang="scss" scoped>
header {
	width: 100%;
	height: 2rem;
	max-width: 25rem;

	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;

	.menu {
		width: 2rem;
		height: 2rem;
		z-index: 10;
		cursor: pointer;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		justify-content: space-around;

		.bar {
			width: 0%; // width: 100%
			height: 2px;
			background: $primary;
			border-radius: 5px;

			&:last-of-type {
				align-self: flex-end;
			}

			animation-name: menuAnim;
			animation-duration: 350ms;
			animation-timing-function: ease;
			animation-direction: normal;
			animation-fill-mode: forwards;
			will-change: width;

			@keyframes menuAnim {
				from {
					width: 0%;
				}

				to {
					width: 100%;
				}
			}
		}

		&.hide {
			.bar {
				animation-name: menuAnimHide;

				@keyframes menuAnimHide {
					from {
						width: 100%;
					}

					to {
						width: 0%;
					}
				}
			}

		}
	}

	.links {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: $bg-primary;
		padding: 0 10%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		z-index: -1;
		opacity: 0;


		.link {
			width: 100%;
			max-width: 25rem;
			overflow: hidden;
			margin-bottom: 3rem;

			&:last-child {
				margin: 0;
			}

			a {
				display: inline-block;
				text-transform: uppercase;
				font-size: 2rem;
				color: white;
				font-weight: 300;
				letter-spacing: 0.5rem;

				&.router-link-exact-active {
					color: $primary;
				}

				&:hover {
					color: $primary;
				}

				opacity: 0;
				transform: translateY(-120%);
				transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
			}
		}


		&.show {
			z-index: 9;
			opacity: 1;

			.link a {
				opacity: 1;
				transform: translateX(0);
				transition-delay: calc(0.055s * var(--i));
			}
		}
	}
}
</style>
