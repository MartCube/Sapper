<template>
	<div class="intro">
		<h1>{{ title }}</h1>
		<div class="breadcrumbs">
			<NuxtLink to="/">home</NuxtLink>
			<NuxtLink to="/">{{ title }}</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ title: string, }>()
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	height: 80vh;
	background: $dark2;
	color: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/page-header.jpg');
	background-size: cover;
	background-position: center;

	h1 {
		font-size: 5rem;
		font-weight: 600;
		&::first-letter {
			text-transform: uppercase;
		}
	}
	.breadcrumbs {
		display: flex;
		align-items: center;
		a {
			// display: flex;
			color: $white;
			font-size: 1.4rem;
			&::first-letter {
				text-transform: uppercase;
			}
			&:first-child {
				margin-right: 1rem;
				&::after {
					content: '>';
					margin-left: 1rem;
				}
			}
		}

	}
}
</style>