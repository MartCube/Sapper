<template>
	<div>
		<nuxt-img provider="sanity" :src="src" width="640" height="360" loading="lazy" />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	src: string,
}>()
</script>

<style lang="scss" scoped>
	div {
		width: inherit;
		height: 100%;
		img {
			width: inherit;
			height: inherit;
			display: block;
			object-fit: cover;
			object-position: center;
		}
	}
</style>