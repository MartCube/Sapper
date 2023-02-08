<template>
	<section class="latest-news">
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

defineProps<{ title: string, lastnews: any[]}>()
const { locale, setLocale, t } = useI18n()

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

<style lang="scss" scoped>
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
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
}
</style>