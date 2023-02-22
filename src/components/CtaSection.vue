<template>
	<section class="cta-section">
		<div class="container">
			<h2>{{ title }}</h2>
			<div class="contact-info">
				<a :href="`tel:${info?.phone}`">
					<Icon name="ri:phone-fill" />
					{{ info?.phone }}
				</a>
				<a :href="`mailto:${info?.email}`">
					<Icon name="ri:mail-open-fill" />
					{{ info?.email }}
				</a>
			</div>
			
		</div>
	</section>
</template>

<script setup lang="ts">
import { useParallax } from '@vueuse/core'
import { storeToRefs } from 'pinia'

defineProps<{
	title: string,
}>()

const { smedias, info, links } = storeToRefs(useAppStore())
const imageParalax = ref(null)
const { tilt, roll, source } = useParallax(imageParalax)
</script>

<style lang="scss">
.cta-section {
	width: 100%;
	padding: 4rem 0;
	display: flex;
	justify-content: center;
	background-image: url('/client-bg.png');
	background-position: center;
	background-size: cover;

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
		h2 {
			text-align: center;
			color: $white;
			margin-bottom: 4rem;
		}
		.contact-info {
			display: flex;
			width: 100%;
			margin: 1rem 0;
			justify-content: space-evenly;
			a {
				color: $white;
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				font-size: 2rem;
				border: 1px solid ;
				padding: 2rem;
				border-radius: 1rem;
				svg {
					width: 50px;
					height: 50px;
					fill: $white;
					margin-right: 10px;
				}
				&:hover {
					color: $white-hover;
					svg {
						fill: $white-hover;
					}
				}
			}
		}
	}


	@media (max-width: 1000px) {
		.container {
			.contact-info {
				flex-wrap: wrap;
				justify-content: space-evenly;
				a {
					font-size: 1.2rem;
					margin-bottom: 3rem;	
					padding: 1.3rem;
				}
			} 
			h2 {
				line-height: 1.5;
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