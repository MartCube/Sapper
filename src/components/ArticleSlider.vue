<template>
	<div class="article_slider">
		<h2>article_slider</h2>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string, }>()
</script>

<style lang="scss" scoped>
.article_slider {
	width: 100%;
	height: 50vh;
	background: $dark3;
	color: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	a {
		color: white;
	}
}
</style>