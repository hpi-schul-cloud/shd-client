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
import { SchoolExistsResponse } from '../models';
// @ts-ignore
import { SchoolForExternalInviteResponse } from '../models';
// @ts-ignore
import { SchoolForLdapLoginResponse } from '../models';
// @ts-ignore
import { SchoolResponse } from '../models';
// @ts-ignore
import { SchoolSystemResponse } from '../models';
// @ts-ignore
import { SchoolUpdateBodyParams } from '../models';
// @ts-ignore
import { SchulConneXProvisioningOptionsParams } from '../models';
// @ts-ignore
import { SchulConneXProvisioningOptionsResponse } from '../models';
/**
 * SchoolApi - axios parameter creator
 * @export
 */
export const SchoolApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerDoesSchoolExist: async (schoolId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerDoesSchoolExist', 'schoolId', schoolId)
            const localVarPath = `/school/exists/id/{schoolId}`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)));
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
        /**
         * Gets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetProvisioningOptions: async (schoolId: string, systemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerGetProvisioningOptions', 'schoolId', schoolId)
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('schoolControllerGetProvisioningOptions', 'systemId', systemId)
            const localVarPath = `/schools/{schoolId}/systems/{systemId}/provisioning-options`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)))
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
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolById: async (schoolId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerGetSchoolById', 'schoolId', schoolId)
            const localVarPath = `/school/id/{schoolId}`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)));
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
         * @param {string} [federalStateId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolListForExternalInvite: async (federalStateId?: string, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/school/list-for-external-invite`;
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

            if (federalStateId !== undefined) {
                localVarQueryParameter['federalStateId'] = federalStateId;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolListForLadpLogin: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/school/list-for-ldap-login`;
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
        /**
         * 
         * @summary Get systems from school
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolSystems: async (schoolId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerGetSchoolSystems', 'schoolId', schoolId)
            const localVarPath = `/school/{schoolId}/systems`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)));
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
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerRemoveSystemFromSchool: async (schoolId: string, systemId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerRemoveSystemFromSchool', 'schoolId', schoolId)
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('schoolControllerRemoveSystemFromSchool', 'systemId', systemId)
            const localVarPath = `/school/{schoolId}/system/{systemId}/remove`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)))
                .replace(`{${"systemId"}}`, encodeURIComponent(String(systemId)));
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {SchulConneXProvisioningOptionsParams} schulConneXProvisioningOptionsParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerSetProvisioningOptions: async (schoolId: string, systemId: string, schulConneXProvisioningOptionsParams: SchulConneXProvisioningOptionsParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerSetProvisioningOptions', 'schoolId', schoolId)
            // verify required parameter 'systemId' is not null or undefined
            assertParamExists('schoolControllerSetProvisioningOptions', 'systemId', systemId)
            // verify required parameter 'schulConneXProvisioningOptionsParams' is not null or undefined
            assertParamExists('schoolControllerSetProvisioningOptions', 'schulConneXProvisioningOptionsParams', schulConneXProvisioningOptionsParams)
            const localVarPath = `/schools/{schoolId}/systems/{systemId}/provisioning-options`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)))
                .replace(`{${"systemId"}}`, encodeURIComponent(String(systemId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(schulConneXProvisioningOptionsParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Updating school props by school administrators
         * @param {string} schoolId 
         * @param {SchoolUpdateBodyParams} schoolUpdateBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerUpdateSchool: async (schoolId: string, schoolUpdateBodyParams: SchoolUpdateBodyParams, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'schoolId' is not null or undefined
            assertParamExists('schoolControllerUpdateSchool', 'schoolId', schoolId)
            // verify required parameter 'schoolUpdateBodyParams' is not null or undefined
            assertParamExists('schoolControllerUpdateSchool', 'schoolUpdateBodyParams', schoolUpdateBodyParams)
            const localVarPath = `/school/{schoolId}`
                .replace(`{${"schoolId"}}`, encodeURIComponent(String(schoolId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(schoolUpdateBodyParams, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SchoolApi - functional programming interface
 * @export
 */
export const SchoolApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SchoolApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerDoesSchoolExist(schoolId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchoolExistsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerDoesSchoolExist(schoolId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerGetProvisioningOptions(schoolId: string, systemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchulConneXProvisioningOptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerGetProvisioningOptions(schoolId, systemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerGetSchoolById(schoolId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchoolResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerGetSchoolById(schoolId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [federalStateId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerGetSchoolListForExternalInvite(federalStateId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SchoolForExternalInviteResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerGetSchoolListForExternalInvite(federalStateId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerGetSchoolListForLadpLogin(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SchoolForLdapLoginResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerGetSchoolListForLadpLogin(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get systems from school
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerGetSchoolSystems(schoolId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<SchoolSystemResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerGetSchoolSystems(schoolId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerRemoveSystemFromSchool(schoolId: string, systemId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerRemoveSystemFromSchool(schoolId, systemId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Sets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {SchulConneXProvisioningOptionsParams} schulConneXProvisioningOptionsParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerSetProvisioningOptions(schoolId: string, systemId: string, schulConneXProvisioningOptionsParams: SchulConneXProvisioningOptionsParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchulConneXProvisioningOptionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerSetProvisioningOptions(schoolId, systemId, schulConneXProvisioningOptionsParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Updating school props by school administrators
         * @param {string} schoolId 
         * @param {SchoolUpdateBodyParams} schoolUpdateBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async schoolControllerUpdateSchool(schoolId: string, schoolUpdateBodyParams: SchoolUpdateBodyParams, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchoolResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.schoolControllerUpdateSchool(schoolId, schoolUpdateBodyParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SchoolApi - factory interface
 * @export
 */
export const SchoolApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SchoolApiFp(configuration)
    return {
        /**
         * 
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerDoesSchoolExist(schoolId: string, options?: any): AxiosPromise<SchoolExistsResponse> {
            return localVarFp.schoolControllerDoesSchoolExist(schoolId, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetProvisioningOptions(schoolId: string, systemId: string, options?: any): AxiosPromise<SchulConneXProvisioningOptionsResponse> {
            return localVarFp.schoolControllerGetProvisioningOptions(schoolId, systemId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolById(schoolId: string, options?: any): AxiosPromise<SchoolResponse> {
            return localVarFp.schoolControllerGetSchoolById(schoolId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [federalStateId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolListForExternalInvite(federalStateId?: string, options?: any): AxiosPromise<Array<SchoolForExternalInviteResponse>> {
            return localVarFp.schoolControllerGetSchoolListForExternalInvite(federalStateId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolListForLadpLogin(options?: any): AxiosPromise<Array<SchoolForLdapLoginResponse>> {
            return localVarFp.schoolControllerGetSchoolListForLadpLogin(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get systems from school
         * @param {string} schoolId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerGetSchoolSystems(schoolId: string, options?: any): AxiosPromise<Array<SchoolSystemResponse>> {
            return localVarFp.schoolControllerGetSchoolSystems(schoolId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerRemoveSystemFromSchool(schoolId: string, systemId: string, options?: any): AxiosPromise<void> {
            return localVarFp.schoolControllerRemoveSystemFromSchool(schoolId, systemId, options).then((request) => request(axios, basePath));
        },
        /**
         * Sets all provisioning options for a system at a school
         * @param {string} schoolId 
         * @param {string} systemId 
         * @param {SchulConneXProvisioningOptionsParams} schulConneXProvisioningOptionsParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerSetProvisioningOptions(schoolId: string, systemId: string, schulConneXProvisioningOptionsParams: SchulConneXProvisioningOptionsParams, options?: any): AxiosPromise<SchulConneXProvisioningOptionsResponse> {
            return localVarFp.schoolControllerSetProvisioningOptions(schoolId, systemId, schulConneXProvisioningOptionsParams, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Updating school props by school administrators
         * @param {string} schoolId 
         * @param {SchoolUpdateBodyParams} schoolUpdateBodyParams 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        schoolControllerUpdateSchool(schoolId: string, schoolUpdateBodyParams: SchoolUpdateBodyParams, options?: any): AxiosPromise<SchoolResponse> {
            return localVarFp.schoolControllerUpdateSchool(schoolId, schoolUpdateBodyParams, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SchoolApi - interface
 * @export
 * @interface SchoolApi
 */
export interface SchoolApiInterface {
    /**
     * 
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerDoesSchoolExist(schoolId: string, options?: any): AxiosPromise<SchoolExistsResponse>;

    /**
     * Gets all provisioning options for a system at a school
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerGetProvisioningOptions(schoolId: string, systemId: string, options?: any): AxiosPromise<SchulConneXProvisioningOptionsResponse>;

    /**
     * 
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerGetSchoolById(schoolId: string, options?: any): AxiosPromise<SchoolResponse>;

    /**
     * 
     * @param {string} [federalStateId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerGetSchoolListForExternalInvite(federalStateId?: string, options?: any): AxiosPromise<Array<SchoolForExternalInviteResponse>>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerGetSchoolListForLadpLogin(options?: any): AxiosPromise<Array<SchoolForLdapLoginResponse>>;

    /**
     * 
     * @summary Get systems from school
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerGetSchoolSystems(schoolId: string, options?: any): AxiosPromise<Array<SchoolSystemResponse>>;

    /**
     * 
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerRemoveSystemFromSchool(schoolId: string, systemId: string, options?: any): AxiosPromise<void>;

    /**
     * Sets all provisioning options for a system at a school
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {SchulConneXProvisioningOptionsParams} schulConneXProvisioningOptionsParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerSetProvisioningOptions(schoolId: string, systemId: string, schulConneXProvisioningOptionsParams: SchulConneXProvisioningOptionsParams, options?: any): AxiosPromise<SchulConneXProvisioningOptionsResponse>;

    /**
     * 
     * @summary Updating school props by school administrators
     * @param {string} schoolId 
     * @param {SchoolUpdateBodyParams} schoolUpdateBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApiInterface
     */
    schoolControllerUpdateSchool(schoolId: string, schoolUpdateBodyParams: SchoolUpdateBodyParams, options?: any): AxiosPromise<SchoolResponse>;

}

/**
 * SchoolApi - object-oriented interface
 * @export
 * @class SchoolApi
 * @extends {BaseAPI}
 */
export class SchoolApi extends BaseAPI implements SchoolApiInterface {
    /**
     * 
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerDoesSchoolExist(schoolId: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerDoesSchoolExist(schoolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets all provisioning options for a system at a school
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerGetProvisioningOptions(schoolId: string, systemId: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerGetProvisioningOptions(schoolId, systemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerGetSchoolById(schoolId: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerGetSchoolById(schoolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [federalStateId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerGetSchoolListForExternalInvite(federalStateId?: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerGetSchoolListForExternalInvite(federalStateId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerGetSchoolListForLadpLogin(options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerGetSchoolListForLadpLogin(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get systems from school
     * @param {string} schoolId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerGetSchoolSystems(schoolId: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerGetSchoolSystems(schoolId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerRemoveSystemFromSchool(schoolId: string, systemId: string, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerRemoveSystemFromSchool(schoolId, systemId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Sets all provisioning options for a system at a school
     * @param {string} schoolId 
     * @param {string} systemId 
     * @param {SchulConneXProvisioningOptionsParams} schulConneXProvisioningOptionsParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerSetProvisioningOptions(schoolId: string, systemId: string, schulConneXProvisioningOptionsParams: SchulConneXProvisioningOptionsParams, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerSetProvisioningOptions(schoolId, systemId, schulConneXProvisioningOptionsParams, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Updating school props by school administrators
     * @param {string} schoolId 
     * @param {SchoolUpdateBodyParams} schoolUpdateBodyParams 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchoolApi
     */
    public schoolControllerUpdateSchool(schoolId: string, schoolUpdateBodyParams: SchoolUpdateBodyParams, options?: any) {
        return SchoolApiFp(this.configuration).schoolControllerUpdateSchool(schoolId, schoolUpdateBodyParams, options).then((request) => request(this.axios, this.basePath));
    }
}