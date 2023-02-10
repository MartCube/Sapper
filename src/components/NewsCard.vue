<template>
	<div  class="item">
		<div class="image-wrapper">
			<AppImage :src="data.image"/>
		</div>
		<div class="text">
			<h3 class="title">{{ dataTitle }}</h3>
			<p class="description">{{ dataDescription }}</p>
			<NuxtLink :to="`/${locale === 'ua' ? 'novunu' : 'blog'}/${data.uid}/`" class="link">{{ t('read_more') }}</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const props = defineProps<{ 
	data: {
		uid: string,
		title: string,
		image: string,
		description: string,
	},
}>()

const dataTitle = computed ( () => {
	return `${props.data.title.slice(0, 77)}...`
})
const dataDescription = computed ( () => {
	return `${props.data.description.slice(0, 147)}...`
})
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	width: 30%;
	flex-direction: column;
	justify-content: flex-start;
	padding: 1.5rem;
	text-align: center;
	background-color: $white;
	border-radius: 5px;
	margin: 1.6%;
	box-shadow: 3px 3px 13px 0 rgb(0 0 0 / 10%);
	.title {
		font-size: 1.3rem;
		line-height: 1.5rem;
		max-height: 3rem;
		overflow: hidden;
	}
	.text {
		display: flex;
		flex-direction: column;
		height: -webkit-fill-available;
	}
	.description {
		margin-bottom: 1rem;
	}
	.link {
		height: 70px;
		line-height: 70px;
		display: inline-block;
		background-color: $dark;
		color: $white;
		font-weight: 600;
		border: 1px solid;
		padding: 0 50px;
		position: relative;
		font-size: 16px;
		border-radius: 100px;
		margin-top: auto;
		justify-self: flex-end;
		width: fit-content;
		align-self: center;
	}
	.image-wrapper {
		width: 100%;
		height: 14rem;
		overflow: hidden;
		.image {
			width: 100%;
			height: 100%;
			display: block;
			object-fit: cover;
			object-position: center;
			transition: all 0.3s ease-in;
		}
	}
	&:hover {
		.image-wrapper {
			.image {
				transform: scale(1.1);
			}
		}
		.link {
			background-color: #1a1a1a;
		}
	}

	@media (max-width: 1000px) {
		width: 100%;
		margin-bottom: 4rem;
		height: fit-content;
	}
}
</style>