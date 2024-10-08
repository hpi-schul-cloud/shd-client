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


import { DrawingElementContentBody } from './drawing-element-content-body';
import { ExternalToolElementContentBody } from './external-tool-element-content-body';
import { FileElementContentBody } from './file-element-content-body';
import { LinkElementContentBody } from './link-element-content-body';
import { RichTextElementContentBody } from './rich-text-element-content-body';
import { SubmissionContainerElementContentBody } from './submission-container-element-content-body';

/**
 * 
 * @export
 * @interface UpdateElementContentBodyParams
 */
export interface UpdateElementContentBodyParams {
    /**
     * 
     * @type {FileElementContentBody | LinkElementContentBody | RichTextElementContentBody | SubmissionContainerElementContentBody | ExternalToolElementContentBody | DrawingElementContentBody}
     * @memberof UpdateElementContentBodyParams
     */
    data: FileElementContentBody | LinkElementContentBody | RichTextElementContentBody | SubmissionContainerElementContentBody | ExternalToolElementContentBody | DrawingElementContentBody;
}


