<template>
	<section class="gallery">
		<div class="container">
			<div class="grid">
				<div v-for="(image, index) in images" :key="index" @click="Open(index)" class="placeholder">
					<AppImage :src="image" :width="740" :height="526" />
				</div>
			</div>
			<div v-if="isOpen" class="lightbox">
				<div class="wrapper" ref="img">
					<AppImage :src="state" :width="1280" :height="720" />
					<Icon class="prev" @click="prev()" name="ic:baseline-arrow-back-ios-new" />
					<Icon class="next" @click="next()" name="ic:baseline-arrow-forward-ios" />
					<Icon class="close" @click="isOpen = false" name="ic:baseline-close" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useCycleList, onKeyStroke, onClickOutside, useSwipe } from '@vueuse/core'
const props = defineProps<{
	// title: string,
	images: string[];
}>()
const img = ref(null)	// image ref
const isOpen = ref(false) // toggle lightbox
const { state, next, prev, index } = useCycleList(props.images)
// open lightbox
function Open(value: number) {
	isOpen.value = true
	index.value = value
}
// close lightbox
onClickOutside(img, (event) => {
	isOpen.value = false
})
// onKeyStroke
onKeyStroke(['Escape', 'ArrowLeft', 'ArrowRight'], (e: KeyboardEvent) => {
	if (!isOpen.value) return
	switch (e.key) {
		case 'Escape':
			isOpen.value = false
			break
		case 'ArrowLeft':
			prev()
			break
		case 'ArrowRight':
			next()
			break
	}
})

</script>

<style lang="scss" scoped>
.gallery {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 3rem 0;
	.lightbox {
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb($dark4, 80%);
		display: flex;
		justify-content: center;
		align-items: center;
		.image {
			height: 100%;
			user-select: none;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}
		.icon {
			position: absolute;
			width: 3rem;
			height: 3rem;
			// stroke: $white;
			color: $white;
			transition: all 0.2s ease;
			
			&:hover {
				cursor: pointer;
				color: rgb($white, 70%);
				animation-play-state: running;
			}
		}
		.prev {
			top: 48%;
			left: 1rem;
			animation: shift 0.4s ease infinite alternate-reverse;
			animation-play-state: paused;
		}
		.next {
			top: 48%;
			right: 1rem;
			animation: shift 0.4s ease infinite alternate-reverse;
			animation-play-state: paused;
		}
		.close {
			top: 1rem;
			right: 1rem;
			&:hover {
				background-color: $dark;
				padding: 3px;
				transform: scale(0.7);
			}
		}
	}
	.grid {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		.placeholder {
			width: 30%;
			height: 20vw;
			margin: 15px;
			.image {
				width: 100%;
				height: 100%;
			}
			img {
				width: 100%;
				height: 100%;
			}
			&:hover {
				cursor: pointer;
			}

		}
	}
	@media (max-width: 1000px) {
		.lightbox {
			.wrapper {
				width: 100%;
				.image {
					width: 100%;
				}
			}
		}
		.grid {
			justify-content: space-between;
			.placeholder {
				width: 44%;
				height: 30vw;
			}
		}
	}
	@media (max-width: 1000px) {
		.lightbox {
			.wrapper {
				width: 85%;
				.image {
					width: 100%;
				}
			}
		}
		.grid {
			justify-content: space-between;
			.placeholder {
				width: 95%;
				height: 60vw;
			}
		}
	}
	@keyframes shift {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-5px);
		}
	}
}
</style>