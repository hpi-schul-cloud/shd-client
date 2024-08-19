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
import { ApiValidationError } from '../models';
// @ts-ignore
import { CreateMediaElementBodyParams } from '../models';
// @ts-ignore
import { MediaExternalToolElementResponse } from '../models';
// @ts-ignore
import { MoveElementBodyParams } from '../models';
/**
 * MediaElementApi - axios parameter creator
 * @export
 */
export const MediaElementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new element.
         * @param {CreateMediaElementBodyParams} createMediaElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerCreateElement: async (createMediaElementBodyParams: CreateMediaElementBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createMediaElementBodyParams' is not null or undefined
            assertParamExists('mediaElementControllerCreateElement', 'createMediaElementBodyParams', createMediaElementBodyParams)
            const localVarPath = `/media-elements`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createMediaElementBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a single element.
         * @param {string} elementId The id of the element
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerDeleteElement: async (elementId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'elementId' is not null or undefined
            assertParamExists('mediaElementControllerDeleteElement', 'elementId', elementId)
            const localVarPath = `/media-elements/{elementId}`
                .replace(`{${"elementId"}}`, encodeURIComponent(String(elementId)));
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
         * @summary Move a single element.
         * @param {string} elementId The id of the element
         * @param {MoveElementBodyParams} moveElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerMoveElement: async (elementId: string, moveElementBodyParams: MoveElementBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'elementId' is not null or undefined
            assertParamExists('mediaElementControllerMoveElement', 'elementId', elementId)
            // verify required parameter 'moveElementBodyParams' is not null or undefined
            assertParamExists('mediaElementControllerMoveElement', 'moveElementBodyParams', moveElementBodyParams)
            const localVarPath = `/media-elements/{elementId}/position`
                .replace(`{${"elementId"}}`, encodeURIComponent(String(elementId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(moveElementBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MediaElementApi - functional programming interface
 * @export
 */
export const MediaElementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaElementApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new element.
         * @param {CreateMediaElementBodyParams} createMediaElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaElementControllerCreateElement(createMediaElementBodyParams: CreateMediaElementBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaExternalToolElementResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaElementControllerCreateElement(createMediaElementBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a single element.
         * @param {string} elementId The id of the element
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaElementControllerDeleteElement(elementId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaElementControllerDeleteElement(elementId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Move a single element.
         * @param {string} elementId The id of the element
         * @param {MoveElementBodyParams} moveElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaElementControllerMoveElement(elementId: string, moveElementBodyParams: MoveElementBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaElementControllerMoveElement(elementId, moveElementBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediaElementApi - factory interface
 * @export
 */
export const MediaElementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaElementApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new element.
         * @param {CreateMediaElementBodyParams} createMediaElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerCreateElement(createMediaElementBodyParams: CreateMediaElementBodyParams, options?: any): AxiosPromise<MediaExternalToolElementResponse> {
            return localVarFp.mediaElementControllerCreateElement(createMediaElementBodyParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a single element.
         * @param {string} elementId The id of the element
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerDeleteElement(elementId: string, options?: any): AxiosPromise<void> {
            return localVarFp.mediaElementControllerDeleteElement(elementId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Move a single element.
         * @param {string} elementId The id of the element
         * @param {MoveElementBodyParams} moveElementBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaElementControllerMoveElement(elementId: string, moveElementBodyParams: MoveElementBodyParams, options?: any): AxiosPromise<void> {
            return localVarFp.mediaElementControllerMoveElement(elementId, moveElementBodyParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediaElementApi - interface
 * @export
 * @interface MediaElementApi
 */
export interface MediaElementApiInterface {
    /**
     * 
     * @summary Create a new element.
     * @param {CreateMediaElementBodyParams} createMediaElementBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApiInterface
     */
    mediaElementControllerCreateElement(createMediaElementBodyParams: CreateMediaElementBodyParams, options?: any): AxiosPromise<MediaExternalToolElementResponse>;

    /**
     * 
     * @summary Delete a single element.
     * @param {string} elementId The id of the element
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApiInterface
     */
    mediaElementControllerDeleteElement(elementId: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Move a single element.
     * @param {string} elementId The id of the element
     * @param {MoveElementBodyParams} moveElementBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApiInterface
     */
    mediaElementControllerMoveElement(elementId: string, moveElementBodyParams: MoveElementBodyParams, options?: any): AxiosPromise<void>;

}

/**
 * MediaElementApi - object-oriented interface
 * @export
 * @class MediaElementApi
 * @extends {BaseAPI}
 */
export class MediaElementApi extends BaseAPI implements MediaElementApiInterface {
    /**
     * 
     * @summary Create a new element.
     * @param {CreateMediaElementBodyParams} createMediaElementBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApi
     */
    public mediaElementControllerCreateElement(createMediaElementBodyParams: CreateMediaElementBodyParams, options?: any) {
        return MediaElementApiFp(this.configuration).mediaElementControllerCreateElement(createMediaElementBodyParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a single element.
     * @param {string} elementId The id of the element
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApi
     */
    public mediaElementControllerDeleteElement(elementId: string, options?: any) {
        return MediaElementApiFp(this.configuration).mediaElementControllerDeleteElement(elementId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Move a single element.
     * @param {string} elementId The id of the element
     * @param {MoveElementBodyParams} moveElementBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaElementApi
     */
    public mediaElementControllerMoveElement(elementId: string, moveElementBodyParams: MoveElementBodyParams, options?: any) {
        return MediaElementApiFp(this.configuration).mediaElementControllerMoveElement(elementId, moveElementBodyParams, options).then((request) => request(this.axios, this.basePath));
    }
}
