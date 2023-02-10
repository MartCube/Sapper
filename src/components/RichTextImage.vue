<template>
	<section class="richtext-image">
		<div class="container">
			<div class="image-wrapper">
				<AppImage :src="image" :alt="alt" ref="imageParalax"/>
				<span>{{ alt }}</span>
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
	image: string,
	alt: string,
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
	p {
		margin-bottom: 15px;
	}
	ul {
		font-size: 1.2rem;
		padding-left: 3rem;
		// margin-top: 2rem;
		list-style-type: none;
		li {
			display: flex;
			align-items: center;
			&::before {
				content: '';
				display: block;
				min-width: 7px;
				height: 3px;
				background-color: $dark;
				margin-right: 1rem;
			}
		}
	}

	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.image-wrapper {
			width: 700px;
			height: 700px;
			overflow: hidden;
			display: flex;
			padding: 7rem ;
			position: relative;
			.image {
				overflow: hidden;
				border-radius: 50%;
				border: 20px solid $dark;
				width: 100%;
				height: auto;
			}
			span {
				position: absolute;
				bottom: 2rem;
				z-index: 4;
				color: $dark;
				font-weight: 600;
				line-height: 1;
				font-size: 1.4rem;
				text-align: center;
				width: calc(100% - 14rem);
			}
		}
		.text {
			width: calc(100% - 700px);
			padding-left: 3rem;
		}
	}

	@media (max-width: 1260px) {
		.container {
			.image-wrapper {
				width: 45vw;
				height: 45vw;
				padding: 4rem;
				span {
					bottom: 0;
					width: calc(100% - 8rem);
				}
			}
			.text {
				width: calc(100% - 45vw);
			}
		}
	}
	@media (max-width: 1000px) {
		.container {
			.image-wrapper {
				width: 75vw;
				height: 85vw;
				padding: 0 0 5rem 0;
				margin-left: auto;
				margin-right: auto;
				span {
					width: 100%;
				}
			}
			.image {
				width: 70vw;
				height: 70vw;
				padding: 0;
				margin: 0 auto;
			}
			.text {
				margin-top: 3rem;
				width: 100%;
				padding-left: 0;
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