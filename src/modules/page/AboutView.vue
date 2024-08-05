<template>
	<main>
		<h3>This is the new and improved Superhero-Dashboard!</h3>
		<VBtn @click="counter++">{{ counter }}</VBtn>
	</main>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const counter: Ref<number> = ref(0);
</script>
