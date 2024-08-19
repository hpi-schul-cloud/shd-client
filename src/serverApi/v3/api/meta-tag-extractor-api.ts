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
import { GetMetaTagDataBody } from '../models';
// @ts-ignore
import { MetaTagExtractorResponse } from '../models';
/**
 * MetaTagExtractorApi - axios parameter creator
 * @export
 */
export const MetaTagExtractorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary return extract meta tags
         * @param {GetMetaTagDataBody} getMetaTagDataBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaTagExtractorControllerGetMetaTags: async (getMetaTagDataBody: GetMetaTagDataBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'getMetaTagDataBody' is not null or undefined
            assertParamExists('metaTagExtractorControllerGetMetaTags', 'getMetaTagDataBody', getMetaTagDataBody)
            const localVarPath = `/meta-tag-extractor`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getMetaTagDataBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MetaTagExtractorApi - functional programming interface
 * @export
 */
export const MetaTagExtractorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MetaTagExtractorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary return extract meta tags
         * @param {GetMetaTagDataBody} getMetaTagDataBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async metaTagExtractorControllerGetMetaTags(getMetaTagDataBody: GetMetaTagDataBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MetaTagExtractorResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.metaTagExtractorControllerGetMetaTags(getMetaTagDataBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MetaTagExtractorApi - factory interface
 * @export
 */
export const MetaTagExtractorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MetaTagExtractorApiFp(configuration)
    return {
        /**
         * 
         * @summary return extract meta tags
         * @param {GetMetaTagDataBody} getMetaTagDataBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        metaTagExtractorControllerGetMetaTags(getMetaTagDataBody: GetMetaTagDataBody, options?: any): AxiosPromise<MetaTagExtractorResponse> {
            return localVarFp.metaTagExtractorControllerGetMetaTags(getMetaTagDataBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MetaTagExtractorApi - interface
 * @export
 * @interface MetaTagExtractorApi
 */
export interface MetaTagExtractorApiInterface {
    /**
     * 
     * @summary return extract meta tags
     * @param {GetMetaTagDataBody} getMetaTagDataBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaTagExtractorApiInterface
     */
    metaTagExtractorControllerGetMetaTags(getMetaTagDataBody: GetMetaTagDataBody, options?: any): AxiosPromise<MetaTagExtractorResponse>;

}

/**
 * MetaTagExtractorApi - object-oriented interface
 * @export
 * @class MetaTagExtractorApi
 * @extends {BaseAPI}
 */
export class MetaTagExtractorApi extends BaseAPI implements MetaTagExtractorApiInterface {
    /**
     * 
     * @summary return extract meta tags
     * @param {GetMetaTagDataBody} getMetaTagDataBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetaTagExtractorApi
     */
    public metaTagExtractorControllerGetMetaTags(getMetaTagDataBody: GetMetaTagDataBody, options?: any) {
        return MetaTagExtractorApiFp(this.configuration).metaTagExtractorControllerGetMetaTags(getMetaTagDataBody, options).then((request) => request(this.axios, this.basePath));
    }
}
