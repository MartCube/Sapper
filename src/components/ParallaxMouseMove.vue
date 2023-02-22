<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useParallax } from '@vueuse/core'
const target = ref(null)
const parallax = reactive(useParallax(target))

const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${
    parallax.tilt * 20
  }deg) translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) `,
}))
</script>

<template>
    <div  class="target">
      <div class="container" >
        <div class="card" >
          <div class="card-window" ref="target">
            <div
              :style="cardStyle"
              class="black"
            ></div>
					</div>
        </div>
      </div>
    
    </div>
</template>

<style lang="scss">
.card {
	background: #fff;
  height: 20rem;
  width: 15rem;
  border-radius: 5px;
  border: 1px solid #cdcdcd;
  // overflow: hidden;
  transition: .3s ease-out all;
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.25);
}
.card-window {
	background: rgb(255, 255, 255);
    height: 20rem;
    width: 15rem;
    border-radius: 5px;
    border: 1px solid rgb(205, 205, 205);
    // overflow: hidden;
		// position: relative;
		perspective: 300px;
    transition: all 0.3s ease-out 0s;
    box-shadow: rgb(255 255 255 / 25%) 0px 0px 20px 0px;
}
.target {
	display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 700px;
  transition: .3s ease-out all;
}
.container {
  margin: 3em auto;
  // perspective: 600px;
}
.black {
	background-color: black;
	position: absolute;
	height: 100%;
	width: 100%;
	transition: .3s ease-out all;
}
</style>