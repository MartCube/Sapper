<template>
	<section class="image">
		<!-- format="auto" -->
		<div class="container"> 
			<SanityImage :asset-id="src" :w="width" :h="height" >
				<template #default="{ src }">
					<img v-lazy="src" />
				</template>
			</SanityImage>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	src: string,
	width?: number,
	height?: number,
}>()

</script>

<style lang="scss" scoped>
.image {
	width: inherit;
	height: inherit;
	// width: v-bind(width);
	// height: v-bind(height);
	display: flex;
	justify-content: center;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		outline: none;
		border: none;
		opacity: 0;
		transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
		// image transition 
		&[lazy=loading] {
			opacity: 0;
		}
		&[lazy=error] {
			opacity: 0;
		}
		&[lazy=loaded] {
			opacity: 1;
		}
	}
}
</style>