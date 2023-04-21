<template>
	<div id="article">
		<template v-if="data && !pending">
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Info_Q } from "~/assets/queries"
import type { Article } from "~/assets/types"

// fetch data
const { params } = useRoute()
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`${params.slug} - info`,
	(): Promise<Article> => fetch(Info_Q, { uid: params.slug })
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
#article {
	width: 100%;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
}
</style>

