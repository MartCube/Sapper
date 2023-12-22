<template>
	<section class="intro">
				<AppImage  v-if="image" :src="image.ref" />
		<div class="container">
			<h1>{{ title }}</h1>
			<div class="breadcrumbs">
				<NuxtLink to="/" title="FREEWAYUA">{{ t('index') }}</NuxtLink>
				<NuxtLink to="/">{{ title }}</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { SanityImage } from '~/assets/types'
const { t } = useI18n({})

defineProps<{ title: string, image: SanityImage,}>()
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	height: 80vh;
	background: $dark2;
	color: $white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url('/page-header.jpg');
	background-size: cover;
	background-position: center;
	position: relative;
	overflow: hidden;
	.image	 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.5;
		max-width: initial !important;
	}
	h1 {
		font-size: 4.5rem;
		font-weight: 600;
		text-align: center;
		line-height: 1;

		&::first-letter {
			text-transform: uppercase;
		}
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		justify-content: center;

		a {
			// display: flex;
			color: $white;
			font-size: 1.4rem;

			&::first-letter {
				text-transform: uppercase;
			}

			&:first-child {
				margin-right: 1rem;

				&::after {
					content: '>';
					margin-left: 1rem;
				}
			}
		}

	}

	@media (max-width: 700px) {
		h1 {
			font-size: 3rem;
		}

		.breadcrumbs {
			a:last-child {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		.image {
			height: 100% !important;
		}
	}
}
</style>