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
import { PublicSystemListResponse } from '../models';
// @ts-ignore
import { PublicSystemResponse } from '../models';
// @ts-ignore
import { SystemType } from '../models';
/**
 * SystemsApi - axios parameter creator
 * @export
 */
export const SystemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deletes a system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerDeleteSystem: async (systemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('systemControllerDeleteSystem', 'systemId', systemId)
            const localVarPath = `/systems/{systemId}`
                .replace(`{${"systemId"}}`, encodeURIComponent(String(systemId)));
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
         * This endpoint is used to show users the possible login systems that exist. No sensible data should be returned!
         * @summary Finds all publicly available systems.
         * @param {SystemType} [types] The type of the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerFind: async (types?: SystemType, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/systems/public`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (types !== undefined) {
                localVarQueryParameter['types'] = types;
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
         * This endpoint is used to get information about a possible login systems. No sensible data should be returned!
         * @summary Finds a publicly available system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerGetSystem: async (systemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('systemControllerGetSystem', 'systemId', systemId)
            const localVarPath = `/systems/public/{systemId}`
                .replace(`{${"systemId"}}`, encodeURIComponent(String(systemId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * SystemsApi - functional programming interface
 * @export
 */
export const SystemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SystemsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deletes a system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemControllerDeleteSystem(systemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.systemControllerDeleteSystem(systemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint is used to show users the possible login systems that exist. No sensible data should be returned!
         * @summary Finds all publicly available systems.
         * @param {SystemType} [types] The type of the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemControllerFind(types?: SystemType, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicSystemListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.systemControllerFind(types, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint is used to get information about a possible login systems. No sensible data should be returned!
         * @summary Finds a publicly available system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async systemControllerGetSystem(systemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PublicSystemResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.systemControllerGetSystem(systemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SystemsApi - factory interface
 * @export
 */
export const SystemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SystemsApiFp(configuration)
    return {
        /**
         * 
         * @summary Deletes a system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerDeleteSystem(systemId: string, options?: any): AxiosPromise<void> {
            return localVarFp.systemControllerDeleteSystem(systemId, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint is used to show users the possible login systems that exist. No sensible data should be returned!
         * @summary Finds all publicly available systems.
         * @param {SystemType} [types] The type of the system.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerFind(types?: SystemType, options?: any): AxiosPromise<PublicSystemListResponse> {
            return localVarFp.systemControllerFind(types, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint is used to get information about a possible login systems. No sensible data should be returned!
         * @summary Finds a publicly available system.
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        systemControllerGetSystem(systemId: string, options?: any): AxiosPromise<PublicSystemResponse> {
            return localVarFp.systemControllerGetSystem(systemId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SystemsApi - interface
 * @export
 * @interface SystemsApi
 */
export interface SystemsApiInterface {
    /**
     * 
     * @summary Deletes a system.
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApiInterface
     */
    systemControllerDeleteSystem(systemId: string, options?: any): AxiosPromise<void>;

    /**
     * This endpoint is used to show users the possible login systems that exist. No sensible data should be returned!
     * @summary Finds all publicly available systems.
     * @param {SystemType} [types] The type of the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApiInterface
     */
    systemControllerFind(types?: SystemType, options?: any): AxiosPromise<PublicSystemListResponse>;

    /**
     * This endpoint is used to get information about a possible login systems. No sensible data should be returned!
     * @summary Finds a publicly available system.
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApiInterface
     */
    systemControllerGetSystem(systemId: string, options?: any): AxiosPromise<PublicSystemResponse>;

}

/**
 * SystemsApi - object-oriented interface
 * @export
 * @class SystemsApi
 * @extends {BaseAPI}
 */
export class SystemsApi extends BaseAPI implements SystemsApiInterface {
    /**
     * 
     * @summary Deletes a system.
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public systemControllerDeleteSystem(systemId: string, options?: any) {
        return SystemsApiFp(this.configuration).systemControllerDeleteSystem(systemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint is used to show users the possible login systems that exist. No sensible data should be returned!
     * @summary Finds all publicly available systems.
     * @param {SystemType} [types] The type of the system.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public systemControllerFind(types?: SystemType, options?: any) {
        return SystemsApiFp(this.configuration).systemControllerFind(types, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint is used to get information about a possible login systems. No sensible data should be returned!
     * @summary Finds a publicly available system.
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    public systemControllerGetSystem(systemId: string, options?: any) {
        return SystemsApiFp(this.configuration).systemControllerGetSystem(systemId, options).then((request) => request(this.axios, this.basePath));
    }
}
