import {
	AuthenticationApiFactory,
	AuthenticationApiInterface,
	MeApiFactory,
	MeApiInterface,
	MeResponse,
	MeRoleResponse,
	RoleName,
} from "@/serverApi/v3";
import { $axios } from "@/utils/api";
import { ApplicationError, HttpStatusCode } from "@data/application-error";
import { defineStore } from "pinia";
import { computed, ComputedRef, Ref, ref } from "vue";
import { useJwtCookie } from "./jwtCookie.composable";

export const useAuthStore = defineStore("auth", () => {
	const { hasJwt, setJwt, removeJwt } = useJwtCookie();

	const me: Ref<MeResponse | null> = ref(null);

	const meApi = (): MeApiInterface => {
		return MeApiFactory(undefined, "v3", $axios);
	};

	const authenticationApi = (): AuthenticationApiInterface => {
		return AuthenticationApiFactory(undefined, "v3", $axios);
	};

	const login = async (username: string, password: string): Promise<void> => {
		const { data } = await authenticationApi().loginControllerLoginLocal({
			username,
			password,
		});

		setJwt(data.accessToken);

		await fetchMe();

		if (
			!me.value?.roles.find(
				(role: MeRoleResponse): boolean => role.name === RoleName.SUPERHERO
			)
		) {
			await logout();

			throw new ApplicationError({
				statusCode: HttpStatusCode.Forbidden,
				message: "User is not a superhero",
				translationKey: "error.login.noSuperhero",
			});
		}
	};

	const logout = async (): Promise<void> => {
		try {
			await $axios.delete("/v1/authentication");
		} catch (e: unknown) {
			// Ignore error
		}

		me.value = null;

		removeJwt();
	};

	const fetchMe = async (): Promise<void> => {
		const { data } = await meApi().meControllerMe();

		me.value = data;
	};

	const isLoggedIn: ComputedRef<boolean> = computed(() => {
		return me.value !== null && hasJwt();
	});

	return {
		me,
		login,
		logout,
		fetchMe,
		isLoggedIn,
	};
});
