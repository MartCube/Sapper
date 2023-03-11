<template>
	<section class="gallery-youtube">
		<div class="container">
			<div class="grid">
				<div v-for="(image, index) in list" :key="index" @click="Open(index)" class="placeholder" :class="{one: list.length === 1, two: list.length === 2 }">
					<Icon name="ic:baseline-play-circle-filled-white" />
					<img :src="`https://i3.ytimg.com/vi/${image}/hqdefault.jpg`" :width="300" :height="450" />
				</div>
			</div>
			<div v-if="isOpen" class="lightbox">
				<div class="wrapper" ref="img">
					<Youtube :id="state"  />
					<!-- <Icon class="prev" @click="prev()" name="ic:baseline-arrow-back-ios-new" /> -->
					<!-- <Icon class="next" @click="next()" name="ic:baseline-arrow-forward-ios" /> -->
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
	list: string[];
}>()
const img = ref(null)	// image ref
const isOpen = ref(false) // toggle lightbox
const { state, next, prev, index } = useCycleList(props.list)
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
.gallery-youtube {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 4rem 0;
	.lightbox {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $dark4;
		display: flex;
		justify-content: center;
		align-items: center;
		.wrapper {
			height: 100%;
			width: 100%;
			user-select: none;
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
			background-color: $dark4;
			padding: 5px;
			border-radius: 5px;
			&:hover {
				background-color: $dark3;
				padding: 3px;
				transform: scale(0.7);
			}
		}
	}
	.grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.placeholder {
			width: 30%;
			height: 17vw;
			margin-bottom: 4rem;
			position: relative;
			border-radius: 4px;
			overflow: hidden;
			box-shadow: 0 0 26px -5px hsl(0deg 0% 45%);
			&.one {
				width: 80%;
				margin: auto;
				height: 40vw;
			}
			&.two {
				width: 49%;
				height: 30vw;
			}
			img {
				width: 100%;
				object-fit: cover;
				height: 100%;
				filter: brightness(0.4);
				transition: transform 0.3s ease-in;
			}
			svg {
				color: $white;
				font-size: 5rem;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 4;
			}
			&:hover {
				cursor: pointer;
				img {
					transform: scale(1.1);
				}
			}
		}
		@media (min-width: 1550px) {
			.placeholder,
			.placeholder.two {
				height: 14vw;
			}
			
		}
		@media (max-width: 1000px) {
			.placeholder,
			.placeholder.two {
				width: 49%;
				height: 26vw;
			}
			
		}
		@media (max-width: 600px) {
			.placeholder,
			.placeholder.two,
			.placeholder.one {
				width: 100%;
				height: 55vw;
			}
			
		}
	}
}
</style>