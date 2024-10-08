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


import { SubmissionItemResponse } from './submission-item-response';
import { UserDataResponse } from './user-data-response';

/**
 * 
 * @export
 * @interface SubmissionsResponse
 */
export interface SubmissionsResponse {
    /**
     * 
     * @type {Array<SubmissionItemResponse>}
     * @memberof SubmissionsResponse
     */
    submissionItemsResponse: Array<SubmissionItemResponse>;
    /**
     * 
     * @type {Array<UserDataResponse>}
     * @memberof SubmissionsResponse
     */
    users: Array<UserDataResponse>;
}


