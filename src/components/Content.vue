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
		// article content
		// gallery: resolveComponent('LazyGallery'),
		// youtube: resolveComponent('LazyYoutube'),
		// page content
		projectList: resolveComponent('LazyGmap'),
		contactForm: resolveComponent('LazyContactForm'),
	},
	// marks: {
	// 	link: Link,
	// },
}
</script>

<style lang="scss">
.content {
	width: 100%;
	max-width: 25rem;


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