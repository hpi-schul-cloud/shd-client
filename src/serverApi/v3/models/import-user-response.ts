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


import { UserMatchResponse } from './user-match-response';

/**
 * 
 * @export
 * @interface ImportUserResponse
 */
export interface ImportUserResponse {
    /**
     * id reference to a import user
     * @type {string}
     * @memberof ImportUserResponse
     */
    importUserId: string;
    /**
     * login name from external system
     * @type {string}
     * @memberof ImportUserResponse
     */
    loginName: string;
    /**
     * external systems user firstname
     * @type {string}
     * @memberof ImportUserResponse
     */
    firstName: string;
    /**
     * external systems user lastname
     * @type {string}
     * @memberof ImportUserResponse
     */
    lastName: string;
    /**
     * list of user roles from external system: student, teacher, admin
     * @type {Array<string>}
     * @memberof ImportUserResponse
     */
    roleNames: Array<ImportUserResponseRoleNames>;
    /**
     * names of classes the user attends from external system
     * @type {Array<string>}
     * @memberof ImportUserResponse
     */
    classNames: Array<string>;
    /**
     * assignemnt to a local user account
     * @type {UserMatchResponse}
     * @memberof ImportUserResponse
     */
    match?: UserMatchResponse;
    /**
     * manual flag to apply it as filter
     * @type {boolean}
     * @memberof ImportUserResponse
     */
    flagged: boolean;
    /**
     * exact user roles from the external system
     * @type {Array<string>}
     * @memberof ImportUserResponse
     */
    externalRoleNames?: Array<string>;
}

/**
    * @export
    * @enum {string}
    */
export enum ImportUserResponseRoleNames {
    STUDENT = 'student',
    TEACHER = 'teacher',
    ADMIN = 'admin'
}



