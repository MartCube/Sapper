<template>
	<section class="latest-news">
		<div class="container">
			<h2>{{ title }}</h2>
			<template v-if="data && !pending">
				<div class="article-wrapper">
					<Splide :options="sliderOptions" aria-label="My Favorite Images">
						<SplideSlide v-for="article in data" :key="article.uid">
							<div class="wrapper">
								<NewsCard :key="article.uid" :data="article"/>
							</div>
						</SplideSlide>
					</Splide>
				</div>
			</template>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Articles_Q } from "~/assets/queries"
import type { ArticleCard } from "~/assets/types"

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
defineComponent({ Splide, SplideSlide })
const sliderOptions = {
	perPage: 3,
	perMove: 1,
	arrows: true,
	pagination: true,
	breakpoints: {
		700: {
			perPage: 1,
		},
		// 1024 and down
		1024: {
			perPage: 2,
		},
	}
}

defineProps<{ title: string }>()

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
			padding: 1rem;
			.item {
				width: -webkit-fill-available;
			}
		}
	}

	.splide {
		padding-bottom: 2rem;
		@media (max-width: 700px) {
			padding-bottom: 0;
		}
	}
}
</style>