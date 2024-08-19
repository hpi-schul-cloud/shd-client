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
import { ExternalToolContentBody } from './external-tool-content-body';

/**
 * 
 * @export
 * @interface ExternalToolElementContentBody
 */
export interface ExternalToolElementContentBody {
    /**
     * 
     * @type {ContentElementType}
     * @memberof ExternalToolElementContentBody
     */
    type: ContentElementType;
    /**
     * 
     * @type {ExternalToolContentBody}
     * @memberof ExternalToolElementContentBody
     */
    content: ExternalToolContentBody;
}


