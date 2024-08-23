import axios from "axios";
import { useJwtCookie } from "./jwtCookie.composable";

jest.mock("axios");

describe("Jwt Cookie Utils", () => {
	beforeEach(() => {
		document.cookie = `jwt=1; expires=1 Jan 1970 00:00:00 GMT;`;
	});

	describe("getJwt", () => {
		describe("when there is no jwt cookie", () => {
			it("should return undefined", () => {
				const result = useJwtCookie().getJwt();

				expect(result).toEqual(undefined);
			});
		});

		describe("when there is a jwt cookie", () => {
			const setup = () => {
				const cookieValue = "testValue";

				document.cookie = `jwt=${cookieValue}`;

				return {
					cookieValue,
				};
			};

			it("should return the cookie value", () => {
				const { cookieValue } = setup();

				const result = useJwtCookie().getJwt();

				expect(result).toEqual(cookieValue);
			});
		});
	});

	describe("hasJwt", () => {
		describe("when there is no jwt cookie", () => {
			it("should return false", () => {
				const result = useJwtCookie().hasJwt();

				expect(result).toEqual(false);
			});
		});

		describe("when there is a jwt cookie", () => {
			const setup = () => {
				document.cookie = "jwt=testValue";
			};

			it("should return true", () => {
				setup();

				const result = useJwtCookie().hasJwt();

				expect(result).toEqual(true);
			});
		});
	});

	describe("setJwt", () => {
		describe("when setting a jwt cookie", () => {
			const setup = () => {
				const cookieValue = "testValue";

				return {
					cookieValue,
				};
			};

			it("should return set the cookie", () => {
				const { cookieValue } = setup();

				useJwtCookie().setJwt(cookieValue);

				expect(document.cookie).toEqual(`jwt=${cookieValue}`);
			});

			it("should return set the bearer token for axios", () => {
				const { cookieValue } = setup();

				useJwtCookie().setJwt(cookieValue);

				expect(axios.defaults.headers.common["Authorization"]).toEqual(
					`Bearer ${cookieValue}`
				);
			});
		});
	});

	describe("removeJwt", () => {
		describe("when removing the jwt", () => {
			const setup = () => {
				document.cookie = "jwt=testValue";
				axios.defaults.headers.common["Authorization"] = "testValue";
			};

			it("should clear the jwt cookie", () => {
				setup();

				useJwtCookie().removeJwt();

				expect(document.cookie).toEqual("");
			});

			it("should clear the bearer token for axios", () => {
				setup();

				useJwtCookie().removeJwt();

				expect(axios.defaults.headers.common["Authorization"]).toEqual(
					undefined
				);
			});
		});
	});
});
