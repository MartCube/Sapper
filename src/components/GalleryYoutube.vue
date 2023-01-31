<template>
	<section class="gallery-youtube">
		<div class="container">
			<div class="grid">
				<div v-for="(image, index) in list" :key="index" @click="Open(index)" class="placeholder">
					<img :src="`http://i3.ytimg.com/vi/${image}/hqdefault.jpg`" :width="300" :height="450" />
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
.gallery-youtube .container{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	.lightbox {
		position: fixed;
		z-index: 2;
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
			stroke: rgb(255,255,255, 50%);
			fill: none;
			transition: all 0.2s ease;
			&:hover {
				cursor: pointer;
				stroke: $dark;
			}
		}
		.prev {
			top: 50%;
			left: 1rem;
			transform: rotate(180deg);
		}
		.next {
			top: 50%;
			right: 1rem;
		}
		.close {
			top: 1rem;
			right: 1rem;
		}
	}
	.grid {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.placeholder {
			width: 370px;
			height: 263px;
			margin-bottom: 4rem;
			img {
				width: 100%;
				height: 100%;
			}
			&:hover {
				cursor: pointer;
			}
		}
	}
}
</style>