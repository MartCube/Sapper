<template>
	<div id="page">
		<template v-if="data && !pending">
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Article_Q } from "~/assets/queries"
import type { Article } from "~/assets/types"

// fetch data
const { params } = useRoute()
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`${params.article} - article`,
	(): Promise<Article> => fetch(Article_Q, { uid: params.article })
)


// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `${params.article} Not Found`,
	fatal: true
})


// i18n
// defineI18nRoute({
// 	paths: {
// 		ua: data.value.uid,
// 		en: data.value.altLang.uid,
// 	}
// })

// write metatags
useMetaTags(data.value.metaTags)
</script>

<style lang="scss" scoped>
#page {
	width: 100%;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;


}
</style>

