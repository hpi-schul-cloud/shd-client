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


import { ContextExternalToolCountPerContextResponse } from './context-external-tool-count-per-context-response';

/**
 * 
 * @export
 * @interface ExternalToolMetadataResponse
 */
export interface ExternalToolMetadataResponse {
    /**
     * 
     * @type {number}
     * @memberof ExternalToolMetadataResponse
     */
    schoolExternalToolCount: number;
    /**
     * 
     * @type {ContextExternalToolCountPerContextResponse}
     * @memberof ExternalToolMetadataResponse
     */
    contextExternalToolCountPerContext: ContextExternalToolCountPerContextResponse;
}


