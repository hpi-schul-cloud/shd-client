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
import { CollapsableBodyParams } from '../models';
// @ts-ignore
import { ColorBodyParams } from '../models';
// @ts-ignore
import { LayoutBodyParams } from '../models';
// @ts-ignore
import { MediaAvailableLineResponse } from '../models';
// @ts-ignore
import { MediaBoardResponse } from '../models';
// @ts-ignore
import { MediaLineResponse } from '../models';
/**
 * MediaBoardApi - axios parameter creator
 * @export
 */
export const MediaBoardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Collapse available line in media board.
         * @param {string} boardId The id of the board.
         * @param {CollapsableBodyParams} collapsableBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerCollapseMediaAvailableLine: async (boardId: string, collapsableBodyParams: CollapsableBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'boardId' is not null or undefined
            assertParamExists('mediaBoardControllerCollapseMediaAvailableLine', 'boardId', boardId)
            // verify required parameter 'collapsableBodyParams' is not null or undefined
            assertParamExists('mediaBoardControllerCollapseMediaAvailableLine', 'collapsableBodyParams', collapsableBodyParams)
            const localVarPath = `/media-boards/{boardId}/media-available-line/collapse`
                .replace(`{${"boardId"}}`, encodeURIComponent(String(boardId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(collapsableBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new line on a media board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerCreateLine: async (boardId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'boardId' is not null or undefined
            assertParamExists('mediaBoardControllerCreateLine', 'boardId', boardId)
            const localVarPath = `/media-boards/{boardId}/media-lines`
                .replace(`{${"boardId"}}`, encodeURIComponent(String(boardId)));
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
         * @summary Get the media available line for the board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerGetMediaAvailableLine: async (boardId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'boardId' is not null or undefined
            assertParamExists('mediaBoardControllerGetMediaAvailableLine', 'boardId', boardId)
            const localVarPath = `/media-boards/{boardId}/media-available-line`
                .replace(`{${"boardId"}}`, encodeURIComponent(String(boardId)));
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
         * @summary Get the media shelf of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerGetMediaBoardForUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/media-boards/me`;
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
         * @summary Set layout for media board.
         * @param {string} boardId The id of the board.
         * @param {LayoutBodyParams} layoutBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerSetMediaBoardLayout: async (boardId: string, layoutBodyParams: LayoutBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'boardId' is not null or undefined
            assertParamExists('mediaBoardControllerSetMediaBoardLayout', 'boardId', boardId)
            // verify required parameter 'layoutBodyParams' is not null or undefined
            assertParamExists('mediaBoardControllerSetMediaBoardLayout', 'layoutBodyParams', layoutBodyParams)
            const localVarPath = `/media-boards/{boardId}/layout`
                .replace(`{${"boardId"}}`, encodeURIComponent(String(boardId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(layoutBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update the color of available line in media board.
         * @param {string} boardId The id of the board.
         * @param {ColorBodyParams} colorBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerUpdateMediaAvailableLineColor: async (boardId: string, colorBodyParams: ColorBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'boardId' is not null or undefined
            assertParamExists('mediaBoardControllerUpdateMediaAvailableLineColor', 'boardId', boardId)
            // verify required parameter 'colorBodyParams' is not null or undefined
            assertParamExists('mediaBoardControllerUpdateMediaAvailableLineColor', 'colorBodyParams', colorBodyParams)
            const localVarPath = `/media-boards/{boardId}/media-available-line/color`
                .replace(`{${"boardId"}}`, encodeURIComponent(String(boardId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(colorBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MediaBoardApi - functional programming interface
 * @export
 */
export const MediaBoardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MediaBoardApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Collapse available line in media board.
         * @param {string} boardId The id of the board.
         * @param {CollapsableBodyParams} collapsableBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerCollapseMediaAvailableLine(boardId: string, collapsableBodyParams: CollapsableBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerCollapseMediaAvailableLine(boardId, collapsableBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a new line on a media board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerCreateLine(boardId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaLineResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerCreateLine(boardId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the media available line for the board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerGetMediaAvailableLine(boardId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaAvailableLineResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerGetMediaAvailableLine(boardId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the media shelf of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerGetMediaBoardForUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MediaBoardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerGetMediaBoardForUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Set layout for media board.
         * @param {string} boardId The id of the board.
         * @param {LayoutBodyParams} layoutBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerSetMediaBoardLayout(boardId: string, layoutBodyParams: LayoutBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerSetMediaBoardLayout(boardId, layoutBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update the color of available line in media board.
         * @param {string} boardId The id of the board.
         * @param {ColorBodyParams} colorBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mediaBoardControllerUpdateMediaAvailableLineColor(boardId: string, colorBodyParams: ColorBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mediaBoardControllerUpdateMediaAvailableLineColor(boardId, colorBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MediaBoardApi - factory interface
 * @export
 */
export const MediaBoardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MediaBoardApiFp(configuration)
    return {
        /**
         * 
         * @summary Collapse available line in media board.
         * @param {string} boardId The id of the board.
         * @param {CollapsableBodyParams} collapsableBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerCollapseMediaAvailableLine(boardId: string, collapsableBodyParams: CollapsableBodyParams, options?: any): AxiosPromise<void> {
            return localVarFp.mediaBoardControllerCollapseMediaAvailableLine(boardId, collapsableBodyParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new line on a media board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerCreateLine(boardId: string, options?: any): AxiosPromise<MediaLineResponse> {
            return localVarFp.mediaBoardControllerCreateLine(boardId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the media available line for the board.
         * @param {string} boardId The id of the board.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerGetMediaAvailableLine(boardId: string, options?: any): AxiosPromise<MediaAvailableLineResponse> {
            return localVarFp.mediaBoardControllerGetMediaAvailableLine(boardId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the media shelf of the user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerGetMediaBoardForUser(options?: any): AxiosPromise<MediaBoardResponse> {
            return localVarFp.mediaBoardControllerGetMediaBoardForUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Set layout for media board.
         * @param {string} boardId The id of the board.
         * @param {LayoutBodyParams} layoutBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerSetMediaBoardLayout(boardId: string, layoutBodyParams: LayoutBodyParams, options?: any): AxiosPromise<void> {
            return localVarFp.mediaBoardControllerSetMediaBoardLayout(boardId, layoutBodyParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update the color of available line in media board.
         * @param {string} boardId The id of the board.
         * @param {ColorBodyParams} colorBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mediaBoardControllerUpdateMediaAvailableLineColor(boardId: string, colorBodyParams: ColorBodyParams, options?: any): AxiosPromise<void> {
            return localVarFp.mediaBoardControllerUpdateMediaAvailableLineColor(boardId, colorBodyParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MediaBoardApi - interface
 * @export
 * @interface MediaBoardApi
 */
export interface MediaBoardApiInterface {
    /**
     * 
     * @summary Collapse available line in media board.
     * @param {string} boardId The id of the board.
     * @param {CollapsableBodyParams} collapsableBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerCollapseMediaAvailableLine(boardId: string, collapsableBodyParams: CollapsableBodyParams, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Create a new line on a media board.
     * @param {string} boardId The id of the board.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerCreateLine(boardId: string, options?: any): AxiosPromise<MediaLineResponse>;

    /**
     * 
     * @summary Get the media available line for the board.
     * @param {string} boardId The id of the board.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerGetMediaAvailableLine(boardId: string, options?: any): AxiosPromise<MediaAvailableLineResponse>;

    /**
     * 
     * @summary Get the media shelf of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerGetMediaBoardForUser(options?: any): AxiosPromise<MediaBoardResponse>;

    /**
     * 
     * @summary Set layout for media board.
     * @param {string} boardId The id of the board.
     * @param {LayoutBodyParams} layoutBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerSetMediaBoardLayout(boardId: string, layoutBodyParams: LayoutBodyParams, options?: any): AxiosPromise<void>;

    /**
     * 
     * @summary Update the color of available line in media board.
     * @param {string} boardId The id of the board.
     * @param {ColorBodyParams} colorBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApiInterface
     */
    mediaBoardControllerUpdateMediaAvailableLineColor(boardId: string, colorBodyParams: ColorBodyParams, options?: any): AxiosPromise<void>;

}

/**
 * MediaBoardApi - object-oriented interface
 * @export
 * @class MediaBoardApi
 * @extends {BaseAPI}
 */
export class MediaBoardApi extends BaseAPI implements MediaBoardApiInterface {
    /**
     * 
     * @summary Collapse available line in media board.
     * @param {string} boardId The id of the board.
     * @param {CollapsableBodyParams} collapsableBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerCollapseMediaAvailableLine(boardId: string, collapsableBodyParams: CollapsableBodyParams, options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerCollapseMediaAvailableLine(boardId, collapsableBodyParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new line on a media board.
     * @param {string} boardId The id of the board.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerCreateLine(boardId: string, options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerCreateLine(boardId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the media available line for the board.
     * @param {string} boardId The id of the board.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerGetMediaAvailableLine(boardId: string, options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerGetMediaAvailableLine(boardId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the media shelf of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerGetMediaBoardForUser(options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerGetMediaBoardForUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Set layout for media board.
     * @param {string} boardId The id of the board.
     * @param {LayoutBodyParams} layoutBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerSetMediaBoardLayout(boardId: string, layoutBodyParams: LayoutBodyParams, options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerSetMediaBoardLayout(boardId, layoutBodyParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update the color of available line in media board.
     * @param {string} boardId The id of the board.
     * @param {ColorBodyParams} colorBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MediaBoardApi
     */
    public mediaBoardControllerUpdateMediaAvailableLineColor(boardId: string, colorBodyParams: ColorBodyParams, options?: any) {
        return MediaBoardApiFp(this.configuration).mediaBoardControllerUpdateMediaAvailableLineColor(boardId, colorBodyParams, options).then((request) => request(this.axios, this.basePath));
    }
}
