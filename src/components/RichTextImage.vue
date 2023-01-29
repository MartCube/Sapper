<template>
	<section class="richtext-image">
		<div class="container">
			<div class="image">
				<SanityImage :src="image" ref="imageParalax"/>
			</div>
			<div class="text">
				<SanityContent :blocks="list" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core'

defineProps<{
	list: any[],
	image: string
}>()

const imageParalax = ref(null)
const { tilt, roll, source } = useParallax(imageParalax)
</script>

<style lang="scss">
.richtext-image {
	width: 100%;
	padding: 3rem 0;
	display: flex;
	justify-content: center;

	p, a {
		font-size: 1.2rem;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		.image {
			width: 700px;
			height: 700px;
			overflow: hidden;
			border-radius: 50%;
			padding: 0 7rem 14rem;
			.image-wrapper {
				overflow: hidden;
				border-radius: 50%;
				border: 20px solid $dark;
				width: 100%;
			}
		}
		.text {
			width: calc(100% - 700px);
			padding-left: 3rem;
		}
	}

	@media (max-width: 1260px) {
		.container {
			.image {
				width: 45vw;
				height: 45vw;
				padding: 0 4rem 8rem;
			}
			.text {
				width: calc(100% - 45vw);
			}
		}
	}
	@media (max-width: 1000px) {
		.container {
			.image {
				width: 70vw;
				height: 70vw;
				padding: 0;
				margin: 0 auto;
			}
			.text {
				margin-top: 3rem;
				width: 100%;
			}
		}
	}

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