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
import { DashboardResponse } from '../models';
// @ts-ignore
import { MoveElementParams } from '../models';
// @ts-ignore
import { PatchGroupParams } from '../models';
/**
 * DashboardApi - axios parameter creator
 * @export
 */
export const DashboardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerFindForUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/dashboard`;
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
         * @param {string} dashboardId The id of the dashboard.
         * @param {MoveElementParams} moveElementParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerMoveElement: async (dashboardId: string, moveElementParams: MoveElementParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dashboardId' is not null or undefined
            assertParamExists('dashboardControllerMoveElement', 'dashboardId', dashboardId)
            // verify required parameter 'moveElementParams' is not null or undefined
            assertParamExists('dashboardControllerMoveElement', 'moveElementParams', moveElementParams)
            const localVarPath = `/dashboard/{dashboardId}/moveElement`
                .replace(`{${"dashboardId"}}`, encodeURIComponent(String(dashboardId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(moveElementParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} dashboardId The id of the dashboard.
         * @param {number} x 
         * @param {number} y 
         * @param {PatchGroupParams} patchGroupParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerPatchGroup: async (dashboardId: string, x: number, y: number, patchGroupParams: PatchGroupParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'dashboardId' is not null or undefined
            assertParamExists('dashboardControllerPatchGroup', 'dashboardId', dashboardId)
            // verify required parameter 'x' is not null or undefined
            assertParamExists('dashboardControllerPatchGroup', 'x', x)
            // verify required parameter 'y' is not null or undefined
            assertParamExists('dashboardControllerPatchGroup', 'y', y)
            // verify required parameter 'patchGroupParams' is not null or undefined
            assertParamExists('dashboardControllerPatchGroup', 'patchGroupParams', patchGroupParams)
            const localVarPath = `/dashboard/{dashboardId}/element`
                .replace(`{${"dashboardId"}}`, encodeURIComponent(String(dashboardId)));
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

            if (x !== undefined) {
                localVarQueryParameter['x'] = x;
            }

            if (y !== undefined) {
                localVarQueryParameter['y'] = y;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(patchGroupParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DashboardApi - functional programming interface
 * @export
 */
export const DashboardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DashboardApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dashboardControllerFindForUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DashboardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dashboardControllerFindForUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} dashboardId The id of the dashboard.
         * @param {MoveElementParams} moveElementParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dashboardControllerMoveElement(dashboardId: string, moveElementParams: MoveElementParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DashboardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dashboardControllerMoveElement(dashboardId, moveElementParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} dashboardId The id of the dashboard.
         * @param {number} x 
         * @param {number} y 
         * @param {PatchGroupParams} patchGroupParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dashboardControllerPatchGroup(dashboardId: string, x: number, y: number, patchGroupParams: PatchGroupParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DashboardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dashboardControllerPatchGroup(dashboardId, x, y, patchGroupParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DashboardApi - factory interface
 * @export
 */
export const DashboardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DashboardApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerFindForUser(options?: any): AxiosPromise<DashboardResponse> {
            return localVarFp.dashboardControllerFindForUser(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} dashboardId The id of the dashboard.
         * @param {MoveElementParams} moveElementParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerMoveElement(dashboardId: string, moveElementParams: MoveElementParams, options?: any): AxiosPromise<DashboardResponse> {
            return localVarFp.dashboardControllerMoveElement(dashboardId, moveElementParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} dashboardId The id of the dashboard.
         * @param {number} x 
         * @param {number} y 
         * @param {PatchGroupParams} patchGroupParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dashboardControllerPatchGroup(dashboardId: string, x: number, y: number, patchGroupParams: PatchGroupParams, options?: any): AxiosPromise<DashboardResponse> {
            return localVarFp.dashboardControllerPatchGroup(dashboardId, x, y, patchGroupParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DashboardApi - interface
 * @export
 * @interface DashboardApi
 */
export interface DashboardApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApiInterface
     */
    dashboardControllerFindForUser(options?: any): AxiosPromise<DashboardResponse>;

    /**
     * 
     * @param {string} dashboardId The id of the dashboard.
     * @param {MoveElementParams} moveElementParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApiInterface
     */
    dashboardControllerMoveElement(dashboardId: string, moveElementParams: MoveElementParams, options?: any): AxiosPromise<DashboardResponse>;

    /**
     * 
     * @param {string} dashboardId The id of the dashboard.
     * @param {number} x 
     * @param {number} y 
     * @param {PatchGroupParams} patchGroupParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApiInterface
     */
    dashboardControllerPatchGroup(dashboardId: string, x: number, y: number, patchGroupParams: PatchGroupParams, options?: any): AxiosPromise<DashboardResponse>;

}

/**
 * DashboardApi - object-oriented interface
 * @export
 * @class DashboardApi
 * @extends {BaseAPI}
 */
export class DashboardApi extends BaseAPI implements DashboardApiInterface {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public dashboardControllerFindForUser(options?: any) {
        return DashboardApiFp(this.configuration).dashboardControllerFindForUser(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} dashboardId The id of the dashboard.
     * @param {MoveElementParams} moveElementParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public dashboardControllerMoveElement(dashboardId: string, moveElementParams: MoveElementParams, options?: any) {
        return DashboardApiFp(this.configuration).dashboardControllerMoveElement(dashboardId, moveElementParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} dashboardId The id of the dashboard.
     * @param {number} x 
     * @param {number} y 
     * @param {PatchGroupParams} patchGroupParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public dashboardControllerPatchGroup(dashboardId: string, x: number, y: number, patchGroupParams: PatchGroupParams, options?: any) {
        return DashboardApiFp(this.configuration).dashboardControllerPatchGroup(dashboardId, x, y, patchGroupParams, options).then((request) => request(this.axios, this.basePath));
    }
}
