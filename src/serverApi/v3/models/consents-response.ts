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


import { ParentConsentResponse } from './parent-consent-response';
import { UserConsentResponse } from './user-consent-response';

/**
 * 
 * @export
 * @interface ConsentsResponse
 */
export interface ConsentsResponse {
    /**
     * 
     * @type {UserConsentResponse}
     * @memberof ConsentsResponse
     */
    userConsent: UserConsentResponse;
    /**
     * 
     * @type {Array<ParentConsentResponse>}
     * @memberof ConsentsResponse
     */
    parentConsents: Array<ParentConsentResponse>;
}

