<template>
	<div class="achivments">
		<h2>achivments</h2>
	</div>
</template>

<script setup lang="ts">
defineProps<{ list: object[], }>()
</script>

<style lang="scss" scoped>
.achivments {
	width: 100%;
	height: 50vh;
	background: $dark3;
	color: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;


}
</style>