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


import { CardSkeletonResponse } from './card-skeleton-response';
import { TimestampsResponse } from './timestamps-response';

/**
 * 
 * @export
 * @interface ColumnResponse
 */
export interface ColumnResponse {
    /**
     * 
     * @type {string}
     * @memberof ColumnResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ColumnResponse
     */
    title: string;
    /**
     * 
     * @type {Array<CardSkeletonResponse>}
     * @memberof ColumnResponse
     */
    cards: Array<CardSkeletonResponse>;
    /**
     * 
     * @type {TimestampsResponse}
     * @memberof ColumnResponse
     */
    timestamps: TimestampsResponse;
}


