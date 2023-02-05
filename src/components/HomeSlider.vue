<template>
	<section class="slider">
		<carousel :items-to-show="1">
			<slide v-for="slide in list" :key="slide.image">
				<div class="wrapper">
					<AppImage :src="slide.image"/>
					<div class="content">
						<h4 class="subtitle">{{ slide.subtitle }}</h4>
						<h1 class="title"> {{ slide.title }}</h1>
						<p class="description">{{ slide.description }}</p>
					</div>
				</div>
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

defineProps<{ list: any[], }>()

defineComponent({ Carousel,Slide,Pagination,Navigation})
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
	.carousel {
		.carousel__prev, .carousel__next {
			background-color: $white;
			color: $dark3;
			padding: 15px;
			border-radius: 5px;
			font-size: 1.5rem;
			&:hover {
				opacity: 0.7;
			}
		}
		.carousel__pagination {
			position: absolute;
			bottom: 1rem;
			left: 50%;
			transform: translateX(-50%);
			.carousel__pagination-button {
				&::after {
					transition: all 0.5s linear;
					background-color: $white;
					width: 3rem;
					border-radius: 10px;
					height: 7px;
				}
				&.carousel__pagination-button--active {
					&::after {
						background-color: $dark;
						width: 5rem;
					}
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
				filter: brightness(0.4);
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
					margin: 0;
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
			.carousel__prev, .carousel__next {
				padding: 10px;
			}
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
}
</style>