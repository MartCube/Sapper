<template>
	<footer>
		<div class="container">
			<div class="group">
				<div class="image">
					<img src="/logo-footer.png" alt="">
				</div>
				<div class="contact-info">
					<a href="tel:+3806974001236">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M38.8 23.65q-.25-6.05-4.45-10.25T24.1 8.95v-3q3.6.1 6.775 1.525Q34.05 8.9 36.45 11.3q2.4 2.4 3.825 5.575Q41.7 20.05 41.8 23.65Zm-8.45 0q-.25-2.5-2-4.225Q26.6 17.7 24.1 17.45v-3q3.75.25 6.375 2.85t2.875 6.35ZM39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>
						+380 69 740 01 23</a>
					<a href="mailto:mymail@gmail.com">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/></svg>
						mymail@gmail.com</a>
					<a href="javascript:;">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 23.5q1.45 0 2.475-1.025Q27.5 21.45 27.5 20q0-1.45-1.025-2.475Q25.45 16.5 24 16.5q-1.45 0-2.475 1.025Q20.5 18.55 20.5 20q0 1.45 1.025 2.475Q22.55 23.5 24 23.5Zm0 16.55q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Zm0-23.6Z"/></svg>
						Ukraine, Kyiv</a>
				</div>
				<div class="social-media">
					<NuxtLink :to="smedias?.instagram" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
					</NuxtLink>
					<NuxtLink :to="smedias?.facebook" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
					</NuxtLink>
					<NuxtLink :to="smedias?.facebook" external>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
					</NuxtLink>
				</div>
			</div>
			<div class="group">
				<h3 class="title">Lorem ipsum dolor sit.</h3>
				<p class="desription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odio, cumque laudantium ad quos cupiditate rem eveniet! Excepturi, dicta natus.</p>
				<button class="cta">Contact us</button>
			</div>
			<div class="group">
				<h3 class="title">About us</h3>
				<ul class="links">
					<li>
						<a href="#">Our team</a>
					</li>
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Job offers</a>
					</li>
					<li>
						<a href="#">Education</a>
					</li>
				</ul>
			</div>
			<div class="group">
				<h3 class="title">Sitemap</h3>
				<ul class="links">
					<li>
						<a href="#">About us</a>
					</li>
					<li>
						<a href="#">Mine action</a>
					</li>
					<li>
						<a href="#">Contacts</a>
					</li>
					<li>
						<a href="#">Lorem, ipsum.</a>
					</li>
				</ul>
			</div>

			<p class="copyright">© 2022 Sapper - All Rights Reserved.</p>

		</div>
	</footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const { smedias } = storeToRefs(useAppStore())
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
						width: 200px;
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