<template>
	<section class="testimonials">
		<div class="container">
			<h2 v-if="title" class="title">{{ title }}</h2>
			<div v-for="item in list" :key="item._key" class="item">
				<span class="bg-icon">
					<Icon name="fa-solid:quote-right" />
				</span>
				<h3 class="title">{{ item.title }}</h3>
				<p class="description">{{ item.description }}</p>
				<div class="image">
					<span class="border_layer"></span>
					<Icon :name="item.icon" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{ 
	title?: string,
	list: {
		icon: string,
		description: string,
		title: string,
		_key: string,
	}[], 
}>()
</script>

<style lang="scss" scoped>
.testimonials {
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
		justify-content: space-evenly;
		.title {
			width: 100%;
			text-align: center;
		}
		.item {
			display: flex;
			flex-direction: column;
			padding: 46px 20px 54px 20px;
			align-items: center;
			color: $dark;
			width: 30%;
			border-radius: 5px;
			position: relative;
			justify-content: space-between;
			.bg-icon {
				position: absolute;
				z-index: 0;
				top: 40%;
				left: 50%;
				transform: rotate(15deg) translateX(-50%);
				color: hsl(0deg, 0%, 94%);
				svg {
					width: 100px;
					height: 100px;
					transform: rotateZ(-10deg);
				}
			}
			.title {
				font-size: 1.7rem;
				text-align: center;
				min-height: 3rem;
				line-height: 1;
				position: relative;
				z-index: 3;
			}
			.description {
				text-align: center;
				font-size: 1.2rem;
				position: relative;
				z-index: 3;
				margin-bottom: auto;
			}
			.image {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 120px;
				height: 120px;
				background-color: $white;
				border-radius: 50%;
				box-shadow: 0 0 20px -6px hsl(0, 0%, 85%);
				border: 5px solid hsl(0, 0%, 95%);
				margin: 2rem 0;
				z-index: 3;
				position: relative;
				svg {
					width: 70px;
					height: auto;
					object-position: center;
					object-fit: contain;	
				}
			}
	
		}

		@media (max-width: 1000px) {
			justify-content: center;
			.item {
				width: 48%;
			}
		}
		@media (max-width: 800px) {
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