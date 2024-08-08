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
 * @interface CreateNewsParams
 */
export interface CreateNewsParams {
    /**
     * Title of the News entity
     * @type {string}
     * @memberof CreateNewsParams
     */
    title: string;
    /**
     * Content of the News entity
     * @type {string}
     * @memberof CreateNewsParams
     */
    content: string;
    /**
     * The point in time from when the News entity schould be displayed. Defaults to now so that the news is published
     * @type {string}
     * @memberof CreateNewsParams
     */
    displayAt?: string;
    /**
     * Target model to which the News entity is related
     * @type {string}
     * @memberof CreateNewsParams
     */
    targetModel: CreateNewsParamsTargetModel;
    /**
     * Specific target id to which the News entity is related
     * @type {string}
     * @memberof CreateNewsParams
     */
    targetId: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNewsParamsTargetModel {
    SCHOOLS = 'schools',
    COURSES = 'courses',
    TEAMS = 'teams'
}



