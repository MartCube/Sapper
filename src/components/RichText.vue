<template>
	<section class="richtext">
		<div class="container">
			<SanityContent :blocks="list" />
		</div>
	</section>
</template>

<script setup lang="ts">

defineProps<{
	list: any[],
}>()
</script>

<style lang="scss">
.richtext {
	width: 100%;
	padding: 3rem 0;
	display: flex;
	justify-content: center;

	p, a {
		font-size: 1.4rem;
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