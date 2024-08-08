/* tslint:disable */
/* eslint-disable */
/**
 * Schulcloud-Verbund-Software Server API
 * This is v3 of Schulcloud-Verbund-Software Server. Checkout /docs for v1.
 *
 * The version of the OpenAPI document: 3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AccountByIdBodyParams } from '../models';
// @ts-ignore
import { AccountResponse } from '../models';
// @ts-ignore
import { AccountSearchListResponse } from '../models';
// @ts-ignore
import { EntityNotFoundError } from '../models';
// @ts-ignore
import { ForbiddenOperationError } from '../models';
// @ts-ignore
import { PatchMyAccountParams } from '../models';
// @ts-ignore
import { PatchMyPasswordParams } from '../models';
// @ts-ignore
import { ValidationError } from '../models';
/**
 * AccountApi - axios parameter creator
 * @export
 */
export const AccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerDeleteAccountById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('accountControllerDeleteAccountById', 'id', id)
            const localVarPath = `/account/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerFindAccountById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('accountControllerFindAccountById', 'id', id)
            const localVarPath = `/account/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates the the temporary account password for the authenticated user.
         * @param {PatchMyPasswordParams} patchMyPasswordParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerReplaceMyPassword: async (patchMyPasswordParams: PatchMyPasswordParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'patchMyPasswordParams' is not null or undefined
            assertParamExists('accountControllerReplaceMyPassword', 'patchMyPasswordParams', patchMyPasswordParams)
            const localVarPath = `/account/me/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchMyPasswordParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns all accounts which satisfies the given criteria. For unlimited access Superhero role is REQUIRED.
         * @param {'userId' | 'username'} type The search criteria.
         * @param {string} value The search value.
         * @param {number} [skip] Number of elements (not pages) to be skipped
         * @param {number} [limit] Page limit, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerSearchAccounts: async (type: 'userId' | 'username', value: string, skip?: number, limit?: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('accountControllerSearchAccounts', 'type', type)
            // verify required parameter 'value' is not null or undefined
            assertParamExists('accountControllerSearchAccounts', 'value', value)
            const localVarPath = `/account`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (value !== undefined) {
                localVarQueryParameter['value'] = value;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {AccountByIdBodyParams} accountByIdBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateAccountById: async (id: string, accountByIdBodyParams: AccountByIdBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('accountControllerUpdateAccountById', 'id', id)
            // verify required parameter 'accountByIdBodyParams' is not null or undefined
            assertParamExists('accountControllerUpdateAccountById', 'accountByIdBodyParams', accountByIdBodyParams)
            const localVarPath = `/account/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountByIdBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updates an account for the authenticated user.
         * @param {PatchMyAccountParams} patchMyAccountParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateMyAccount: async (patchMyAccountParams: PatchMyAccountParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'patchMyAccountParams' is not null or undefined
            assertParamExists('accountControllerUpdateMyAccount', 'patchMyAccountParams', patchMyAccountParams)
            const localVarPath = `/account/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchMyAccountParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountApi - functional programming interface
 * @export
 */
export const AccountApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerDeleteAccountById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerDeleteAccountById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Returns an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerFindAccountById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerFindAccountById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates the the temporary account password for the authenticated user.
         * @param {PatchMyPasswordParams} patchMyPasswordParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerReplaceMyPassword(patchMyPasswordParams: PatchMyPasswordParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerReplaceMyPassword(patchMyPasswordParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Returns all accounts which satisfies the given criteria. For unlimited access Superhero role is REQUIRED.
         * @param {'userId' | 'username'} type The search criteria.
         * @param {string} value The search value.
         * @param {number} [skip] Number of elements (not pages) to be skipped
         * @param {number} [limit] Page limit, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerSearchAccounts(type: 'userId' | 'username', value: string, skip?: number, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountSearchListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerSearchAccounts(type, value, skip, limit, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {AccountByIdBodyParams} accountByIdBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerUpdateAccountById(id: string, accountByIdBodyParams: AccountByIdBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerUpdateAccountById(id, accountByIdBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updates an account for the authenticated user.
         * @param {PatchMyAccountParams} patchMyAccountParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountControllerUpdateMyAccount(patchMyAccountParams: PatchMyAccountParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountControllerUpdateMyAccount(patchMyAccountParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountApi - factory interface
 * @export
 */
export const AccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerDeleteAccountById(id: string, options?: any): AxiosPromise<AccountResponse> {
            return localVarFp.accountControllerDeleteAccountById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerFindAccountById(id: string, options?: any): AxiosPromise<AccountResponse> {
            return localVarFp.accountControllerFindAccountById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates the the temporary account password for the authenticated user.
         * @param {PatchMyPasswordParams} patchMyPasswordParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerReplaceMyPassword(patchMyPasswordParams: PatchMyPasswordParams, options?: any): AxiosPromise<void> {
            return localVarFp.accountControllerReplaceMyPassword(patchMyPasswordParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns all accounts which satisfies the given criteria. For unlimited access Superhero role is REQUIRED.
         * @param {'userId' | 'username'} type The search criteria.
         * @param {string} value The search value.
         * @param {number} [skip] Number of elements (not pages) to be skipped
         * @param {number} [limit] Page limit, defaults to 10.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerSearchAccounts(type: 'userId' | 'username', value: string, skip?: number, limit?: number, options?: any): AxiosPromise<AccountSearchListResponse> {
            return localVarFp.accountControllerSearchAccounts(type, value, skip, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an account with given id. Superhero role is REQUIRED.
         * @param {string} id The id for the account.
         * @param {AccountByIdBodyParams} accountByIdBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateAccountById(id: string, accountByIdBodyParams: AccountByIdBodyParams, options?: any): AxiosPromise<AccountResponse> {
            return localVarFp.accountControllerUpdateAccountById(id, accountByIdBodyParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updates an account for the authenticated user.
         * @param {PatchMyAccountParams} patchMyAccountParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountControllerUpdateMyAccount(patchMyAccountParams: PatchMyAccountParams, options?: any): AxiosPromise<void> {
            return localVarFp.accountControllerUpdateMyAccount(patchMyAccountParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccountApi - interface
 * @export
 * @interface AccountApi
 */
export interface AccountApiInterface {
    /**
     * 
     * @summary Deletes an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerDeleteAccountById(id: string, options?: any): AxiosPromise<AccountResponse>;

    /**
     * 
     * @summary Returns an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerFindAccountById(id: string, options?: any): AxiosPromise<AccountResponse>;

    /**
     * 
     * @summary Updates the the temporary account password for the authenticated user.
     * @param {PatchMyPasswordParams} patchMyPasswordParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerReplaceMyPassword(patchMyPasswordParams: PatchMyPasswordParams, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Returns all accounts which satisfies the given criteria. For unlimited access Superhero role is REQUIRED.
     * @param {'userId' | 'username'} type The search criteria.
     * @param {string} value The search value.
     * @param {number} [skip] Number of elements (not pages) to be skipped
     * @param {number} [limit] Page limit, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerSearchAccounts(type: 'userId' | 'username', value: string, skip?: number, limit?: number, options?: any): AxiosPromise<AccountSearchListResponse>;

    /**
     * 
     * @summary Updates an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {AccountByIdBodyParams} accountByIdBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerUpdateAccountById(id: string, accountByIdBodyParams: AccountByIdBodyParams, options?: any): AxiosPromise<AccountResponse>;

    /**
     * 
     * @summary Updates an account for the authenticated user.
     * @param {PatchMyAccountParams} patchMyAccountParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApiInterface
     */
    accountControllerUpdateMyAccount(patchMyAccountParams: PatchMyAccountParams, options?: any): AxiosPromise<void>;

}

/**
 * AccountApi - object-oriented interface
 * @export
 * @class AccountApi
 * @extends {BaseAPI}
 */
export class AccountApi extends BaseAPI implements AccountApiInterface {
    /**
     * 
     * @summary Deletes an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerDeleteAccountById(id: string, options?: any) {
        return AccountApiFp(this.configuration).accountControllerDeleteAccountById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerFindAccountById(id: string, options?: any) {
        return AccountApiFp(this.configuration).accountControllerFindAccountById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates the the temporary account password for the authenticated user.
     * @param {PatchMyPasswordParams} patchMyPasswordParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerReplaceMyPassword(patchMyPasswordParams: PatchMyPasswordParams, options?: any) {
        return AccountApiFp(this.configuration).accountControllerReplaceMyPassword(patchMyPasswordParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns all accounts which satisfies the given criteria. For unlimited access Superhero role is REQUIRED.
     * @param {'userId' | 'username'} type The search criteria.
     * @param {string} value The search value.
     * @param {number} [skip] Number of elements (not pages) to be skipped
     * @param {number} [limit] Page limit, defaults to 10.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerSearchAccounts(type: 'userId' | 'username', value: string, skip?: number, limit?: number, options?: any) {
        return AccountApiFp(this.configuration).accountControllerSearchAccounts(type, value, skip, limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an account with given id. Superhero role is REQUIRED.
     * @param {string} id The id for the account.
     * @param {AccountByIdBodyParams} accountByIdBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerUpdateAccountById(id: string, accountByIdBodyParams: AccountByIdBodyParams, options?: any) {
        return AccountApiFp(this.configuration).accountControllerUpdateAccountById(id, accountByIdBodyParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updates an account for the authenticated user.
     * @param {PatchMyAccountParams} patchMyAccountParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountApi
     */
    public accountControllerUpdateMyAccount(patchMyAccountParams: PatchMyAccountParams, options?: any) {
        return AccountApiFp(this.configuration).accountControllerUpdateMyAccount(patchMyAccountParams, options).then((request) => request(this.axios, this.basePath));
    }
}
