<template>
	<div ref="root" class="content">
		<SanityContent :blocks="blocks" :serializers="serializers" />
	</div>
</template>

<script setup lang="ts">
import { resolveComponent, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
	blocks: any[],
}>()

const serializers = {
	types: {
		// page content ### Lazy load ?
		homeSlider: resolveComponent('HomeSlider'),
		latestArticles: resolveComponent('LatestNews'),
		achivments: resolveComponent('Achivments'),
		pageIntro: resolveComponent('PageIntro'),
		image: resolveComponent('AppImage'),
		contactForm: resolveComponent('ContactForm'),
		gmap: resolveComponent('Gmap'),
		contactInfo: resolveComponent('ContactInfo'),
		richtext: resolveComponent('RichText'),
		richtextImage: resolveComponent('RichTextImage'),
		richtextForm: resolveComponent('RichTextForm'),
		services: resolveComponent('Services'),
		counter: resolveComponent('Counter'),
		articleList: resolveComponent('ArticleList'),
		gallery: resolveComponent('Gallery'),
		youtubeGallery: resolveComponent('GalleryYoutube'),
		testimonials: resolveComponent('Testimonials'),
		// article content
		// gallery: resolveComponent('Gallery'),
		// youtube: resolveComponent('Youtube'),
	},
	// marks: {
	// 	link: Link,
	// },

	
}


// const root = ref(null)
// const target = document.getElementById("counter")
// const isVisible = ref(false)
// useIntersectionObserver(
//   target,
//   ([{ isIntersecting }]) => {
//     isVisible.value = isIntersecting
//   },
//   { root },
// )

</script>

<style lang="scss">
.content {
	width: 100%;


	// .v-enter-active,
	// .v-leave-active {
	// 	transition: all .35s ease;
	// }

	// .v-enter-from,
	// .v-leave-to {
	// 	opacity: 0
	// }
}
</style>