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
	p {
		margin-bottom: 15px;
	}

	ul {
		font-size: 1.4rem;
		padding-left: 3rem;
		margin-top: 2rem;
		list-style-type: none;
		li {
			display: flex;
			align-items: center;
			font-weight: 100;
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
	// .v-enter-active,
	// .v-leave-active {
	// 	transition: all .35s ease;
	// }

	// .v-enter-from,
	// .v-leave-to {
	// 	opacity: 0
	// }
	@media (max-width: 1000px) {
		ul {
			// font-size: 1.2rem;
			padding-left: 1rem;
		}
	}
}
</style>