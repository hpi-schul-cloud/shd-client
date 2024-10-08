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


import { CustomParameterEntryResponse } from './custom-parameter-entry-response';
import { SchoolExternalToolConfigurationStatusResponse } from './school-external-tool-configuration-status-response';

/**
 * 
 * @export
 * @interface SchoolExternalToolResponse
 */
export interface SchoolExternalToolResponse {
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolResponse
     */
    toolId: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolResponse
     */
    schoolId: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchoolExternalToolResponse
     */
    isDeactivated: boolean;
    /**
     * 
     * @type {Array<CustomParameterEntryResponse>}
     * @memberof SchoolExternalToolResponse
     */
    parameters: Array<CustomParameterEntryResponse>;
    /**
     * 
     * @type {SchoolExternalToolConfigurationStatusResponse}
     * @memberof SchoolExternalToolResponse
     */
    status: SchoolExternalToolConfigurationStatusResponse;
}


