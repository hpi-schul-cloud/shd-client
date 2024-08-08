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



/**
 * 
 * @export
 * @interface TaskStatusResponse
 */
export interface TaskStatusResponse {
    /**
     * 
     * @type {number}
     * @memberof TaskStatusResponse
     */
    submitted: number;
    /**
     * 
     * @type {number}
     * @memberof TaskStatusResponse
     */
    maxSubmissions: number;
    /**
     * 
     * @type {number}
     * @memberof TaskStatusResponse
     */
    graded: number;
    /**
     * 
     * @type {boolean}
     * @memberof TaskStatusResponse
     */
    isDraft: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskStatusResponse
     */
    isSubstitutionTeacher: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TaskStatusResponse
     */
    isFinished: boolean;
}


