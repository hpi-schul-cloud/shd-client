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


import { ContentElementType } from './content-element-type';
import { SubmissionContainerElementContent } from './submission-container-element-content';
import { TimestampsResponse } from './timestamps-response';

/**
 * 
 * @export
 * @interface SubmissionContainerElementResponse
 */
export interface SubmissionContainerElementResponse {
    /**
     * 
     * @type {string}
     * @memberof SubmissionContainerElementResponse
     */
    id: string;
    /**
     * 
     * @type {ContentElementType}
     * @memberof SubmissionContainerElementResponse
     */
    type: ContentElementType;
    /**
     * 
     * @type {SubmissionContainerElementContent}
     * @memberof SubmissionContainerElementResponse
     */
    content: SubmissionContainerElementContent;
    /**
     * 
     * @type {TimestampsResponse}
     * @memberof SubmissionContainerElementResponse
     */
    timestamps: TimestampsResponse;
}


