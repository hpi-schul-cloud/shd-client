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


import { MediaAvailableLineElementResponse } from './media-available-line-element-response';
import { MediaBoardColors } from './media-board-colors';

/**
 * 
 * @export
 * @interface MediaAvailableLineResponse
 */
export interface MediaAvailableLineResponse {
    /**
     * Available media elements in the line
     * @type {Array<MediaAvailableLineElementResponse>}
     * @memberof MediaAvailableLineResponse
     */
    elements: Array<MediaAvailableLineElementResponse>;
    /**
     * 
     * @type {MediaBoardColors}
     * @memberof MediaAvailableLineResponse
     */
    backgroundColor: MediaBoardColors;
    /**
     * Collapse available media line
     * @type {boolean}
     * @memberof MediaAvailableLineResponse
     */
    collapsed: boolean;
}


