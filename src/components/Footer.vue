<template>
	<footer>
		<h2>footer</h2>
		<NuxtLink :to="smedias?.facebook" external>facebook</NuxtLink>
		<NuxtLink :to="smedias?.instagram" external>instagram</NuxtLink>
	</footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { smedias } = storeToRefs(useAppStore())
</script>

<style lang="scss" scoped>
footer {
	width: 100%;
	height: 50vh;
	background: $dark2;
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