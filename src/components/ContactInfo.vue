<template>
	<div class="contact-info">
		<div class="container">
			<div class="item">
				<div class="icon-wrapper">
					<Icon :name="phone.icon" />
				</div>
				<span class="title">{{ phone.title }}</span>
				<a :href="`tel:${phone.value}`">{{ phone.value }}</a>
			</div>
			<div class="item">
				<div class="icon-wrapper">
					<Icon :name="email.icon" />
				</div>
				<span class="title">{{ email.title }}</span>
				<a :href="`tel:${email.value}`">{{ email.value }}</a>
			</div>
			<div class="item">
				<div class="icon-wrapper">
					<Icon :name="address.icon" />
				</div>
				<span class="title">{{ address.title }}</span>
				<span>{{ address.value }}</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{ 
	email: {
		icon: string,
		value: string,
		title: string
	}, 
	phone: {
		icon: string,
		value: string,
		title: string
	}, 
	address: {
		icon: string,
		value: string,
		title: string
	}, 
}>()
</script>

<style lang="scss" scoped>
.contact-info {
	display: flex;
	width: 100%;
	margin: 4rem 0;
	justify-content: center;
	.container {
		display: flex;		
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.item {
		width: 30%;
		margin: 1rem 0;
		padding: 2.5rem;
		box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);
		border-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		.icon-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 5px;
			background-color: $dark;
			color: $white;
			width: 70%;
			height: 50%;
			padding: 1.5rem;
			svg {
				width: 5rem;
				height: 5rem;
			}
		}
		.title {
			text-transform: uppercase;
			font-weight: 600;
			margin: 1.5rem 0 .5rem;
		}
	}
	@media (max-width: 900px) {
		.container {
			justify-content: center;
		}
		.item {
			width: 70%;
		}
	}
	@media (max-width: 400px) {
		.item {
			width: 90%;
		}
	}
}
</style>