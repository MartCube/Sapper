<template>
	<div class="content">
		<SanityContent :blocks="blocks" :serializers="serializers" />
	</div>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'

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
		homeInfo: resolveComponent('HomeInfo'),
		contactForm: resolveComponent('ContactForm'),
		gmap: resolveComponent('Gmap'),
		contactInfo: resolveComponent('ContactInfo'),
		richtext: resolveComponent('RichText'),
		richtextImage: resolveComponent('RichTextImage'),
		services: resolveComponent('Services'),
		// article content
		// gallery: resolveComponent('Gallery'),
		// youtube: resolveComponent('Youtube'),
	},
	// marks: {
	// 	link: Link,
	// },
}
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