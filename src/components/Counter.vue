<template>
	<section class="counter">
		<div class="container">
			<div v-for="item in list" :key="item._key" class="item">
				<div class="image">
					<span class="border_layer"></span>
					<Icon :name="item.icon" />
				</div>
				<p class="number">{{ item.number }}</p>
				<h3 class="title">{{ item.title }}</h3>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{ list: {
	icon: string,
	number: number,
	title: string,
	_key: string,
}[], }>()
</script>

<style lang="scss" scoped>
.counter {
	padding: 4rem 0;
	width: 100%;
	background: $white;
	color: $dark;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.item {
			display: flex;
			flex-direction: column;
			padding: 46px 20px 54px 20px;
			align-items: center;
			color: $dark;
			width: 22%;
			border-radius: 5px;
			.title {
				font-size: 1.4rem;
				text-align: center;
				min-height: 3rem;
				line-height: 1;
				position: relative;
				&::after {
					content: '';
					width: 60%;
					bottom: -1.5rem;
					left: 20%;
					position: absolute;
					background-color: $dark;
					height: 6px;
					border-radius: 3px;
				}
			}
			.number {
				text-align: center;
				font-size: 3rem;
				font-weight: 600;
			}
			.image {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 120px;
				height: 120px;
				background-color: $dark;
				border-radius: 5px;
				margin: 2rem 0;
				position: relative;
				color: $white;
				svg {
					width: 70px;
					height: auto;
					object-position: center;
					object-fit: contain;	
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