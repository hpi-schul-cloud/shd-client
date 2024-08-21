<template>
	<VCard
		class="mx-auto px-12 py-6 mt-8"
		elevation="8"
		max-width="448"
		rounded="lg"
	>
		<VCardTitle class="mb-4 text-center">SuperHero-Login</VCardTitle>

		<div class="text-subtitle-1 text-medium-emphasis">E-Mail Adresse</div>
		<VTextField
			v-model="username"
			density="compact"
			:prepend-inner-icon="mdiEmailOutline"
			placeholder="E-Mail Adresse"
			variant="outlined"
		/>

		<div class="text-subtitle-1 text-medium-emphasis">Password</div>
		<VTextField
			v-model="password"
			:append-inner-icon="showPassword ? mdiEyeOff : mdiEye"
			:type="showPassword ? 'text' : 'password'"
			density="compact"
			:prepend-inner-icon="mdiLockOutline"
			placeholder="Password"
			variant="outlined"
			@click:append-inner="showPassword = !showPassword"
		/>

		<div class="text-subtitle-1 text-medium-emphasis">
			Zwei-Faktor-Authentifizierung
		</div>
		<VTextField
			v-model="totp"
			density="compact"
			:prepend-inner-icon="mdiTwoFactorAuthentication"
			placeholder="Time-based one-time password (TOTP)"
			variant="outlined"
		/>

		<VCard v-if="error" class="mb-12" color="error" variant="tonal">
			<VCardText class="text-medium-emphasis text-caption">
				{{ error.message }}
			</VCardText>
		</VCard>

		<VBtn
			class="mb-8"
			color="primary"
			size="large"
			variant="tonal"
			block
			@click="onLogin"
			@keyup.enter="onLogin"
		>
			Log In
		</VBtn>
	</VCard>
</template>

<script setup lang="ts">
import { useAuthStore } from "@data/auth";
import {
	mdiEmailOutline,
	mdiEye,
	mdiEyeOff,
	mdiLockOutline,
	mdiTwoFactorAuthentication,
} from "@mdi/js";
import { Ref, ref } from "vue";
import { LocationQueryValue, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const showPassword: Ref<boolean> = ref(false);

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");
const totp: Ref<string> = ref("");

const error: Ref<Error | null> = ref(null);

const onLogin = async () => {
	try {
		await authStore.login(username.value, password.value, totp.value);
	} catch (err: unknown) {
		error.value =
			err instanceof Error ? err : new Error("Es ist ein Fehler aufgetreten");

		return;
	}

	const redirectQuery: LocationQueryValue | LocationQueryValue[] =
		router.currentRoute.value.query["redirect"];

	let redirect = "/";
	if (typeof redirectQuery === "string") {
		redirect = decodeURIComponent(redirectQuery);
	}

	await router.replace(redirect);
};
</script>
