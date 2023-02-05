<template>
	<section class="achivments">
		<div class="container">
			<div v-for="item in list" :key="item.title" class="item">
				<h3 class="title">{{ item.title }}</h3>
				<div class="image">
					<span class="border_layer"></span>
					<Icon :name="item.icon" />
				</div>
				<p class="description">{{ item.description }}</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{ list: {
	icon: string,
	description: string,
	title: string,
	key: string,
}[], }>()
</script>

<style lang="scss" scoped>
.achivments {
	padding: 4rem 0;
	width: 100%;
	background: $white;
	color: $dark;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/quality-bg.png');
	background-position: center;
	background-size: cover;
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		.item {
			display: flex;
			flex-direction: column;
			padding: 46px 20px 54px 20px;
			align-items: center;
			color: $dark;
			width: 22%;
			border-radius: 5px;
			.title {
				font-size: 1.7rem;
				text-align: center;
				min-height: 3rem;
				line-height: 1;
			}
			.description {
				text-align: center;
				font-size: 1.2rem;
			}
			.image {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 120px;
				height: 120px;
				background-color: $white;
				border-radius: 50%;
				box-shadow: 0 0 20px -6px #9e9e9e;
				margin: 2rem 0;
				position: relative;
				svg {
					width: 70px;
					height: auto;
					object-position: center;
					object-fit: contain;	
				}
			}
			.border_layer {
				position: absolute;
				width: 140px;
				height: 140px;
				left: -10px;
				top: -10px;
				border: 2px solid #fff;
				opacity: 0;
				border-radius: 50%;
				transition: all 500ms ease;
				animation: rotate_el 2s infinite linear;
				animation-play-state: paused;
				clip-path: polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%, 0 0);
				&:before {
					position: absolute;
					content: '';
					background: #fff;
					width: 12px;
					height: 12px;
					left: 15px;
					bottom: 9px;
					border-radius: 50%;
				}
			}

			&:hover {
				background-color: $dark4;
				color: $white;
				.image {
					svg {
						color: $dark4;
					}
				}
				.border_layer {
					animation-play-state: running;
					clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0 0);
					opacity: 1;
				}
			}
		}

		@media (max-width: 1000px) {
			.item {
				width: 48%;
			}
		}
		@media (max-width: 500px) {
			justify-content: center;
			.item {
				width: 90%;
			}
		}
	}
}

@keyframes rotate_el {
	0% {
			transform: rotate(0deg);
	}
	100% {
			transform: rotate(360deg);
	}
}
</style>