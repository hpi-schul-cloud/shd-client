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


import { LtiMessageType } from './lti-message-type';
import { LtiPrivacyPermission } from './lti-privacy-permission';
import { ToolConfigType } from './tool-config-type';

/**
 * 
 * @export
 * @interface Lti11ToolConfigCreateParams
 */
export interface Lti11ToolConfigCreateParams {
    /**
     * 
     * @type {ToolConfigType}
     * @memberof Lti11ToolConfigCreateParams
     */
    type: ToolConfigType;
    /**
     * 
     * @type {string}
     * @memberof Lti11ToolConfigCreateParams
     */
    baseUrl: string;
    /**
     * 
     * @type {string}
     * @memberof Lti11ToolConfigCreateParams
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof Lti11ToolConfigCreateParams
     */
    secret: string;
    /**
     * 
     * @type {LtiMessageType}
     * @memberof Lti11ToolConfigCreateParams
     */
    lti_message_type: LtiMessageType;
    /**
     * 
     * @type {LtiPrivacyPermission}
     * @memberof Lti11ToolConfigCreateParams
     */
    privacy_permission: LtiPrivacyPermission;
    /**
     * 
     * @type {string}
     * @memberof Lti11ToolConfigCreateParams
     */
    launch_presentation_locale: string;
}


