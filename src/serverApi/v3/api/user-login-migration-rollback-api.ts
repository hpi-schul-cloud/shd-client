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
/**
 * UserLoginMigrationRollbackApi - axios parameter creator
 * @export
 */
export const UserLoginMigrationRollbackApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Rollback a user from a user login migration
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLoginMigrationRollbackControllerMigrateUserLogin: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('userLoginMigrationRollbackControllerMigrateUserLogin', 'userId', userId)
            const localVarPath = `/user-login-migrations/users/{userId}/rollback-migration`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
    }
};

/**
 * UserLoginMigrationRollbackApi - functional programming interface
 * @export
 */
export const UserLoginMigrationRollbackApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserLoginMigrationRollbackApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Rollback a user from a user login migration
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userLoginMigrationRollbackControllerMigrateUserLogin(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userLoginMigrationRollbackControllerMigrateUserLogin(userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserLoginMigrationRollbackApi - factory interface
 * @export
 */
export const UserLoginMigrationRollbackApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserLoginMigrationRollbackApiFp(configuration)
    return {
        /**
         * 
         * @summary Rollback a user from a user login migration
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLoginMigrationRollbackControllerMigrateUserLogin(userId: string, options?: any): AxiosPromise<void> {
            return localVarFp.userLoginMigrationRollbackControllerMigrateUserLogin(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserLoginMigrationRollbackApi - interface
 * @export
 * @interface UserLoginMigrationRollbackApi
 */
export interface UserLoginMigrationRollbackApiInterface {
    /**
     * 
     * @summary Rollback a user from a user login migration
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserLoginMigrationRollbackApiInterface
     */
    userLoginMigrationRollbackControllerMigrateUserLogin(userId: string, options?: any): AxiosPromise<void>;

}

/**
 * UserLoginMigrationRollbackApi - object-oriented interface
 * @export
 * @class UserLoginMigrationRollbackApi
 * @extends {BaseAPI}
 */
export class UserLoginMigrationRollbackApi extends BaseAPI implements UserLoginMigrationRollbackApiInterface {
    /**
     * 
     * @summary Rollback a user from a user login migration
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserLoginMigrationRollbackApi
     */
    public userLoginMigrationRollbackControllerMigrateUserLogin(userId: string, options?: any) {
        return UserLoginMigrationRollbackApiFp(this.configuration).userLoginMigrationRollbackControllerMigrateUserLogin(userId, options).then((request) => request(this.axios, this.basePath));
    }
}
