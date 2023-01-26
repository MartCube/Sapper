<template>
	<div class="field">
		<div class="error">
			<span v-show="errorMessage"> {{ errorMessage }} </span>
		</div>
		<input v-model="value" type="text" :id="name" :name="name" :placeholder="name" />
		<div class="line" />
	</div>
</template>
  
<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

const props = defineProps<{ name: string }>()

const nameRef = toRef(props, 'name')
const { errorMessage, value } = useField(nameRef)
</script>

<style lang="scss" scoped>
.field {
	width: 100%;
	margin-bottom: 2rem;

	display: flex;
	flex-direction: column;
	position: relative;
	transition: all 0.25s ease;

	.error {
		display: flex;
		overflow: hidden;
		height: 0.75rem;

		span {
			color: $error;
			font-weight: 300;
			font-size: .75rem;
			line-height: .75rem;
			animation: errorShow 150ms forwards normal;

			@keyframes errorShow {
				from {
					transform: translateY(-120%);
				}

				to {
					transform: translateY(0);
				}
			}
		}
	}

	input {
		border: none;
		border-bottom: 3px solid $dark;
		background: transparent;
		padding: 1rem;

		color: $dark;
		font-size: 1rem;
		line-height: 4rem;
		letter-spacing: 1px;
		height: 4.5rem;
		box-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
		border-radius: 5px;
		&::placeholder {
			color: $dark4;
			text-transform: capitalize;
		}

		&:focus {
			&::placeholder {
				color: $dark;
				opacity: 1;
			}

			~.line {
				width: 100%;

			}
		}



		animation: inputShow 550ms forwards normal;

		@keyframes inputShow {
			from {
				width: 0;
			}

			to {
				width: 100%;
			}
		}
	}

	.line {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 1px;
		background: $dark;
		transition: all 0.25s ease;
	}
}
</style>