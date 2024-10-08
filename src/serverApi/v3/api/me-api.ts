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
import { MeResponse } from '../models';
/**
 * MeApi - axios parameter creator
 * @export
 */
export const MeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Resolve jwt and response informations about the owner of the jwt.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meControllerMe: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/me`;
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
 * MeApi - functional programming interface
 * @export
 */
export const MeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Resolve jwt and response informations about the owner of the jwt.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async meControllerMe(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.meControllerMe(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MeApi - factory interface
 * @export
 */
export const MeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MeApiFp(configuration)
    return {
        /**
         * 
         * @summary Resolve jwt and response informations about the owner of the jwt.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        meControllerMe(options?: any): AxiosPromise<MeResponse> {
            return localVarFp.meControllerMe(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MeApi - interface
 * @export
 * @interface MeApi
 */
export interface MeApiInterface {
    /**
     * 
     * @summary Resolve jwt and response informations about the owner of the jwt.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeApiInterface
     */
    meControllerMe(options?: any): AxiosPromise<MeResponse>;

}

/**
 * MeApi - object-oriented interface
 * @export
 * @class MeApi
 * @extends {BaseAPI}
 */
export class MeApi extends BaseAPI implements MeApiInterface {
    /**
     * 
     * @summary Resolve jwt and response informations about the owner of the jwt.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MeApi
     */
    public meControllerMe(options?: any) {
        return MeApiFp(this.configuration).meControllerMe(options).then((request) => request(this.axios, this.basePath));
    }
}
