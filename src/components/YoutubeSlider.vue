<template>
	<section class="slider-youtube">
		<div class="container">
			<div class="grid">
				<carousel :breakpoints="{
						// 700px and up
						320: {
							itemsToShow: 1,
							snapAlign: 'center',
						},
						700: {
							itemsToShow: 2,
							snapAlign: 'center',
						},
						// 1024 and up
						1024: {
							itemsToShow: 3,
							snapAlign: 'start',
						},
					}">
					<slide v-for="(image, index) in list" :key="index">
						<div  @click="Open(index)" class="placeholder" :class="{one: list.length === 1, two: list.length === 2 }">
							<Icon name="ic:baseline-play-circle-filled-white" />
							<img :src="`http://i3.ytimg.com/vi/${image}/hqdefault.jpg`" :width="300" :height="450" />
						</div>
					</slide>

					<template #addons>
						<navigation />
						<pagination />
					</template>
				</carousel>
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
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


const props = defineProps<{
	// title: string,
	list: string[];
}>()
defineComponent({ Carousel,Slide,Pagination,Navigation})


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

<style lang="scss" >
.slider-youtube {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 4rem 0;
	position: relative;
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
		// width: 100%;
		// display: flex;
		// justify-content: space-between;
		// flex-wrap: wrap;
		.placeholder {
			width: 100%;
			height: 20vw;
			margin: 1rem;
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
		@media (max-width: 1000px) {
			.placeholder,
			.placeholder.two {
				width: 49%;
				height: 35vw;
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
	.carousel__prev, .carousel__next {
		background-color: $dark3;
		color: $white;
		padding: 10px;
		border-radius: 5px;
		font-size: 1.5rem;
		&:hover {
			opacity: 0.7;
		}
	}
	.carousel__pagination {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		.carousel__pagination-button {
			&::after {
				transition: all 0.5s linear;
				background-color: rgb($dark3, 50%);
				width: 3rem;
				border-radius: 10px;
				height: 7px;
			}
			&.carousel__pagination-button--active {
				&::after {
					background-color: $dark;
					width: 5rem;
				}
			}
		} 
	}
	.carousel {
		padding-bottom: 2rem;
	}
}
</style>