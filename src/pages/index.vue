<template>
	<div id="home">
		<template v-if="data && !pending">
			<h1>{{ data.title }}</h1>
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { HomePage_Q } from "~~/src/assets/queries"
import type { HomePage } from "~~/src/assets/types"


// fetch data
const { fetch } = useSanity()
const { data, pending } = await useAsyncData(
	`Home Page`,
	(): Promise<HomePage> => fetch(HomePage_Q)
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
#home {
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



