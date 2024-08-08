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


import { CountyResponse } from './county-response';

/**
 * 
 * @export
 * @interface FederalStateResponse
 */
export interface FederalStateResponse {
    /**
     * 
     * @type {string}
     * @memberof FederalStateResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FederalStateResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FederalStateResponse
     */
    abbreviation: string;
    /**
     * 
     * @type {string}
     * @memberof FederalStateResponse
     */
    logoUrl: string;
    /**
     * 
     * @type {Array<CountyResponse>}
     * @memberof FederalStateResponse
     */
    counties: Array<CountyResponse>;
}

