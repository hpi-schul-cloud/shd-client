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


import { DashboardGridSubElementResponse } from './dashboard-grid-sub-element-response';

/**
 * 
 * @export
 * @interface DashboardGridElementResponse
 */
export interface DashboardGridElementResponse {
    /**
     * The id of the Grid element
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    id: string;
    /**
     * Title of the Grid element
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    title: string;
    /**
     * Short title of the Grid element
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    shortTitle: string;
    /**
     * Color of the Grid element
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    displayColor: string;
    /**
     * X position of the Grid element
     * @type {number}
     * @memberof DashboardGridElementResponse
     */
    xPosition: number;
    /**
     * Y position of the Grid element
     * @type {number}
     * @memberof DashboardGridElementResponse
     */
    yPosition: number;
    /**
     * The id of the group element
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    groupId: string;
    /**
     * List of all subelements in the group
     * @type {Array<DashboardGridSubElementResponse>}
     * @memberof DashboardGridElementResponse
     */
    groupElements: Array<DashboardGridSubElementResponse>;
    /**
     * Start of the copying process if it is still ongoing - otherwise property is not set.
     * @type {string}
     * @memberof DashboardGridElementResponse
     */
    copyingSince: string;
    /**
     * Is the course synchronized with a group?
     * @type {boolean}
     * @memberof DashboardGridElementResponse
     */
    isSynchronized: boolean;
}

