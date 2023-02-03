<template>
	<div id="app">
		<!-- <Navbar /> -->
		<NuxtPage />
		<Footer />
	</div>
</template>

<script setup lang="ts">
useAppStore()
</script>


<style lang="scss" scoped>
#app {
	width: 100%;
	height: 100%;
	// min-height: 100vh;

	display: flex;
	flex-direction: column;
}
</style>
