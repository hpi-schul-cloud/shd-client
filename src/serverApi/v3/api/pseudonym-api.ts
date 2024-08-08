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
import { PseudonymResponse } from '../models';
/**
 * PseudonymApi - axios parameter creator
 * @export
 */
export const PseudonymApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns the related user and tool information to a pseudonym
         * @param {string} pseudonym 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pseudonymControllerGetPseudonym: async (pseudonym: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'pseudonym' is not null or undefined
            assertParamExists('pseudonymControllerGetPseudonym', 'pseudonym', pseudonym)
            const localVarPath = `/pseudonyms/{pseudonym}`
                .replace(`{${"pseudonym"}}`, encodeURIComponent(String(pseudonym)));
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
 * PseudonymApi - functional programming interface
 * @export
 */
export const PseudonymApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PseudonymApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns the related user and tool information to a pseudonym
         * @param {string} pseudonym 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async pseudonymControllerGetPseudonym(pseudonym: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PseudonymResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.pseudonymControllerGetPseudonym(pseudonym, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PseudonymApi - factory interface
 * @export
 */
export const PseudonymApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PseudonymApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns the related user and tool information to a pseudonym
         * @param {string} pseudonym 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pseudonymControllerGetPseudonym(pseudonym: string, options?: any): AxiosPromise<PseudonymResponse> {
            return localVarFp.pseudonymControllerGetPseudonym(pseudonym, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PseudonymApi - interface
 * @export
 * @interface PseudonymApi
 */
export interface PseudonymApiInterface {
    /**
     * 
     * @summary Returns the related user and tool information to a pseudonym
     * @param {string} pseudonym 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PseudonymApiInterface
     */
    pseudonymControllerGetPseudonym(pseudonym: string, options?: any): AxiosPromise<PseudonymResponse>;

}

/**
 * PseudonymApi - object-oriented interface
 * @export
 * @class PseudonymApi
 * @extends {BaseAPI}
 */
export class PseudonymApi extends BaseAPI implements PseudonymApiInterface {
    /**
     * 
     * @summary Returns the related user and tool information to a pseudonym
     * @param {string} pseudonym 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PseudonymApi
     */
    public pseudonymControllerGetPseudonym(pseudonym: string, options?: any) {
        return PseudonymApiFp(this.configuration).pseudonymControllerGetPseudonym(pseudonym, options).then((request) => request(this.axios, this.basePath));
    }
}