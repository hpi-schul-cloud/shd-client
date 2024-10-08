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
 * @interface SchoolExternalToolConfigurationStatusResponse
 */
export interface SchoolExternalToolConfigurationStatusResponse {
    /**
     * Is the tool outdated on school scope, because of non matching versions or required parameter changes on ExternalTool?
     * @type {boolean}
     * @memberof SchoolExternalToolConfigurationStatusResponse
     */
    isOutdatedOnScopeSchool: boolean;
    /**
     * Is the tool deactivated, because of instance administrator?
     * @type {boolean}
     * @memberof SchoolExternalToolConfigurationStatusResponse
     */
    isGloballyDeactivated: boolean;
}


