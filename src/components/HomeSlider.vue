<template>
	<section class="slider">
		<Splide :options="sliderOptions">
			<SplideSlide v-for="slide in list" :key="slide.image">
				<div class="wrapper">
					<AppImage :src="slide.image" />
					<div class="content">
						<h4 v-if="slide.subtitle" class="subtitle">{{ slide.subtitle }}</h4>
						<h1 v-if="slide.title" class="title"> {{ slide.title }}</h1>
						<p v-if="slide.description" class="description">{{ slide.description }}</p>
					</div>
				</div>
			</SplideSlide>
		</Splide>
	</section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

defineProps<{ list: any[], }>()

defineComponent({ Splide, SplideSlide })
const sliderOptions = {
	perPage: 1,
	perMove: 1,
	arrows: true,
	pagination: true,
}
</script>

<style lang="scss">
.slider {
	width: 100%;
	background: $dark3;
	color: $white;

	display: block;

	a {
		color: white;
	}
	.splide__arrow--prev, .splide__arrow--next {
		top: 50%;
		background-color: $white;
		svg {
			fill: $dark;
		}
	}
	.splide__pagination {
		.splide__pagination__page {
			background-color: $white;
			&.is-active {
				background-color: $dark3;
			}
		}
	}
	.wrapper {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: calc(100vh - 115px);
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			filter: brightness(0.8);
		}
		.content {
			position: absolute;
			z-index: 1;
			text-align: left;
			margin-left: 10%;
			max-width: 40%;
			.title {
				font-size: 4rem;
				font-weight: 900;
				line-height: 1;
				margin-bottom: 1rem;
				margin-top: 0;
			}
			.subtitle {
				font-size: 2.3rem;
				line-height: 1.1;
				margin: 0 0 1rem 0;
			}
			.description {
				font-size: 1.3rem;
			}
		}
	}
	@media (max-width: 1000px) {
		.wrapper {
			.content {
				max-width: 70%;
			}
		}
	}
	@media (max-width: 600px) {
		.wrapper {
			height: calc(100vh - 60px);
			.content {
				margin-left: 15%;
				max-width: 70%;
				.title {
					font-size: 3rem;
				}
				.subtitle {
					font-size: 2rem;
				}
			}
		}
	}
}
</style>