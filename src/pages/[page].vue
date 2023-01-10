<template>
	<div id="page">
		<template v-if="data && !pending">
			<h1>{{ data?.title }}</h1>
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Page_Q } from "~~/src/assets/queries"
import type { Page } from "~~/src/assets/types"

// fetch data
const { params } = useRoute()
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`${params.page} - page`,
	(): Promise<Page> => fetch(Page_Q, { uid: params.page })
)

// // handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `${params.page} Not Found`,
	fatal: true
})

// write metatags
useMetaTags(data.value.metaTags)
</script>

<style lang="scss" scoped>
#page {
	width: 100%;
	max-width: 25rem;
	flex-grow: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;

	.title {
		position: absolute;
		top: -1.5rem;
		left: 0;

		color: $white;
		text-transform: uppercase;
		font-size: 1.5rem;
		line-height: 1.5rem;
		font-weight: 300;
	}
}
</style>

