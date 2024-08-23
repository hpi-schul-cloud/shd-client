<template>
	<div v-if="authStore.isLoggedIn" class="position-absolute top-0 right-0 ma-8">
		<span class="mr-2" data-testid="username">
			{{ `${authStore.me?.user.firstName} ${authStore.me?.user.lastName}` }}
		</span>
		<VBtn data-testid="logout-btn" @click="onLogout">{{
			$t("common.actions.logout")
		}}</VBtn>
	</div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@data/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

const onLogout = async (): Promise<void> => {
	await authStore.logout();

	await router.push("/login");
};
</script>
