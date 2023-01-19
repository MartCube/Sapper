<template>
	<div class="slider">
		<h2>Slider</h2>
	</div>
</template>

<script setup lang="ts">
defineProps<{ list: object[], }>()
</script>

<style lang="scss" scoped>
.slider {
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