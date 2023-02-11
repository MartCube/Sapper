<template>
	<div id="page">
		<template v-if="data && !pending">
			<Content :blocks="data.content" />
		</template>
	</div>
</template>

<script setup lang="ts">
import { Page_Q } from "~/assets/queries"
import type { Page } from "~/assets/types"

// fetch data
const { params, meta  } = useRoute()
const { fetch } = useSanity()
const { locale, setLocale } = useI18n()
const { data, pending, refresh } = await useAsyncData(
	`${params.page} - page`,
	(): Promise<Page> => fetch(Page_Q, { uid: params.page })
)


// handle error
if (!data.value) throw createError({
	statusCode: 404,
	statusMessage: `${params.page} Not Found`,
	fatal: true
})

watch(locale, async (oldLocale, newLocale) => {
	if (newLocale) refresh
})

// defineI18nRoute({
//   paths: {
//     en: data.value.alterLang.uid,
//     ua: data.value.lang
//   }
// })
// console.log(data.value.alterLang);

if(params && data.value) {
  meta.nuxtI18n = {
		en: { page: `${locale.value === 'en' ? params.page : data.value.alterLang.uid}/` },
		ua: { page: `${locale.value === 'ua' ? params.page : data.value.alterLang.uid}/` },
	};
}
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

