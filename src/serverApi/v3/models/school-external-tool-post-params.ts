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


import { CustomParameterEntryParam } from './custom-parameter-entry-param';

/**
 * 
 * @export
 * @interface SchoolExternalToolPostParams
 */
export interface SchoolExternalToolPostParams {
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolPostParams
     */
    toolId: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolPostParams
     */
    schoolId: string;
    /**
     * 
     * @type {Array<CustomParameterEntryParam>}
     * @memberof SchoolExternalToolPostParams
     */
    parameters?: Array<CustomParameterEntryParam>;
    /**
     * Tool can be deactivated, related tools can not be added to e.g. course or board anymore
     * @type {boolean}
     * @memberof SchoolExternalToolPostParams
     */
    isDeactivated: boolean;
}


