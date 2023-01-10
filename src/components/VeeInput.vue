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
		border-bottom: 1px solid $bg-secondary;
		background: transparent;
		padding: 0.5rem 0;

		color: $white;
		font-size: 1rem;
		font-weight: 100;
		line-height: 1rem;
		letter-spacing: 1px;

		&::placeholder {
			color: $light-grey;
			text-transform: capitalize;
		}

		&:focus {
			&::placeholder {
				color: $white;
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
		background: $primary;
		transition: all 0.25s ease;
	}
}
</style>