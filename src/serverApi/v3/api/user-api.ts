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
import { ChangeLanguageParams } from '../models';
// @ts-ignore
import { ResolvedUserResponse } from '../models';
// @ts-ignore
import { SuccessfulResponse } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {ChangeLanguageParams} changeLanguageParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerChangeLanguage: async (changeLanguageParams: ChangeLanguageParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'changeLanguageParams' is not null or undefined
            assertParamExists('userControllerChangeLanguage', 'changeLanguageParams', changeLanguageParams)
            const localVarPath = `/user/language`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(changeLanguageParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerMe: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/me`;
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
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {ChangeLanguageParams} changeLanguageParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerChangeLanguage(changeLanguageParams: ChangeLanguageParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerChangeLanguage(changeLanguageParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userControllerMe(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResolvedUserResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userControllerMe(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @param {ChangeLanguageParams} changeLanguageParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerChangeLanguage(changeLanguageParams: ChangeLanguageParams, options?: any): AxiosPromise<SuccessfulResponse> {
            return localVarFp.userControllerChangeLanguage(changeLanguageParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userControllerMe(options?: any): AxiosPromise<ResolvedUserResponse> {
            return localVarFp.userControllerMe(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - interface
 * @export
 * @interface UserApi
 */
export interface UserApiInterface {
    /**
     * 
     * @param {ChangeLanguageParams} changeLanguageParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerChangeLanguage(changeLanguageParams: ChangeLanguageParams, options?: any): AxiosPromise<SuccessfulResponse>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerMe(options?: any): AxiosPromise<ResolvedUserResponse>;

}

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI implements UserApiInterface {
    /**
     * 
     * @param {ChangeLanguageParams} changeLanguageParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userControllerChangeLanguage(changeLanguageParams: ChangeLanguageParams, options?: any) {
        return UserApiFp(this.configuration).userControllerChangeLanguage(changeLanguageParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userControllerMe(options?: any) {
        return UserApiFp(this.configuration).userControllerMe(options).then((request) => request(this.axios, this.basePath));
    }
}