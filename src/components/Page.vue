<template>
	<div id="page">
		<template v-if="data && !pending">
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Page_Q } from "~~/src/assets/queries"
import type { Page } from "~~/src/assets/types"

const props = defineProps<{ uid: string }>()

// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`${props.uid} - page`,
	(): Promise<Page> => fetch(Page_Q, { uid: props.uid })
)

// // handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: 'Page Not Found',
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

