<template>
	<section class="richtext-form">
		<div class="container">
			<h2 class="titlek">{{ title }}</h2>
			<div class="text">
				<SanityContent :blocks="list" />
			</div>
			<button @click="isOpen = true" class="call-modal">Send the form</button>
		</div>
		<div v-if="isOpen" class="modal">
			<Icon class="close" @click="isOpen = false" name="ic:baseline-close" />
			<ContactForm name="Name" email="Email" phone="Phone" :title="title" message="Message"/>
		</div>
	</section>
</template>

<script setup lang="ts">
const isOpen = ref(false) // toggle modal

defineProps<{
	list: any[],
	title: string
}>()

</script>

<style lang="scss">
.richtext-form {
	width: 100%;
	padding: 3rem 0;
	display: flex;
	justify-content: center;
	
	p, a {
		font-size: 1.2rem;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.call-modal {
		text-decoration: none;
		padding: 1.5rem 4rem;
		display: inline-block;
		transition: all 2s;
		position: relative;
		font-size: 1rem;
		width: fit-content;
		margin: 3rem 2rem;
		font-weight: 600;
		border-radius: 100px;
		cursor: pointer;
		color: $white;
		background-color: $dark4;
		&::after {
			content: "";
			display: inline-block;
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			z-index: -1;
			transition: all .4s;
			border-radius: 100px;
			background-color: $dark4;
		}
		&:hover {
			transform: translateY(-0.3rem);
			box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
			border-radius: 100px;
			color: rgb($white, 80%);
			&::after {
				transform: scaleX(1.4) scaleY(1.6);
				opacity: 0;
			}
		}
	}
	.text {
		width: 100%;
		// padding-left: 3rem;
	}
	ul {
		font-size: 1.4rem;
		padding-left: 3rem;
		margin-top: 2rem;
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

	
	.modal {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $white;
		display: flex;
		justify-content: center;
		align-items: center;

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
		form {
			background-color: $white;
			.container {
				padding: 4rem 0;
				.title {
					text-align: center;
					margin-bottom: 4rem;
				}

			}
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

	@media (max-width: 600px) {
		ul {
			padding-left: 1rem;
		}
		form {
			button {
				margin-top: 1rem;
			}
			.container {
				padding: 0;
				.title {
					font-size: 2rem;
					line-height: 1;
					margin-bottom: 3rem;
				}
			}
		}
		.modal {
			align-items: flex-start;
			form {
				margin: 0;
				.container {
					padding: 0;
				}
				.feild {}
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