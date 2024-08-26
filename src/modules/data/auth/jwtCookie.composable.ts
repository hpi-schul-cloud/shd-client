import axios from "axios";
import Cookies from "universal-cookie";

export const useJwtCookie = () => {
	const getJwt = (): string | undefined => {
		const cookies = new Cookies();

		const jwt: string | undefined = cookies.get("jwt");

		return jwt;
	};

	const hasJwt = (): boolean => {
		return !!getJwt();
	};

	const setJwt = (jwt: string): void => {
		const cookies = new Cookies();

		cookies.set("jwt", jwt, {
			expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
		});

		axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
	};

	const removeJwt = (): void => {
		const cookies = new Cookies();

		cookies.remove("jwt");

		delete axios.defaults.headers.common["Authorization"];
	};

	return {
		getJwt,
		hasJwt,
		setJwt,
		removeJwt,
	};
};
