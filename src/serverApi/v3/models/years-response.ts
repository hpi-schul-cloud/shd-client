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


import { SchoolYearResponse } from './school-year-response';

/**
 * 
 * @export
 * @interface YearsResponse
 */
export interface YearsResponse {
    /**
     * 
     * @type {Array<SchoolYearResponse>}
     * @memberof YearsResponse
     */
    schoolYears: Array<SchoolYearResponse>;
    /**
     * 
     * @type {SchoolYearResponse}
     * @memberof YearsResponse
     */
    activeYear: SchoolYearResponse;
    /**
     * 
     * @type {SchoolYearResponse}
     * @memberof YearsResponse
     */
    lastYear: SchoolYearResponse;
    /**
     * 
     * @type {SchoolYearResponse}
     * @memberof YearsResponse
     */
    nextYear: SchoolYearResponse;
}


