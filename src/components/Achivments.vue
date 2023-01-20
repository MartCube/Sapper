<template>
	<div class="achivments">
		<div class="container">
			<div class="item">
				<h3 class="title">Mine action</h3>
				<div class="image">
					<span class="border_layer"></span>
					<img src="../public/team.png" alt="">
				</div>
				<p class="description">Humanitarian demining is the clearing of areas and objects from explosive objects carried out in order to ensure the safety of life of the population</p>
			</div>
			<div class="item">
				<h3 class="title">What we do</h3>
				<div class="image">
					<span class="border_layer"></span>
					<img src="../public/like.png" alt="">
				</div>
				<p class="description">Our mission is to provide safe and reliable humanitarian demining services</p>
			</div>
			<div class="item">
				<h3 class="title">Our units</h3>
				<div class="image">
					<span class="border_layer"></span>
					<img src="../public/handshake.png" alt="">
				</div>
				<p class="description">
					– Non-technical survey and public information unit 
					<br>	– Technical survey unit 
					<br>	– Demining unit 
					<br>	– Mines and explosive objects destruction unit
				</p>
			</div>
			<div class="item">
				<h3 class="title">Training</h3>
				<div class="image">
					<span class="border_layer"></span>
					<img src="../public/satisfaction.png" alt="">
				</div>
				<p class="description">We organize training for new employees and improve the skills of our experts.</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ list: object[], }>()
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
	background-image: url('./public/quality-bg.png');
	background-position: center;
	background-size: cover;
	.container {
		max-width: 1300px;
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
			h3 {
				font-size: 1.5rem;
			}
			.description {
				text-align: center;
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
				img {
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