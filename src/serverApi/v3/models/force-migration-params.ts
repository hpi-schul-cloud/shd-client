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



/**
 * 
 * @export
 * @interface ForceMigrationParams
 */
export interface ForceMigrationParams {
    /**
     * Email of the administrator
     * @type {string}
     * @memberof ForceMigrationParams
     */
    email: string;
    /**
     * Target externalId to link it with an external account
     * @type {string}
     * @memberof ForceMigrationParams
     */
    externalUserId: string;
    /**
     * Target externalId to link it with an external school
     * @type {string}
     * @memberof ForceMigrationParams
     */
    externalSchoolId: string;
}


