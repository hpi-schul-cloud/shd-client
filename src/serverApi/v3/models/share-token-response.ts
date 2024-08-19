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


import { ShareTokenPayloadResponse } from './share-token-payload-response';

/**
 * 
 * @export
 * @interface ShareTokenResponse
 */
export interface ShareTokenResponse {
    /**
     * 
     * @type {string}
     * @memberof ShareTokenResponse
     */
    token: string;
    /**
     * 
     * @type {ShareTokenPayloadResponse}
     * @memberof ShareTokenResponse
     */
    payload: ShareTokenPayloadResponse;
    /**
     * 
     * @type {string}
     * @memberof ShareTokenResponse
     */
    expiresAt?: string;
}


