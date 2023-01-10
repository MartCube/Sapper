import { defineStore } from 'pinia'
import { Articles_Q, ArticleTags_Q, ArticleCount_Q } from "~~/src/assets/queries"
import type { ArticleCard } from "~~/src/assets/types"

export default defineStore('BlogStore', () => {
	// state
	const activeTag = ref('all')
	const activePage = ref(1)
	const pageSize = 2
	const params = ref({ from: 0, to: 2 })


	// data fetching
	const { fetch } = useSanity()
	const { data: articles_D, pending: articles_Pending, refresh: articles_R } = useAsyncData(
		"articles",
		(): Promise<ArticleCard[]> => fetch(Articles_Q, { activeTag: activeTag.value, from: params.value.from, to: params.value.to }),
	)
	const { data: articleTags_D, pending: articleTags_Pending } = useAsyncData(
		"article tags",
		(): Promise<string[]> => fetch(ArticleTags_Q)
	)
	const { data: articleCount_D, pending: articleCount_Pending, refresh: articleCount_R } = useAsyncData(
		"article count",
		(): Promise<number> => fetch(ArticleCount_Q, { activeTag: activeTag.value, all: 'all' })
	)


	// getters
	const articles = computed(() => articles_D.value || [])
	const articleTags = computed(() => articleTags_D.value || [])
	const articleCount = computed(() => articleCount_D.value || 0)


	// actions
	function updateTag(value: string) {
		activeTag.value = value
		// reset pagination
		activePage.value = 1
		params.value = { from: 0, to: 2 }
		// refetch
		articles_R()
		articleCount_R()
	}
	function updatePage(value: number) {
		activePage.value = value
		params.value.to = activePage.value * pageSize
		params.value.from = params.value.to - pageSize
		articles_R()
	}


	return {
		//state
		activeTag,
		activePage,
		pageSize,
		params,
		// getters
		articles,
		articles_Pending,
		articleTags,
		articleTags_Pending,
		articleCount,
		articleCount_Pending,
		// actions
		updateTag,
		updatePage,
	}
})
