<template>
	<VApp>
		<header>
			<div>
				<div class="d-flex flex-row justify-center align-center my-4">
					<div class="bg-red rounded pa-1 mr-4 h-100">
						<VImg src="@/assets/cloud.svg" width="64px" height="64px" />
					</div>
					<h1 class="ma-0">New Superhero-Dashboard</h1>
				</div>

				<LogoutBtn />

				<nav>
					<VTabs align-tabs="center">
						<VTab to="/">Home</VTab>
						<VTab to="/login">Login</VTab>
					</VTabs>
					<VDivider />
				</nav>
			</div>
		</header>

		<main>
			<div class="d-flex justify-center">
				<RouterView />
			</div>
		</main>
	</VApp>
</template>

<script setup lang="ts">
import { LogoutBtn } from "@feature/logout";
import { RouterView } from "vue-router";
</script>
