<template>
	<div class="intro">
		<h1>pageIntro</h1>
		<h2>{{ title }}</h2>
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
	height: 50vh;
	background: $dark2;
	color: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.breadcrumbs {
		a {
			color: $white;

			&:first-child {
				margin-right: 2rem;
			}
		}

	}
}
</style>