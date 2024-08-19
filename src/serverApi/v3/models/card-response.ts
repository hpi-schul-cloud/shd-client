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


import { CollaborativeTextEditorElementResponse } from './collaborative-text-editor-element-response';
import { DrawingElementResponse } from './drawing-element-response';
import { ExternalToolElementResponse } from './external-tool-element-response';
import { FileElementResponse } from './file-element-response';
import { LinkElementResponse } from './link-element-response';
import { RichTextElementResponse } from './rich-text-element-response';
import { SubmissionContainerElementResponse } from './submission-container-element-response';
import { TimestampsResponse } from './timestamps-response';
import { VisibilitySettingsResponse } from './visibility-settings-response';

/**
 * 
 * @export
 * @interface CardResponse
 */
export interface CardResponse {
    /**
     * 
     * @type {string}
     * @memberof CardResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CardResponse
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof CardResponse
     */
    height: number;
    /**
     * 
     * @type {Array<ExternalToolElementResponse | FileElementResponse | LinkElementResponse | RichTextElementResponse | SubmissionContainerElementResponse | DrawingElementResponse | CollaborativeTextEditorElementResponse>}
     * @memberof CardResponse
     */
    elements: Array<ExternalToolElementResponse | FileElementResponse | LinkElementResponse | RichTextElementResponse | SubmissionContainerElementResponse | DrawingElementResponse | CollaborativeTextEditorElementResponse>;
    /**
     * 
     * @type {VisibilitySettingsResponse}
     * @memberof CardResponse
     */
    visibilitySettings: VisibilitySettingsResponse;
    /**
     * 
     * @type {TimestampsResponse}
     * @memberof CardResponse
     */
    timestamps: TimestampsResponse;
}


