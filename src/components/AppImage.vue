<template>
	<div class="image">
		<!-- format="auto" -->
		<SanityImage :asset-id="src" :w="width" :h="height" fit="crop" crop="focalpoint" :fp-x="hotspot?.x" :fp-y="hotspot?.y">
			<template #default="{ src }">
				<img v-lazy="src" :title="title" :alt="alt" />
			</template>
		</SanityImage>
		<!-- <span v-if="alt">{{ alt }}</span> -->
	</div>
</template>

<script setup lang="ts">

defineProps<{
	src: string,
	alt?: string,
	width?: number,
	height?: number,
	title?: string,
	hotspot?: {
		x: string,
		y: string
	},
}>()

</script>

<style lang="scss" scoped>
.image {
	width: inherit;
	height: inherit;
	// width: v-bind(width);
	// height: v-bind(height);
	display: flex;

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