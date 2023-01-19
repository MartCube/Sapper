<template>
	<div>
		<h2>contact form</h2>
	</div>
	<!-- <form ref="form" id="form" :class="formStateAnim" @submit="onSubmit" autocomplete="off">
		<VeeInput :name="props.email" />
		<VeeInput :name="props.subject" />
		<VeeInput :name="props.message" />

		<button type="submit" :disabled="isSubmitting">
			<span class="submit">submit</span>
			<span class="loading">loading</span>
		</button>

		<div class="msg">
			<h2>message sent</h2>
			<p>Thanks for being awesome!</p>
			<p>I will replay by email as soon as possible.</p>
			<p>Write<span @click="formStateAnim = 'showForm'"> new message</span>.</p>
		</div>
	</form> -->
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import type { ContactForm } from "~~/src/assets/types";
import { toFormValidator } from '@vee-validate/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { promiseTimeout } from '@vueuse/core'

const props = defineProps<{
	name: string;
	email: string;
	phone: string;
	message: string;
}>()

const formStateAnim = ref<string>('showForm')
const form = ref<string | HTMLFormElement>('')
const validationSchema = toFormValidator(
	z.object({
		name: z.string().min(1, 'Required'),
		email: z.string().min(1, 'Required').email(),
		phone: z.string().min(1, 'Required'),
		message: z.string().min(1, 'Required').max(120),
	})
)

const { handleSubmit, isSubmitting, } = useForm<ContactForm>({ validationSchema })

const onSubmit = handleSubmit(async (values, actions) => {
	formStateAnim.value = 'loading'
	//send data
	emailjs.sendForm('service_l807s5g', 'template_l807s5g', form.value, 'O9kaL-kw7T0WfpVbt').then((result) => { console.log('SUCCESS!', result.text) }, (error) => { console.log('FAILED...', error.text) },)
	// loading animation
	await promiseTimeout(750)
	// reset form
	formStateAnim.value = 'showMsg'
	actions.resetForm()
})
</script>

<style lang="scss" scoped>
form {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;

	button[type="submit"] {
		height: 2rem;
		overflow: hidden;
		margin-top: 4rem;
		border: none;
		background: transparent;
		cursor: pointer;

		display: flex;
		flex-direction: column;
		position: relative;

		span {
			width: 100%;
			height: 2rem;
			display: flex;
			justify-content: space-between;

			color: $white;
			letter-spacing: 0.25rem;
			text-transform: uppercase;
			font-weight: 300;
			font-size: 1rem;
			line-height: 2rem;

			&::before,
			&::after {
				content: '';
				display: inline-block;
				width: 1px;
				height: 100%;
				background: $white;
				transition: width 0.35s ease;
			}


			&.submit {
				position: absolute;
				top: 0;
				left: 0;

				transform: translateY(2rem);
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

				&::before,
				&::after {
					background: #60636C;
				}
			}
		}

		&:hover {
			.submit {
				color: $dark;
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

}
</style>