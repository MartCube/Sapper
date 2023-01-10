<template>
	<div id="error">
		<div class="card">
			<nuxt-img src="/chopper.png" format="webp" loading="lazy" />
			<h2>{{ error.statusCode }}</h2>
			<p>{{ error.statusMessage }}</p>
			<button @click="handleError">to home page</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Error } from "~~/src/assets/types";


defineProps<{
	error: Error;
}>()

const handleError = () => clearError({ redirect: '/' })
</script>

<style lang="scss">
#error {
	width: 100vw;
	height: 100vh;
	padding: 4rem 10%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.card {
		width: 12rem;
		height: 22rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;


		img {
			width: 10rem;
			height: 12.5rem;
		}

		h2 {
			font-weight: 400;
			font-size: 3rem;
			line-height: 3rem;
		}

		p {
			font-weight: 300;
			font-size: 1rem;
			line-height: 1rem;
		}

		button {
			width: 100%;
			height: 2rem;
			border: none;
			background: transparent;
			cursor: pointer;

			color: $white;
			letter-spacing: 1px;
			text-transform: uppercase;
			font-weight: 300;
			font-size: 1rem;
			line-height: 2rem;

			display: flex;
			justify-content: space-between;

			&::before,
			&::after {
				content: '';
				display: inline-block;
				width: 1px;
				height: 100%;
				background: $white;
				transition: width 0.35s ease;
			}
		}
	}
}
</style>
