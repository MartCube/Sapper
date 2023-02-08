<template>
	<form id="form" @submit="onSubmit" autocomplete="off">
		<div class="container">
			<h2 v-if="data.title" class="title">{{ data.title }}</h2>
			<div class="group">
				<VeeInput :data="data.name" />
				<VeeInput :data="data.email" />
				<VeeInput :data="data.phone" />
			</div>
			<VeeInput :data="data.message" />
			<!-- <VeeInput :name="message" type="textarea" /> -->
			<!-- <VeeTextarea :name="props.message"/> -->
	
			<button type="submit" :disabled="isSubmitting">
				<span class="submit">{{ t('form.submit') }}</span>
				<span class="loading">loading</span>
			</button>
	
			<!-- <div class="msg" v-if="showMsg">
				<h2>{{ t('form.message_title') }}</h2>
				<p>{{ t('form.message_greet') }}</p>
				<p>{{ t('form.message_reply') }}</p>
				<span>Write<span @click="showMsg = false">{{ t('form.new_message') }}</span>.</span>
			</div> -->
		</div>
	</form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import type { JobOfferForm } from "~~/src/assets/types";
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';
// import emailjs from '@emailjs/browser';
// import { promiseTimeout } from '@vueuse/core'
const { t } = useI18n()

let data: JobOfferForm = {
	title: 'Some title',
	email: {
		name: 'email',
		label: 'Email',
		type: 'input',
	},
	phone: {
		name: 'phone',
		label: 'Phone',
		type: 'input',
	},
	name: {
		name: 'name',
		label: 'Name',
		type: 'input',
	},
	message: {
		name: 'message',
		label: 'Message',
		type: 'textarea',
	},
}

const validationSchema = toFormValidator(
	z.object({
		'full name': z.string().min(1, 'Required'),
		email: z.string().min(1, 'Required').email(),
		phone: z.string().min(1, 'Required'),
		// message: z.string().min(1, 'Required').max(120),
	})
)

const showMsg = ref(false)

const { handleSubmit, isSubmitting } = useForm<JobOfferForm>({ validationSchema })

const onSubmit = handleSubmit(async (values, { resetForm}) => {
	console.log(values)

	showMsg.value = false
	resetForm()
})
</script>

<style lang="scss" scoped>
form {
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 2rem 0;
	.container {
		position: relative;
	}
	.group {
		display: flex;
		.field{
			&:not(:first-child):not(:last-child) {
				margin: 0 1rem;
			}
			height: fit-content;
		}
	}

	button {
		height: 2rem;
		overflow: hidden;
		margin-top: 4rem;
		border: none;
		border-radius: 4rem;
		cursor: pointer;
		
		display: flex;
		flex-direction: column;
		position: relative;
		align-self: center;
		margin-left: auto;
		margin-right: auto;
		background-color: $dark;
		min-width: 10rem;
		min-height: 4rem;
		span {
			width: 100%;
			height: 60px;
			display: flex;
			justify-content: center;

			color: $white;
			letter-spacing: 0.25rem;
			text-transform: uppercase;
			font-weight: 300;
			font-size: 1rem;
			line-height: 60px;

			// &::before,
			&::after {
				content: '';
				display: inline-block;
				width: 100%;
				height: 60px;
				opacity: 1;
				background: $dark;
				position: absolute;
				border-radius: 5rem;
				transform: scale(1);
				z-index: -1;
				transition: all 0.35s ease;
			}


			&.submit {
				// position: absolute;
				// top: 0;
				// left: 0;

				// transform: translateY(2rem);
				animation: sShow 350ms forwards normal;

				@keyframes sShow {
					from {
						transform: translateY(2rem);
					}

					to {
						transform: translateY(0);
					}
				}
			}

			&.loading {
				position: absolute;
				top: 0;
				left: 0;
				transform: translateY(2rem);
				opacity: 0;

				&::before,
				&::after {
					background: #60636C;
				}
			}
		}

		&:hover {
			overflow: visible;
			span {
				&::after {
					transform: scale(1.4);
					opacity: 0;
				}
			}
			.submit {
				color: $white-hover;
			}
		}
	}



	&.loading {
		.field {
			opacity: 0;
		}

		button {
			span.submit {
				animation: sLoading 350ms forwards normal;

				@keyframes sLoading {
					from {
						transform: translateY(0);
					}

					to {
						transform: translateY(-2rem);
					}
				}
			}

			span.loading {
				animation: lLoading 350ms forwards normal;

				@keyframes lLoading {
					from {
						transform: translateY(2rem);
					}

					to {
						transform: translateY(0);
					}
				}
			}
		}
	}

	.msg {
		position: absolute;
    top: 0;
    background-color: $white;
    width: calc(100% - 4rem);
    height: 100%;
		text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px -1px #cecece;
    border-radius: 1rem;
		span {
			text-decoration: underline;
			font-weight: 600;
			&:hover {
				cursor: pointer;
			}
		}
	}
	&.showMsg {
		
		.field {
			display: none;
		}

		.msg {
			transition: all 0.35s ease;
			z-index: 1;
			opacity: 1;
		}

		button {
			opacity: 0;

			span.submit {
				display: none;
			}

			span.loading {
				display: none;
			}
		}
	}

	@media (max-width: 1000px) {
		.group {
			flex-wrap: wrap;
			.field{
				&:not(:first-child):not(:last-child) {
					margin: 0 0 2rem 0;
				}
			}
		}
		.msg {
			width: 90%;
		}
	}
}
</style>