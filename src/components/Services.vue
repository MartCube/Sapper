<template>
	<section class="services">
		<div class="container">
			<h2 class="title">{{ title }}</h2>
			<div v-for="item in list" :key="item.title" class="item">
				<template v-if="!isMobileScreen">
					<div class="front-card">
						<div class="image">
							<Icon :name="item.icon" />
						</div>
						<h3 class="title">{{ item.title }}</h3>
						<p class="description">{{ item.description.slice(0, item.description.length / 2) }}</p>
					</div>
					<div class="back-card">
						<AppImage :src="item.image" />
						<p class="description">{{ item.description.slice(item.description.length / 2, item.description.length) }}</p>
						<NuxtLink :to="`${localePath({ name: 'page', params: { page: item.link.uid } })}`">Відкрити</NuxtLink>
					</div>
				</template>
				<template v-if="isMobileScreen">
						<div class="icon">
							<Icon :name="item.icon" />
						</div>
						<h3 class="title">{{ item.title }}</h3>
						<p class="description">{{ item.description }}</p>
						<AppImage :src="item.image" />
						<NuxtLink :to="`${localePath({ name: 'page', params: { page: item.link.uid } })}/`">Відкрити</NuxtLink>
				</template>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const localePath = useLocalePath()	 
const isMobileScreen = useMediaQuery('(max-width: 1000px)')

defineProps<{ 
	title: string, 
	list: {
		icon: string,
		description: string,
		title: string,
		key: string,
		image: string,
		link: {
			lang: string,
			uid: string,
			title: string
		}
	}[], 	
}>()
</script>

<style lang="scss" scoped>
.services {
	padding: 4rem 0;
	width: 100%;
	color: $dark;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/service-bg.jpg');
	background-position: center;
	background-size: cover;
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		.title {
			width: 100%;
			color: $white;
			text-align: center;
		}
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: $white;
			width: 30%;
			position: relative;
			border-radius: 15px;
			// overflow: hidden;
			transition: all 0.7s ease;
			margin: 1%;
			.front-card {
				padding: 2rem;
				border: 1px solid $white;
				transition: all 0.7s ease;
				height: 100%;
				border-radius: 15px;
				overflow: hidden;
				backface-visibility: hidden;
			}
			.back-card {
				width: 100%;
				height: 100%;
				border-radius: 15px;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 2rem;
				transform: rotateY(180deg);
				transition: all 0.7s ease;
				opacity: 0;
				.image {
					width: 100%;
					filter: brightness(0.2);
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}
			}
			.description {
				position: relative;
				z-index: 3;
			}
			a {
				text-decoration: none;
				padding: 1.5rem 4rem;
				display: inline-block;
				transition: all 2s;
				position: relative;
				font-size: 1rem;
				width: fit-content;
				margin: 3rem auto;
				font-weight: 600;
				border-radius: 100px;
				cursor: pointer;
				color: $dark3;
				background-color: $white;
				&::after {
					content: "";
					display: inline-block;
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: -1;
					transition: all .4s;
					border-radius: 100px;
					background-color: $white;
				}
				&:hover {
					transform: translateY(-0.3rem);
					box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
					border-radius: 100px;
					color: #666666;
					&::after {
						transform: scaleX(1.4) scaleY(1.6);
						opacity: 0;
					}
				}
			}
	
			&:hover {
				.front-card {
					transform: rotateY(-180deg);
					opacity: 0;
				}
				.back-card {
					transform: rotateY(0);
					opacity: 1;
				}
			}
			.title {
				font-size: 1.4rem;
				text-align: center;
				font-weight: 600;
				min-height: 3rem;
				line-height: 1;
				margin-top: 3rem;
			}
			.description {
				text-align: center;
				font-size: 1rem;
			}
			.image {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				svg {
					width: 80px;
					height: auto;
					object-position: center;
					object-fit: contain;	
				}
			}

			&:hover {

			}
		}

		@media (max-width: 1000px) {
			.item {
				width: 47%;
				margin: 2rem auto;
				padding: 2rem;
				border-radius: 15px;
				overflow: hidden;
				.title {
					position: relative;
					z-index: 3;
				}
				.image {
					position: relative;
					z-index: 4;
				}
			}
		}
		@media (max-width: 700px) {
			.item {
				width: 80%;
				margin: 2rem auto;
				padding: 2rem;
				border-radius: 15px;
				overflow: hidden;
				.title {
					position: relative;
					z-index: 3;
				}
				.image {
					position: absolute;
					z-index: 0;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					filter: brightness(0.3);
				}
			}
		}
	}
}

@keyframes rotate_el {
	0% {
			transform: rotate(0deg);
	}
	100% {
			transform: rotate(360deg);
	}
}
</style>