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


import { NewsResponse } from './news-response';

/**
 * 
 * @export
 * @interface NewsListResponse
 */
export interface NewsListResponse {
    /**
     * The items for the current page.
     * @type {Array<NewsResponse>}
     * @memberof NewsListResponse
     */
    data: Array<NewsResponse>;
    /**
     * The total amount of items.
     * @type {number}
     * @memberof NewsListResponse
     */
    total: number;
    /**
     * The amount of items skipped from the start.
     * @type {number}
     * @memberof NewsListResponse
     */
    skip: number;
    /**
     * The page size of the response.
     * @type {number}
     * @memberof NewsListResponse
     */
    limit: number;
}


