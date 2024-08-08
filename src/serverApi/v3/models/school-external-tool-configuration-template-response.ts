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


import { CustomParameterResponse } from './custom-parameter-response';

/**
 * 
 * @export
 * @interface SchoolExternalToolConfigurationTemplateResponse
 */
export interface SchoolExternalToolConfigurationTemplateResponse {
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolConfigurationTemplateResponse
     */
    externalToolId: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolConfigurationTemplateResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolConfigurationTemplateResponse
     */
    baseUrl: string;
    /**
     * 
     * @type {string}
     * @memberof SchoolExternalToolConfigurationTemplateResponse
     */
    logoUrl?: string;
    /**
     * 
     * @type {Array<CustomParameterResponse>}
     * @memberof SchoolExternalToolConfigurationTemplateResponse
     */
    parameters: Array<CustomParameterResponse>;
}


