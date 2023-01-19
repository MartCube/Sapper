import { defineStore } from 'pinia'
import { App_Q } from "~/assets/queries"
import type { App } from "~/assets/types"

export default defineStore('AppStore', () => {

	// language
	const { locale } = useI18n()

	// data fetching
	const { fetch } = useSanity()
	const { data, pending: App_Pending, refresh: App_Refetch } = useAsyncData(
		`App`,
		(): Promise<App> => fetch(App_Q, { lang: locale.value })
	)

	// getters
	const logo = computed(() => data.value?.logo || null)
	const links = computed(() => data.value?.links || null)
	const smedias = computed(() => data.value?.smedias || null)
	const info = computed(() => data.value?.info || null)


	function AppFetch() {

		// refetch
		App_Refetch()
	}


	return {
		App_Pending,
		AppFetch,
		logo,
		links,
		smedias,
		info,
	}
})
