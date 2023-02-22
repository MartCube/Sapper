<template>
	<footer>
		<div class="container">
			<div class="group">
				<div class="image">
					<img src="/logo.jpg" alt="">
				</div>
				<div class="contact-info">
					<a :href="`tel:${info?.phone}`">
						<Icon name="ri:phone-fill" />
						{{ info?.phone }}
					</a>
					<a :href="`mailto:${info?.email}`">
						<Icon name="ri:mail-open-fill" />
						{{ info?.email }}
					</a>
					<a target="_blank" href="https://www.google.mk/maps/place/1B,+Vozdvyzhens'ka+St,+1%D0%91,+Kyiv,+Ukraine,+02000/@50.4621143,30.5064641,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce699f16510f:0xb06cbb87c055600a!8m2!3d50.4621143!4d30.5086528?hl=en&authuser=0">
						<Icon name="ri:map-pin-2-fill" />
						{{ info?.adress }}
					</a>
				</div>
				<div class="social-media">
					<NuxtLink :to="smedias?.instagram" external target="_blank">
						<Icon name="mdi:instagram" />
					</NuxtLink>
					<NuxtLink :to="smedias?.facebook" external target="_blank">
						<Icon name="mdi:facebook" />
					</NuxtLink>
					<NuxtLink :to="smedias?.youtube" external target="_blank">
						<Icon name="mdi:youtube" />
					</NuxtLink>
				</div>
			</div>
			<div class="group">
				<h3 class="title">{{ t('about_us') }}</h3>
				<p class="desription">{{ t('footer_text') }}</p>
				<NuxtLink :to="`${localePath({ name: 'page', params: { page: footerLinks?.at(-1)?.uid ?? ''  } })}/`" class="cta">{{ footerLinks?.at(-1)?.title }}</NuxtLink>
			</div>
			<div class="group">
				<h3 class="title">{{ t('about_us') }}</h3>
				<ul class="links">
					<li v-for="sublink in submenuLinks?.sublinks">
						<NuxtLink :to="`${localePath({ name: 'page', params: { page: sublink.uid } })}`">{{ sublink.title }}</NuxtLink>
					</li>
				</ul>
			</div>
			<div class="group">
				<h3 class="title">{{ t('sitemap') }}</h3>
				<ul class="links">
					<li v-for="link in footerLinks">
						<NuxtLink :to="`${localePath({ name: 'page', params: { page: link.uid } })}`">{{ link.title }}</NuxtLink>
					</li>
				</ul>
			</div>

			<p class="copyright">© 2022 Sapper - {{ t('rights') }}.</p>

		</div>
	</footer>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia'

const { locale, t} = useI18n({})
const { smedias, info, links } = storeToRefs(useAppStore())
const localePath = useLocalePath()

const footerLinks = computed( () => locale.value === 'ua' ? links.value?.ua : links.value?.en ) 
const submenuLinks = computed( () => footerLinks.value?.at(0)?.dropdown)

watch(locale, (oldLocale, newLocale) => {
	if(newLocale) {
		footerLinks
		submenuLinks
	}
})
</script>

<style lang="scss" scoped>
footer {
	width: 100%;
	background: $dark2;
	color: $white;
	padding: 3rem 0;

	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('/footer-bg.jpg');
	background-position: center;
	background-size: cover;

	@media (min-width: 1000px) {
		padding-left: 2rem;
		padding-right: 2rem;
	}
	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.copyright {
			display: flex;
			width: 100%;
		}
		.title {
			color: $white;
			font-size: 1.7rem;
			margin-bottom: 1rem;
		}
		.cta {
			text-transform: uppercase;
			padding: 0 70px;
			display: flex;
			width: fit-content;
			align-items: center;
			height: 70px;
			border-radius: 4rem;
			color: $white;
			background-color: transparent;
			border: 1px solid $white;
			font-size: 1rem;
			margin-top: 3rem;
			&:hover {
				background-color: $dark3;
			}
		}

		.contact-info {
			display: flex;
			flex-direction: column;
			margin: 1rem 0;
			a {
				color: $white;
				display: flex;
				align-items: center;
				margin-bottom: 10px;
				svg {
					width: 30px;
					height: 30px;
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
		.links {
			list-style-type: none;
			li {
				a {
					color: $white;
					display: flex;
					align-items: center;
					margin-bottom: 10px;	
					&::before {
						content: '';
						margin-right: 10px;
						width: 10px;
						height: 3px;
						background-color: $white;
						display: inline-block;
					}
					&:hover {
						color: $white-hover
					}
				}
			}
		}
		.social-media {
			display: flex;
			margin-bottom: 2rem;
			a {
				color: $white;
				border: 1px solid $white;
				margin: 0 15px 0 0;
				padding: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				svg {
					width: 20px;
					fill: $white;
				}
				&:hover {
					color: $white-hover;
					svg {
						fill: $white-hover;
					}
				}
			}
		}
		.group {
			&:nth-child(1) {
				width: 20%;
				.image {
					img {
						background-color: $white;
						width: 150px;
						border-radius: 15px;
					}
				}
			}
			&:nth-child(2) {
				width: 40%;
				padding: 0 2rem;
			}
			&:nth-child(3) {
				width: 15%;
			}
			&:nth-child(4) {
				width: 15%;
			}

		}
		@media (max-width: 1000px) {
			.group {
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3),
				&:nth-child(4) {
					width: 50%;
					margin-bottom: 3rem;
				}
			}
		}

		@media (max-width: 600px) {
			.cta {
				margin: 2rem auto;
			}
			.copyright {
				justify-content: center;
			}
			.contact-info {
				a {
					justify-content: center;
				}
			}
			.social-media {
				justify-content: center;
				a:last-child{
					margin-right: 0;
				}
			}

			.links li a {
				justify-content: center;
				position: relative;
				height: 30px;
				&::before {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.group {
				&:nth-child(1),
				&:nth-child(2),
				&:nth-child(3),
				&:nth-child(4) {
					width: 100%;
					justify-content: center;
					text-align: center;
				}
			}
		}
	}
	
}
</style>