<template>
	<VCard class="mx-auto px-12 py-6 mt-8 container" elevation="8" rounded="lg">
		<VCardTitle class="mb-4 text-center">SuperHero-Login</VCardTitle>

		<VTextField
			v-model="username"
			:label="$t('common.words.emailAddress')"
			density="compact"
			:prepend-inner-icon="mdiEmailOutline"
			variant="outlined"
			data-testid="login-input-username"
		/>

		<VTextField
			v-model="password"
			:label="$t('common.words.password')"
			:append-inner-icon="showPassword ? mdiEyeOff : mdiEye"
			:type="showPassword ? 'text' : 'password'"
			density="compact"
			:prepend-inner-icon="mdiLockOutline"
			variant="outlined"
			@click:append-inner="showPassword = !showPassword"
			data-testid="login-input-password"
		/>

		<VBtn
			class="mb-8"
			color="primary"
			size="large"
			variant="tonal"
			block
			@click="onLogin"
			@keyup.enter="onLogin"
			data-testid="login-btn"
		>
			{{ $t("common.actions.login") }}
		</VBtn>

		<VAlert v-if="loginError" type="error" data-testid="login-error">
			{{ $t(loginError.translationKey) }}
		</VAlert>
	</VCard>
</template>

<script setup lang="ts">
import { ApplicationError } from "@data/application-error";
import { useAuthStore } from "@data/auth";
import { mdiEmailOutline, mdiEye, mdiEyeOff, mdiLockOutline } from "@mdi/js";
import { Ref, ref } from "vue";
import { LocationQueryValue, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const showPassword: Ref<boolean> = ref(false);

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");

const loginError: Ref<ApplicationError | null> = ref(null);

const onLogin = async () => {
	if (!username.value || !password.value) {
		return;
	}

	try {
		await authStore.login(username.value, password.value);
	} catch (err: unknown) {
		loginError.value = ApplicationError.fromUnknown(err);

		return;
	}

	const redirectQuery: LocationQueryValue | LocationQueryValue[] =
		router.currentRoute.value.query["redirect"];

	let redirect = "/";
	if (typeof redirectQuery === "string") {
		redirect = decodeURIComponent(redirectQuery);
	}

	await router.push(redirect);
};
</script>

<style scoped>
.container {
	width: 400px;
}

@media only screen and (max-width: 399px) {
	.container {
		width: 100%;
	}
}
</style>
