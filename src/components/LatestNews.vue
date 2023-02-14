<template>
	<section class="latest-news">
		<div class="container">
			<h2>{{ title }}</h2>
			<template v-if="data && !pending">
				<div class="article-wrapper">
					<carousel :breakpoints="{
							// 700px and up
							320: {
								itemsToShow: 1,
								snapAlign: 'center',
							},
							700: {
								itemsToShow: 2,
								snapAlign: 'center',
							},
							// 1024 and up
							1024: {
								itemsToShow: 3,
								snapAlign: 'start',
							},
						}">
						<slide v-for="article in data" :key="article.uid">
							<div class="wrapper">
								<NewsCard :key="article.uid" :data="article"/>
							</div>
						</slide>

						<template #addons>
							<navigation />
							<pagination />
						</template>
					</carousel>
				</div>
			</template>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Articles_Q } from "~/assets/queries"
import type { ArticleCard } from "~/assets/types"

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

defineProps<{ title: string }>()
defineComponent({ Carousel,Slide,Pagination,Navigation})

const { locale, t } = useI18n()

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	'article',
	(): Promise<ArticleCard[]> => fetch(Articles_Q, { lang: locale.value, from: 0, to: 10 })
)

// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Articles Not Found`,
	fatal: true
})
</script>

<style lang="scss" >
.latest-news {
	width: 100%;
	background: $white;
	color: $dark;

	display: flex;
	justify-content: center;
	background-image: url('/section-bg.png');
	background-size: contain;
	background-position: left center;
	background-repeat: no-repeat;

	padding: 4rem 0;
	h2 {
		text-align: center;
		margin-top: 0;
	}
	.article-wrapper {
		.wrapper {
			width: 100%;
			max-height: 35vw;
			height: 100%;
			padding: 1rem;
			.item {
				width: -webkit-fill-available;
			}
		}
		// display: flex;
		// justify-content: flex-start;
		// flex-wrap: wrap;
	}
	.carousel__prev, .carousel__next {
		background-color: $dark3;
		color: $white;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.5rem;
		&:hover {
			opacity: 0.7;
		}
	}
	.carousel__pagination {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		.carousel__pagination-button {
			&::after {
				transition: all 0.5s linear;
				background-color: rgb($dark3, 50%);
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
	.carousel {
		padding-bottom: 2rem;
	}
}
</style>