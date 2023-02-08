<template>
	<section class="article-list">
		<div class="container">
			<h2>{{ title }}</h2>
			<template v-if="data && !pending">
				<div class="article-wrapper">
					<NewsCard v-for="article in data" :key="article.uid" :data="article"/>
				</div>
			</template>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Articles_Q } from "~/assets/queries"
import type { ArticleCard } from "~/assets/types"

defineProps<{ title: string }>()
const { locale, setLocale, t } = useI18n()
// console.log(locale);

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	'article',
	(): Promise<ArticleCard[]> => fetch(Articles_Q, { lang: locale.value, from: 0, to: 10 })
)
// console.log(data);	


// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `Articles Not Found`,
	fatal: true
})
</script>

<style lang="scss" scoped>
.article-list {
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
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.item {
			display: flex;
			width: 30%;
			flex-direction: column;
			justify-content: flex-start;
			padding: 1.5rem;
			text-align: center;
			background-color: $white;
			border-radius: 5px;
			margin: 1.6%;
			box-shadow: 3px 3px 13px 0 rgb(0 0 0 / 10%);
			.title {
				font-size: 1.3rem;
				line-height: 1.5rem;
				max-height: 3rem;
				overflow: hidden;
			}
			.text {
				display: flex;
				flex-direction: column;
				height: -webkit-fill-available;
			}
			.description {
				margin-bottom: 1rem;
			}
			.link {
				height: 70px;
				line-height: 70px;
				display: inline-block;
				background-color: $dark;
				color: $white;
				font-weight: 600;
				border: 1px solid;
				padding: 0 50px;
				position: relative;
				font-size: 16px;
				border-radius: 100px;
				margin-top: auto;
				justify-self: flex-end;
				width: fit-content;
				align-self: center;
				&:hover {
					background-color: #1a1a1a;
				}
			}
			.image-wrapper {
				width: 100%;
				height: 14rem;
				.image {
					width: 100%;
					height: 100%;
					display: block;
					object-fit: cover;
					object-position: center;
				}
			}

			@media (max-width: 1000px) {
				width: 100%;
				margin-bottom: 4rem;
				height: fit-content;
			}
		}
	}
}
</style>