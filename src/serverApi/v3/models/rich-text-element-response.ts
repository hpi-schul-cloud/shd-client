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
import { RichTextElementContent } from './rich-text-element-content';
import { TimestampsResponse } from './timestamps-response';

/**
 * 
 * @export
 * @interface RichTextElementResponse
 */
export interface RichTextElementResponse {
    /**
     * 
     * @type {string}
     * @memberof RichTextElementResponse
     */
    id: string;
    /**
     * 
     * @type {ContentElementType}
     * @memberof RichTextElementResponse
     */
    type: ContentElementType;
    /**
     * 
     * @type {RichTextElementContent}
     * @memberof RichTextElementResponse
     */
    content: RichTextElementContent;
    /**
     * 
     * @type {TimestampsResponse}
     * @memberof RichTextElementResponse
     */
    timestamps: TimestampsResponse;
}

