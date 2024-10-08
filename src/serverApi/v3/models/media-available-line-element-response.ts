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
 * @interface MediaAvailableLineElementResponse
 */
export interface MediaAvailableLineElementResponse {
    /**
     * School External tool id of the media available line element
     * @type {string}
     * @memberof MediaAvailableLineElementResponse
     */
    schoolExternalToolId: string;
    /**
     * Name of the media available line element
     * @type {string}
     * @memberof MediaAvailableLineElementResponse
     */
    name: string;
    /**
     * Description of the media available line element
     * @type {string}
     * @memberof MediaAvailableLineElementResponse
     */
    description?: string;
    /**
     * Logo url of the media available line element
     * @type {string}
     * @memberof MediaAvailableLineElementResponse
     */
    logoUrl?: string;
    /**
     * Thumbnail url of the media available line element
     * @type {string}
     * @memberof MediaAvailableLineElementResponse
     */
    thumbnailUrl?: string;
}


