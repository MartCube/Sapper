<template>
	<div id="home">
		<template v-if="data && !pending">
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Home_Q } from "~~/src/assets/queries"
import type { Page } from "~~/src/assets/types"
const { locale } = useI18n()

// fetch data
const { fetch } = useSanity()
const { data, pending, refresh } = await useAsyncData(
	`Home Page`,
	(): Promise<Page> => fetch(Home_Q, { lang: locale.value })
)
watch(locale, async (oldLocale, newLocale) => {
	if (newLocale) refresh
})

// // handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `${data.value} Not Found`,
	fatal: true
})

// write metatags
useMetaTags(data.value.metaTags)
</script>

<style lang="scss" scoped>
#home {
	width: 100%;
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



